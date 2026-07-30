#!/usr/bin/env node

/**
 * Gumbo HTML Export Pipeline
 *
 * Converts Gumbo HTML artifacts to PDF or PNG using Puppeteer.
 * Agent-agnostic: any AI agent, CI pipeline, or human developer can run this.
 *
 * Usage:
 *   node scripts/html-export.mjs <input.html> <output> [options]
 *
 * Options:
 *   --size <preset>    Named preset (see table below)
 *   --format <fmt>     Force output format: pdf or png
 *   --width <px>       Custom width (overrides preset)
 *   --height <px>      Custom height (overrides preset)
 *
 * Presets:
 *   PDF (documents, decks, print):
 *     letter (default)  816x1056   One-pagers, proposals, SOWs
 *     a4                595x842    International documents
 *     slide             1920x1080  Pitch decks, presentations
 *
 *   PNG (social, web, uploads):
 *     twitter           1200x675   Twitter/X post images
 *     twitter-header    1500x500   Twitter/X banner
 *     linkedin          1200x627   LinkedIn feed images
 *     og                1200x630   Link preview cards
 *     ig-square         1080x1080  Instagram feed posts
 *     ig-story          1080x1920  Instagram stories/reels
 *     mobile            390x844    Mobile web screenshots
 *
 * Examples:
 *   node scripts/html-export.mjs one-pager.html proposal.pdf
 *   node scripts/html-export.mjs one-pager.html proposal.pdf --size a4
 *   node scripts/html-export.mjs deck.html deck.pdf --size slide
 *   node scripts/html-export.mjs post.html card.png --size linkedin
 *   node scripts/html-export.mjs story.html story.png --size ig-story
 *   node scripts/html-export.mjs custom.html out.png --width 1440 --height 900
 */

import { existsSync, readFileSync } from "fs";
import { resolve, extname, dirname, basename, join } from "path";
import { pathToFileURL } from "url";
import { createRequire } from "module";
import { auditGumboPage } from "./lib/brand-audit.mjs";

const localRequire = createRequire(import.meta.url);
const dependencyRequire = process.env.GUMBO_NODE_MODULES
  ? createRequire(join(resolve(process.env.GUMBO_NODE_MODULES), "package.json"))
  : localRequire;

function findSystemChromium() {
  const candidates = [
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Chromium.app/Contents/MacOS/Chromium",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  ];
  return candidates.find((candidate) => existsSync(candidate)) || null;
}

const PRESETS = {
  // PDF presets — shared, presented, or printed
  letter:         { width: 816,  height: 1056, format: "pdf" },
  a4:             { width: 595,  height: 842,  format: "pdf" },
  slide:          { width: 1920, height: 1080, format: "pdf" },

  // PNG presets — uploaded to platforms as images
  twitter:        { width: 1200, height: 675,  format: "png" },
  "twitter-header": { width: 1500, height: 500,  format: "png" },
  linkedin:       { width: 1200, height: 627,  format: "png" },
  og:             { width: 1200, height: 630,  format: "png" },
  "ig-square":    { width: 1080, height: 1080, format: "png" },
  "ig-story":     { width: 1080, height: 1920, format: "png" },
  mobile:         { width: 390,  height: 844,  format: "png" },
};

function parseArgs(args) {
  const parsed = { input: null, output: null, size: "letter", format: null, width: null, height: null };
  const positional = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg === "--size" && args[i + 1]) {
      parsed.size = args[++i];
    } else if (arg === "--format" && args[i + 1]) {
      parsed.format = args[++i];
    } else if (arg === "--width" && args[i + 1]) {
      parsed.width = parseInt(args[++i], 10);
    } else if (arg === "--height" && args[i + 1]) {
      parsed.height = parseInt(args[++i], 10);
    } else if (!arg.startsWith("--")) {
      positional.push(arg);
    }
  }

  parsed.input = positional[0] || null;
  parsed.output = positional[1] || null;
  return parsed;
}

