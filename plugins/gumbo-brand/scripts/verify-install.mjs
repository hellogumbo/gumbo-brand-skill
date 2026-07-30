#!/usr/bin/env node

import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const rootArgIndex = process.argv.indexOf("--root");
const pluginRoot = rootArgIndex >= 0 && process.argv[rootArgIndex + 1]
  ? resolve(process.argv[rootArgIndex + 1])
  : resolve(scriptDir, "..");

function countFiles(directory) {
  if (!existsSync(directory)) return 0;
  let count = 0;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const entryPath = join(directory, entry.name);
    if (entry.isDirectory()) count += countFiles(entryPath);
    else if (entry.isFile()) count += 1;
  }
  return count;
}

const requiredFiles = [
  ".codex-plugin/plugin.json",
  ".claude-plugin/plugin.json",
  "skills/gumbo-brand/SKILL.md",
  "skills/foundations/SKILL.md",
  "skills/layouts/SKILL.md",
  "skills/visual-assets/SKILL.md",
  "skills/presentations/SKILL.md",
  "skills/artifacts/SKILL.md",
  "assets/theme/gumbo.css",
  "assets/logo/wordmark-black.svg",
  "assets/logo/wordmark-white.svg",
  "assets/logo/pot-icon.svg",
  "templates/html/document.html",
  "templates/html/deck.html",
  "templates/html/web-page.html",
  "templates/html/social-card.html",
  "templates/slides/01-title-opener.md",
  "scripts/create-html.mjs",
  "scripts/html-edit-server.mjs",
  "scripts/html-export.mjs",
  "scripts/lib/brand-audit.mjs",
];

const errors = [];
for (const relativePath of requiredFiles) {
  const absolutePath = join(pluginRoot, relativePath);
  if (!existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
    errors.push(`missing file: ${relativePath}`);
  }
}

const counts = {
  icons: countFiles(join(pluginRoot, "assets/icons")),
  logos: countFiles(join(pluginRoot, "assets/logo")),
  photography: countFiles(join(pluginRoot, "assets/photography")),
  htmlStarters: countFiles(join(pluginRoot, "templates/html")),
  slideTemplates: countFiles(join(pluginRoot, "templates/slides")),
};

const minimums = {
  icons: 100,
  logos: 5,
  photography: 5,
  htmlStarters: 4,
  slideTemplates: 7,
};

for (const [name, minimum] of Object.entries(minimums)) {
  if (counts[name] < minimum) {
    errors.push(`${name}: expected at least ${minimum}, found ${counts[name]}`);
  }
}

const codexManifestPath = join(pluginRoot, ".codex-plugin/plugin.json");
if (existsSync(codexManifestPath)) {
  try {
    const manifest = JSON.parse(readFileSync(codexManifestPath, "utf8"));
    if (manifest.name !== "gumbo-brand") errors.push("Codex manifest name must be gumbo-brand");
    if (manifest.skills !== "./skills/") errors.push("Codex manifest skills path must be ./skills/");
  } catch (error) {
    errors.push(`invalid Codex manifest JSON: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error("Gumbo plugin verification failed.");
  console.error(`Resolved plugin root: ${pluginRoot}`);
  for (const error of errors) console.error(`- ${error}`);
  console.error("Install the complete plugins/gumbo-brand directory. Isolated SKILL.md files are unsupported.");
  process.exit(1);
}

console.log("Gumbo plugin verified.");
console.log(`Plugin root: ${pluginRoot}`);
console.log(`Assets: ${counts.icons} icons, ${counts.logos} logos, ${counts.photography} photographs`);
console.log(`Structures: ${counts.htmlStarters} HTML starters, ${counts.slideTemplates} slide templates`);
