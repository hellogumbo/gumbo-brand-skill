#!/usr/bin/env node

import { existsSync, readFileSync, statSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];

function readJson(relativePath) {
  const absolutePath = join(repositoryRoot, relativePath);
  if (!existsSync(absolutePath) || !statSync(absolutePath).isFile()) {
    errors.push(`missing file: ${relativePath}`);
    return null;
  }

  try {
    return JSON.parse(readFileSync(absolutePath, "utf8"));
  } catch (error) {
    errors.push(`invalid JSON in ${relativePath}: ${error.message}`);
    return null;
  }
}

const claudeMarketplace = readJson(".claude-plugin/marketplace.json");
const claudeManifest = readJson("plugins/gumbo-brand/.claude-plugin/plugin.json");
const codexMarketplace = readJson(".agents/plugins/marketplace.json");
const codexManifest = readJson("plugins/gumbo-brand/.codex-plugin/plugin.json");

if (claudeMarketplace) {
  if (claudeMarketplace.name !== "gumbo-team") {
    errors.push("Claude marketplace name must be gumbo-team");
  }

  const gumboEntry = claudeMarketplace.plugins?.find(
    (plugin) => plugin.name === "gumbo-brand",
  );
  if (!gumboEntry) {
    errors.push("Claude marketplace must expose gumbo-brand");
  } else if (gumboEntry.source !== "./plugins/gumbo-brand") {
    errors.push("Claude marketplace source must be ./plugins/gumbo-brand");
  }
}

if (claudeManifest) {
  if (claudeManifest.name !== "gumbo-brand") {
    errors.push("Claude manifest name must be gumbo-brand");
  }
  if (Object.hasOwn(claudeManifest, "version")) {
    errors.push(
      "Claude manifest must omit version so Git marketplace installs update by commit SHA",
    );
  }
}

if (codexMarketplace) {
  const gumboEntry = codexMarketplace.plugins?.find(
    (plugin) => plugin.name === "gumbo-brand",
  );
  if (
    !gumboEntry ||
    gumboEntry.source?.source !== "local" ||
    gumboEntry.source?.path !== "./plugins/gumbo-brand"
  ) {
    errors.push("Codex marketplace must expose the local ./plugins/gumbo-brand source");
  }
}

if (codexManifest?.name !== "gumbo-brand") {
  errors.push("Codex manifest name must be gumbo-brand");
}

if (errors.length > 0) {
  console.error("Gumbo distribution verification failed.");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Gumbo distribution verified.");
console.log("Claude: gumbo-brand@gumbo-team updates by Git commit SHA");
console.log("Codex: gumbo-brand@gumbo-team resolves to ./plugins/gumbo-brand");
