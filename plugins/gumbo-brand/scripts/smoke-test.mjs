#!/usr/bin/env node

import { existsSync, mkdtempSync, readFileSync, rmSync, statSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const pluginRoot = resolve(scriptDir, "..");
const temporaryRoot = mkdtempSync(join(tmpdir(), "gumbo-brand-smoke-"));

function run(script, args = []) {
  const result = spawnSync(process.execPath, [join(scriptDir, script), ...args], {
    cwd: pluginRoot,
    encoding: "utf8",
  });
  if (result.status !== 0) {
    throw new Error(`${script} failed:\n${result.stdout}\n${result.stderr}`);
  }
  return result.stdout.trim();
}

try {
  console.log(run("verify-install.mjs"));

  for (const type of ["document", "deck", "web", "social"]) {
    const outputPath = join(temporaryRoot, `${type}.html`);
    console.log(run("create-html.mjs", ["--type", type, "--out", outputPath]));

    if (!existsSync(outputPath)) throw new Error(`${type}: output was not created`);
    if (statSync(outputPath).size < 10_000) throw new Error(`${type}: output is unexpectedly small`);

    const html = readFileSync(outputPath, "utf8");
    if (html.includes("{{")) throw new Error(`${type}: unresolved template placeholder`);
    if (!html.includes("<svg")) throw new Error(`${type}: official SVG wordmark was not inlined`);
    if (!html.includes("--gumbo-blue: #2563eb")) throw new Error(`${type}: canonical theme was not inlined`);
    if ((type === "deck" || type === "web" || type === "social") && !html.includes("data:image/")) {
      throw new Error(`${type}: bundled photography was not embedded`);
    }
  }

  console.log(`Smoke test passed for all starters in ${temporaryRoot}`);
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true });
}
