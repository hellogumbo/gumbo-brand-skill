#!/usr/bin/env node

import { existsSync, mkdtempSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
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

function collectFiles(directory, extensions = new Set([".css", ".html", ".md"])) {
  const files = [];
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...collectFiles(entryPath, extensions));
    else if (extensions.has(entry.name.slice(entry.name.lastIndexOf(".")))) files.push(entryPath);
  }
  return files;
}

function declarationBlocks(source) {
  return [
    ...[...source.matchAll(/\{([^{}]+)\}/g)].map((match) => match[1]),
    ...[...source.matchAll(/style\s*=\s*"([^"]+)"/g)].map((match) => match[1]),
  ];
}

try {
  console.log(run("verify-install.mjs"));

  const skillSource = readFileSync(join(pluginRoot, "skills/gumbo-brand/SKILL.md"), "utf8");
  for (const referenceName of [
    "foundations.md",
    "layouts.md",
    "visual-assets.md",
    "presentations.md",
    "artifacts.md",
    "resources.md",
  ]) {
    if (!skillSource.includes(referenceName)) {
      throw new Error(`gumbo-brand skill does not route to references/${referenceName}`);
    }
  }
  if (/companion skill|gumbo-brand:(?:layouts|artifacts|foundations|presentations|visual-assets)/i.test(skillSource)) {
    throw new Error("gumbo-brand skill still routes to independently discoverable companion skills");
  }

  const governedFiles = [
    join(pluginRoot, "assets/theme/gumbo.css"),
    ...collectFiles(join(pluginRoot, "templates")),
  ];
  for (const filePath of governedFiles) {
    const source = readFileSync(filePath, "utf8");
    const relativePath = filePath.slice(pluginRoot.length + 1);
    if (/text-transform\s*:\s*uppercase/i.test(source)) {
      throw new Error(`${relativePath}: CSS uppercase transforms are forbidden`);
    }
    if (/letter-spacing\s*:\s*-(?:\d|\.)/i.test(source)) {
      throw new Error(`${relativePath}: negative letter spacing is forbidden`);
    }
    if (/>\s*\/\/|\/\/\s+[A-Z][A-Z]/.test(source)) {
      throw new Error(`${relativePath}: decorative slash labels are forbidden`);
    }
    for (const declarations of declarationBlocks(source)) {
      const fontSize = Number.parseFloat(declarations.match(/font-size\s*:\s*([\d.]+)px/i)?.[1]);
      const lineHeight = Number.parseFloat(declarations.match(/line-height\s*:\s*([\d.]+)/i)?.[1]);
      if (
        Number.isFinite(fontSize)
        && fontSize >= 32
        && Number.isFinite(lineHeight)
        && lineHeight < 1.14
      ) {
        throw new Error(
          `${relativePath}: ${fontSize}px display text uses crowded ${lineHeight} line-height; minimum is 1.14`,
        );
      }
    }
  }

  for (const type of ["document", "deck", "web", "social"]) {
    const outputPath = join(temporaryRoot, `${type}.html`);
    console.log(run("create-html.mjs", ["--type", type, "--out", outputPath]));

    if (!existsSync(outputPath)) throw new Error(`${type}: output was not created`);
    if (statSync(outputPath).size < 10_000) throw new Error(`${type}: output is unexpectedly small`);

    const html = readFileSync(outputPath, "utf8");
    if (html.includes("{{")) throw new Error(`${type}: unresolved template placeholder`);
    if (!html.includes("<svg")) throw new Error(`${type}: official SVG wordmark was not inlined`);
    if (!html.includes("--gumbo-blue: #2563eb")) throw new Error(`${type}: canonical theme was not inlined`);
    if (/text-transform\s*:\s*uppercase/i.test(html)) throw new Error(`${type}: uppercase transform leaked into output`);
    if (/letter-spacing\s*:\s*-(?:\d|\.)/i.test(html)) throw new Error(`${type}: negative tracking leaked into output`);
    if (/>\s*\/\//.test(html)) throw new Error(`${type}: decorative slash label leaked into output`);
    if (!html.includes("data:image/")) {
      throw new Error(`${type}: bundled photography was not embedded`);
    }
  }

  console.log(`Smoke test passed for all starters in ${temporaryRoot}`);
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true });
}
