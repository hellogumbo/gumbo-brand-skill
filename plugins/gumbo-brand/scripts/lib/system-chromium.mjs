import { spawn } from "node:child_process";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function waitForDevTools(profileDirectory, browserProcess) {
  const activePortPath = join(profileDirectory, "DevToolsActivePort");
  const deadline = Date.now() + 10_000;

  while (Date.now() < deadline) {
    if (browserProcess.exitCode !== null) {
      throw new Error(`Chromium exited before DevTools started (code ${browserProcess.exitCode})`);
    }
    try {
      const [port] = (await readFile(activePortPath, "utf8")).trim().split(/\r?\n/);
      if (port) return Number(port);
    } catch {
      // Chromium creates the file asynchronously.
    }
    await delay(50);
  }

  throw new Error("Timed out waiting for Chromium DevTools");
}

async function connect(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  const pending = new Map();
  let nextId = 1;

  await new Promise((resolve, reject) => {
    socket.addEventListener("open", resolve, { once: true });
    socket.addEventListener("error", () => reject(new Error("Could not connect to Chromium DevTools")), {
      once: true,
    });
  });

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (!message.id || !pending.has(message.id)) return;
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    if (message.error) reject(new Error(message.error.message));
    else resolve(message.result);
  });

  function send(method, params = {}) {
    const id = nextId++;
    return new Promise((resolve, reject) => {
      pending.set(id, { resolve, reject });
      socket.send(JSON.stringify({ id, method, params }));
    });
  }

  return { send, socket };
}

function createPage(client, initialViewport) {
  let viewport = { ...initialViewport };

  async function setViewport(width, height, deviceScaleFactor = viewport.deviceScaleFactor) {
    viewport = { width, height, deviceScaleFactor };
    await client.send("Emulation.setDeviceMetricsOverride", {
      width,
      height,
      deviceScaleFactor,
      mobile: false,
    });
  }

  return {
    async initialize() {
      await Promise.all([
        client.send("Page.enable"),
        client.send("Runtime.enable"),
        client.send("Network.enable"),
      ]);
      await setViewport(viewport.width, viewport.height, viewport.deviceScaleFactor);
    },

    async goto(url, options = {}) {
      await client.send("Page.navigate", { url });
      const deadline = Date.now() + (options.timeout || 30_000);
      while (Date.now() < deadline) {
        const ready = await this.evaluate(() => document.readyState === "complete");
        if (ready) return;
        await delay(50);
      }
      throw new Error(`Timed out loading ${url}`);
    },

    async evaluate(callback, ...args) {
      const serializedArgs = args.map((argument) => JSON.stringify(argument)).join(",");
      const expression = `(${callback.toString()})(${serializedArgs})`;
      const response = await client.send("Runtime.evaluate", {
        expression,
        awaitPromise: true,
        returnByValue: true,
      });
      if (response.exceptionDetails) {
        throw new Error(response.exceptionDetails.exception?.description || "Chromium evaluation failed");
      }
      return response.result.value;
    },

    async pdf(options) {
      const response = await client.send("Page.printToPDF", {
        paperWidth: viewport.width / 96,
        paperHeight: viewport.height / 96,
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        printBackground: options.printBackground !== false,
        preferCSSPageSize: false,
      });
      await writeFile(options.path, Buffer.from(response.data, "base64"));
    },

    async screenshot(options) {
      const response = await client.send("Page.captureScreenshot", {
        format: "png",
        captureBeyondViewport: true,
        fromSurface: true,
        clip: {
          x: options.clip.x,
          y: options.clip.y,
          width: options.clip.width,
          height: options.clip.height,
          scale: 1,
        },
      });
      await writeFile(options.path, Buffer.from(response.data, "base64"));
    },

    async setViewport(options) {
      await setViewport(options.width, options.height, options.deviceScaleFactor || 1);
    },

    async setViewportSize(options) {
      await setViewport(options.width, options.height, viewport.deviceScaleFactor);
    },
  };
}

export async function launchSystemChromium(executablePath, viewport) {
  const profileDirectory = await mkdtemp(join(tmpdir(), "gumbo-chromium-"));
  const browserProcess = spawn(executablePath, [
    "--headless=new",
    "--remote-debugging-port=0",
    `--user-data-dir=${profileDirectory}`,
    "--disable-background-networking",
    "--disable-component-update",
    "--disable-default-apps",
    "--disable-extensions",
    "--disable-gpu",
    "--no-default-browser-check",
    "--no-first-run",
    "about:blank",
  ], {
    stdio: ["ignore", "ignore", "ignore"],
  });

  try {
    const port = await waitForDevTools(profileDirectory, browserProcess);
    const targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json();
    const target = targets.find((candidate) => candidate.type === "page");
    if (!target?.webSocketDebuggerUrl) throw new Error("Chromium did not expose a page target");

    const client = await connect(target.webSocketDebuggerUrl);
    const page = createPage(client, viewport);
    await page.initialize();

    return {
      browser: {
        async close() {
          client.socket.close();
          if (browserProcess.exitCode === null) browserProcess.kill();
          await Promise.race([
            new Promise((resolve) => browserProcess.once("exit", resolve)),
            delay(1_000),
          ]);
          await rm(profileDirectory, { recursive: true, force: true });
        },
      },
      page,
    };
  } catch (error) {
    if (browserProcess.exitCode === null) browserProcess.kill();
    await rm(profileDirectory, { recursive: true, force: true });
    throw error;
  }
}
