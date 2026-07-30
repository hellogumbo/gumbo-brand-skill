#!/usr/bin/env node

import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const pluginRoot = resolve(import.meta.dirname, "..");
const temporaryRoot = mkdtempSync(join(tmpdir(), "gumbo-brand-audit-"));
const inputPath = join(temporaryRoot, "misaligned-split-header.html");
const outputPath = join(temporaryRoot, "should-not-render.png");

const fixture = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; }
    body { margin: 0; font-family: Arial, sans-serif; }
    .page { width: 816px; height: 1056px; overflow: hidden; padding: 48px; }
    .split-header {
      display: grid;
      grid-template-columns: 240px 1fr;
      column-gap: 48px;
      align-items: start;
    }
    .overline { margin: 0; font-size: 13px; line-height: 1.4; }
    .split-header__heading {
      width: 220px;
      margin: 0;
      font-size: 48px;
      line-height: 1.05;
      font-weight: 400;
    }
    .split-header__copy { margin: 0; font-size: 18px; line-height: 1.5; }
  </style>
</head>
<body>
  <main class="page">
    <section class="split-header">
      <div>
        <p class="overline">What changed</p>
        <h1 class="split-header__heading">A heading across three lines.</h1>
      </div>
      <p class="split-header__copy">This body starts beside the label, so it is visibly too high.</p>
    </section>
  </main>
</body>
</html>`;

try {
  writeFileSync(inputPath, fixture);
  const result = spawnSync(process.execPath, [
    join(pluginRoot, "scripts/html-export.mjs"),
    inputPath,
    outputPath,
    "--width",
    "816",
    "--height",
    "1056",
  ], {
    cwd: pluginRoot,
    encoding: "utf8",
    env: process.env,
  });

  if (result.status === 0) {
    throw new Error("misaligned fixture exported successfully; the brand audit should have blocked it");
  }

  const auditOutput = `${result.stdout}\n${result.stderr}`;
  for (const expectedIssue of [
    "crowded line height",
    "split-header body misalignment",
    "label-to-heading gap",
  ]) {
    if (!auditOutput.includes(expectedIssue)) {
      throw new Error(`brand audit did not report "${expectedIssue}":\n${auditOutput}`);
    }
  }

  console.log("Brand audit regression test passed: crowded and misaligned split header was blocked.");
} finally {
  rmSync(temporaryRoot, { recursive: true, force: true });
}
