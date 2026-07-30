#!/usr/bin/env node

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, extname, resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));
const pluginRoot = resolve(scriptDir, "..");

const templates = {
  document: "document.html",
  deck: "deck.html",
  web: "web-page.html",
  social: "social-card.html",
};

const defaultPhotos = {
  document: "hero-landscape-halftone.jpg",
  deck: "hero-landscape-halftone.jpg",
  web: "team-working-dark-halftone.jpg",
  social: "people-gathering-glow-halftone.jpg",
};

function parseArgs(argv) {
  const result = { type: null, out: null, photo: null };
  for (let index = 0; index < argv.length; index += 1) {
    const argument = argv[index];
    if (argument === "--type") result.type = argv[++index];
    else if (argument === "--out") result.out = argv[++index];
    else if (argument === "--photo") result.photo = argv[++index];
    else if (argument === "--help" || argument === "-h") result.help = true;
  }
  return result;
}

function usage() {
  console.log("Usage: node scripts/create-html.mjs --type <document|deck|web|social> --out <file.html> [--photo <bundled filename>]");
}

function mimeType(filePath) {
  const extension = extname(filePath).toLowerCase();
  if (extension === ".png") return "image/png";
  if (extension === ".webp") return "image/webp";
  return "image/jpeg";
}

function dataUri(filePath) {
  const bytes = readFileSync(filePath);
  return `data:${mimeType(filePath)};base64,${bytes.toString("base64")}`;
}

const args = parseArgs(process.argv.slice(2));
if (args.help) {
  usage();
  process.exit(0);
}

if (!args.type || !templates[args.type] || !args.out) {
  usage();
  process.exit(1);
}

const templatePath = join(pluginRoot, "templates/html", templates[args.type]);
const themePath = join(pluginRoot, "assets/theme/gumbo.css");
const blackWordmarkPath = join(pluginRoot, "assets/logo/wordmark-black.svg");
const whiteWordmarkPath = join(pluginRoot, "assets/logo/wordmark-white.svg");
const photoPath = join(pluginRoot, "assets/photography", args.photo || defaultPhotos[args.type]);
const outputPath = resolve(args.out);

let html = readFileSync(templatePath, "utf8");
const replacements = {
  "{{THEME_CSS}}": readFileSync(themePath, "utf8"),
  "{{WORDMARK_BLACK}}": readFileSync(blackWordmarkPath, "utf8"),
  "{{WORDMARK_WHITE}}": readFileSync(whiteWordmarkPath, "utf8"),
  "{{PHOTO_DATA_URI}}": dataUri(photoPath),
  "{{DATE}}": new Date().toISOString().slice(0, 10),
};

for (const [placeholder, value] of Object.entries(replacements)) {
  html = html.replaceAll(placeholder, value);
}

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, html);

console.log(`Created Gumbo ${args.type}: ${outputPath}`);
console.log(`Template: ${templatePath}`);
console.log(`Photography: ${photoPath}`);