function resolveConfig(args) {
  const preset = PRESETS[args.size];
  if (!preset && !args.width) {
    console.error(`Unknown preset: ${args.size}`);
    console.error(`Available presets: ${Object.keys(PRESETS).join(", ")}`);
    process.exit(1);
  }

  const width = args.width || preset.width;
  const height = args.height || preset.height;

  // Format priority: --format flag > custom dimensions default (png) > preset default
  let format;
  if (args.format) {
    format = args.format;
  } else if (args.width || args.height) {
    format = "png";
  } else {
    format = preset.format;
  }

  return { width, height, format };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));

  if (!args.input || !args.output) {
    console.error("Usage: node scripts/html-export.mjs <input.html> <output> [options]");
    console.error("Run with --help or see script header for details.");
    process.exit(1);
  }

  const { width, height, format } = resolveConfig(args);
  const inputPath = resolve(args.input);
  const outputPath = resolve(args.output);

  // Prefer Puppeteer, then fall back to Playwright when the host bundles it.
  let browser;
  let page;
  let renderer;
  try {
    const puppeteerModule = dependencyRequire("puppeteer");
    const puppeteer = puppeteerModule.default || puppeteerModule;
    browser = await puppeteer.launch({ headless: true });
    page = await browser.newPage();
    await page.setViewport({ width, height, deviceScaleFactor: 2 });
    renderer = "Puppeteer";
  } catch (puppeteerError) {
    try {
      const { chromium } = dependencyRequire("playwright");
      const systemChromium = findSystemChromium();
      browser = await chromium.launch({
        headless: true,
        ...(systemChromium ? { executablePath: systemChromium } : {}),
      });
      page = await browser.newPage({
        viewport: { width, height },
        deviceScaleFactor: 2,
      });
      renderer = "Playwright";
    } catch (playwrightError) {
      console.error("A Chromium renderer is required.");
      console.error("Install Puppeteer with: npm install puppeteer");
      console.error("Or install Playwright with: npm install playwright");
      console.error(`Puppeteer: ${puppeteerError.message}`);
      console.error(`Playwright: ${playwrightError.message}`);
      process.exit(1);
    }
  }

  // Load the HTML file
  const fileUrl = pathToFileURL(inputPath).href;
  await page.goto(fileUrl, { waitUntil: "networkidle0", timeout: 30000 });

  // Preview chrome must never leak into exported pixels.
  await page.evaluate(() => {
    document.body.classList.remove("preview");
  });
  await page.evaluate(async () => {
    if (document.fonts?.ready) await document.fonts.ready;
    await Promise.all([...document.images].map((image) => {
      if (image.complete) return Promise.resolve();
      return new Promise((resolveImage) => {
        image.addEventListener("load", resolveImage, { once: true });
        image.addEventListener("error", resolveImage, { once: true });
      });
    }));
  });

  const auditIssues = await auditGumboPage(page);
  if (auditIssues.length > 0) {
    await browser.close();
    console.error(`Gumbo brand audit failed with ${auditIssues.length} issue${auditIssues.length === 1 ? "" : "s"}:`);
    for (const issue of auditIssues) console.error(`- ${issue}`);
    console.error("Fix the HTML and export again. No artifact was written.");
    process.exit(1);
  }

  // Check for multiple .page divs
  const pageCount = await page.evaluate(() => {
    const pages = document.querySelectorAll(".page");
    return pages.length || 1;
  });

  if (format === "pdf") {
    // For PDF: all .page divs become pages in a single file
    await page.pdf({
      path: outputPath,
      width: `${width}px`,
      height: `${height}px`,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    console.log(`PDF saved: ${outputPath} (${width}x${height}, ${pageCount} page${pageCount > 1 ? "s" : ""}, ${renderer}, audit passed)`);
  } else {
    // For PNG: multiple .page divs produce numbered files
    if (pageCount <= 1) {
      await page.screenshot({
        path: outputPath,
        type: "png",
        clip: { x: 0, y: 0, width, height },
      });
      console.log(`PNG saved: ${outputPath} (${width}x${height}, ${renderer}, audit passed)`);
    } else {
      const ext = extname(outputPath);
      const base = basename(outputPath, ext);
      const dir = dirname(outputPath);

      for (let i = 0; i < pageCount; i++) {
        const pageEl = await page.evaluate((index) => {
          const pages = document.querySelectorAll(".page");
          const el = pages[index];
          const rect = el.getBoundingClientRect();
          return { x: rect.x, y: rect.y, width: rect.width, height: rect.height };
        }, i);

        const num = String(i + 1).padStart(2, "0");
        const filePath = join(dir, `${base}-${num}${ext}`);
        await page.screenshot({
          path: filePath,
          type: "png",
          clip: { x: pageEl.x, y: pageEl.y, width: pageEl.width, height: pageEl.height },
        });
        console.log(`PNG saved: ${filePath} (${pageEl.width}x${pageEl.height}, audit passed)`);
      }
    }
  }

  await browser.close();
}

main().catch((err) => {
  console.error("Export failed:", err.message);
  process.exit(1);
});
