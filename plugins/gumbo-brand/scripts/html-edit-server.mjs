#!/usr/bin/env node

import {
  createReadStream,
  existsSync,
  readFileSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { createServer } from "node:http";
import { dirname, extname, join, normalize, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawn } from "node:child_process";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const exportScript = join(scriptDir, "html-export.mjs");

function parseArgs(argv) {
  const result = { input: null, out: null, pdf: null, size: "letter", port: 4321 };
  const positional = [];
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--out") result.out = argv[++index];
    else if (argument === "--pdf") result.pdf = argv[++index];
    else if (argument === "--size") result.size = argv[++index];
    else if (argument === "--port") result.port = Number(argv[++index]);
    else if (!argument.startsWith("--")) positional.push(argument);
  }
  result.input = positional[0] || null;
  return result;
}

function contentType(filePath) {
  return {
    ".css": "text/css; charset=utf-8",
    ".gif": "image/gif",
    ".html": "text/html; charset=utf-8",
    ".jpeg": "image/jpeg",
    ".jpg": "image/jpeg",
    ".js": "text/javascript; charset=utf-8",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".webp": "image/webp",
  }[extname(filePath).toLowerCase()] || "application/octet-stream";
}

function safeResolve(root, requestPath) {
  const cleanPath = decodeURIComponent(requestPath.split("?")[0]).replace(/^\/+/, "");
  const candidate = resolve(root, normalize(cleanPath || "."));
  return candidate === root || candidate.startsWith(`${root}/`) ? candidate : null;
}

function readJson(request) {
  return new Promise((resolveBody, rejectBody) => {
    let body = "";
    request.on("data", (chunk) => {
      body += chunk;
      if (body.length > 50_000_000) rejectBody(new Error("Request body is too large"));
    });
    request.on("end", () => {
      try {
        resolveBody(JSON.parse(body));
      } catch (error) {
        rejectBody(error);
      }
    });
    request.on("error", rejectBody);
  });
}

function runExport(source, pdf, size) {
  return new Promise((resolveExport, rejectExport) => {
    const child = spawn(process.execPath, [exportScript, source, pdf, "--size", size], {
      stdio: ["ignore", "pipe", "pipe"],
    });
    let output = "";
    child.stdout.on("data", (chunk) => { output += chunk; });
    child.stderr.on("data", (chunk) => { output += chunk; });
    child.on("error", rejectExport);
    child.on("close", (code) => {
      if (code === 0) resolveExport(output.trim());
      else rejectExport(new Error(output.trim() || `Export exited with code ${code}`));
    });
  });
}

function editorHtml(title) {
  const safeTitle = title.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Gumbo editor · ${safeTitle}</title>
  <style>
    *{box-sizing:border-box}body{margin:0;height:100vh;display:flex;flex-direction:column;background:#e8e8e8;color:#111;font:14px Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:12px 16px;background:#fff;border-bottom:1px solid #d0d0d0}
    .actions{display:flex;align-items:center;gap:8px}button{padding:9px 13px;border:1px solid #d0d0d0;border-radius:8px;background:#fff;color:#111;font:600 13px inherit;cursor:pointer}
    button.primary{border-color:#2563eb;background:#2563eb;color:#fff}.status{min-width:160px;color:#727272;text-align:right}iframe{width:100%;flex:1;border:0;background:#fff}
  </style>
</head>
<body>
  <header>
    <div><strong>${safeTitle}</strong><div style="color:#727272;font-size:12px">Direct text editing is enabled inside the artifact.</div></div>
    <div class="actions">
      <button id="reload">Reload</button>
      <button id="save">Save</button>
      <button class="primary" id="export">Save + Export PDF</button>
      <span class="status" id="status">Ready</span>
    </div>
  </header>
  <iframe id="artifact" src="/artifact"></iframe>
  <script>
    const frame = document.getElementById("artifact");
    const status = document.getElementById("status");
    frame.addEventListener("load", () => {
      frame.contentDocument.body.contentEditable = "true";
      frame.contentDocument.body.spellcheck = true;
      status.textContent = "Editing enabled";
    });
    function currentHtml() {
      const doc = frame.contentDocument;
      doc.body.removeAttribute("contenteditable");
      doc.body.removeAttribute("spellcheck");
      const html = "<!doctype html>\\n" + doc.documentElement.outerHTML;
      doc.body.contentEditable = "true";
      doc.body.spellcheck = true;
      return html;
    }
    async function post(path) {
      status.textContent = "Working…";
      const response = await fetch(path, {
        method: "POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({html: currentHtml()})
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Request failed");
      status.textContent = result.message;
    }
    document.getElementById("reload").onclick = () => frame.contentWindow.location.reload();
    document.getElementById("save").onclick = () => post("/save").catch((error) => status.textContent = error.message);
    document.getElementById("export").onclick = () => post("/export").catch((error) => status.textContent = error.message);
  </script>
</body>
</html>`;
}

const args = parseArgs(process.argv.slice(2));
if (!args.input) {
  console.error("Usage: node scripts/html-edit-server.mjs <input.html> [--out file.html] [--pdf file.pdf] [--size preset] [--port number]");
  process.exit(1);
}

const inputPath = resolve(args.input);
const outputPath = resolve(args.out || inputPath);
const pdfPath = resolve(args.pdf || inputPath.replace(/\.html?$/i, ".pdf"));
const assetRoot = dirname(inputPath);

if (!existsSync(inputPath)) {
  console.error(`Input does not exist: ${inputPath}`);
  process.exit(1);
}

const server = createServer(async (request, response) => {
  try {
    const url = request.url || "/";
    if (request.method === "GET" && url === "/") {
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end(editorHtml(inputPath.split("/").at(-1)));
      return;
    }
    if (request.method === "GET" && url === "/artifact") {
      response.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      response.end(readFileSync(inputPath));
      return;
    }
    if (request.method === "POST" && (url === "/save" || url === "/export")) {
      const payload = await readJson(request);
      if (typeof payload.html !== "string" || !payload.html.includes("<html")) {
        throw new Error("No valid HTML was received");
      }
      writeFileSync(outputPath, payload.html);
      let message = `Saved ${outputPath}`;
      if (url === "/export") message = await runExport(outputPath, pdfPath, args.size);
      response.writeHead(200, { "content-type": "application/json" });
      response.end(JSON.stringify({ message }));
      return;
    }
    if (request.method === "GET") {
      const filePath = safeResolve(assetRoot, url);
      if (filePath && existsSync(filePath) && statSync(filePath).isFile()) {
        response.writeHead(200, { "content-type": contentType(filePath) });
        createReadStream(filePath).pipe(response);
        return;
      }
    }
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
  } catch (error) {
    response.writeHead(400, { "content-type": "application/json" });
    response.end(JSON.stringify({ error: error.message }));
  }
});

server.listen(args.port, "127.0.0.1", () => {
  console.log(`Gumbo editor: http://127.0.0.1:${args.port}`);
  console.log(`Source: ${inputPath}`);
  console.log(`Save target: ${outputPath}`);
  console.log(`PDF target: ${pdfPath}`);
});
