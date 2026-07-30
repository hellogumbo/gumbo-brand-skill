# Gumbo Artifacts

Use the plugin root already resolved and verified by `../SKILL.md`. Apply `foundations.md` and `layouts.md` before building. Also read `visual-assets.md` when using photography, generated imagery, or logos.

## Contents

- [Bundled structure](#start-from-the-bundled-structure)
- [Output types](#output-types)
- [HTML export pipeline](#html-export-pipeline)
- [Visual review](#visual-review-mandatory)

## Start from the bundled structure

Do not begin Gumbo HTML work from a blank file. Generate the appropriate self-contained source:

```bash
node "<plugin-root>/scripts/create-html.mjs" --type document --out ./gumbo-document.html
node "<plugin-root>/scripts/create-html.mjs" --type web --out ./gumbo-web-page.html
node "<plugin-root>/scripts/create-html.mjs" --type social --out ./gumbo-social-card.html
```

Edit the generated structure. It already contains the canonical CSS theme, official wordmark SVG, and bundled photography.

## Output types

### Documents (DOCX / PDF)

When document or PDF tooling is available, use it for final format handling and use this reference for Gumbo-specific decisions. Use **Tier 2** type scale.
- Letter (816×1056) or A4 (595×842)
- Assemble from blocks: hero band at top, split header, icon strip, case study pairs, value props strip, footer
- Clean mode palette — don't over-color documents
- Gumbo logo from `<plugin-root>/assets/logo/` on first page or header
- Pika icons inline where appropriate

**Fixed-height HTML documents:** Use `display: flex; flex-direction: column` on the `.page` container with `flex: 1` on the content area and `flex-shrink: 0` on the footer. Never use `position: absolute` on the footer. See the HTML Artifacts section for full details.

### Proposals & SOWs

Use **Tier 2** type scale on Letter. These are multi-page documents with a specific structure:

- **Page 1**: Hero band + split header (company intro or project overview)
- **Page 2+**: Split header for each major section (approach, scope, timeline)
- **Pricing table**: Use the data table styling from this document. Header row in `#111111`, line items left-aligned, costs right-aligned, totals row separated by a `2px solid #111111` divider. Optional phase groupings with `#f3f3f3` sub-header rows.
- **Timeline**: Milestone timeline block, or a simple table with phase/deliverable/date columns.
- **Last page**: Footer block with CTA ("Let's talk.") and contact details.

### Email Templates & Signatures

Emails are plain and functional. The brand shows through restraint, not decoration.

- **Body font**: SF Pro (or system sans-serif in email clients), 15-16px
- **Headings**: Space Grotesk if supported, otherwise bold SF Pro / system sans-serif
- **Signature layout**: Name (SF Pro Medium, `#111111`) / Title (SF Pro Regular, `#727272`) / Email + phone (SF Pro Regular, `#444444`) — stacked, no icons, no logos in the signature by default. If a logo is needed, `pot-icon.svg` at 24px to the left of the name.
- **No colors in email body** except links in `#2563eb`. Background is white.

### Infographics

Use **Tier 2** or **Tier 3** type scale depending on canvas.

- Prioritize the chart and data table styling from this document.
- One key stat at the top using the Stat Callout pattern (SF Compact Rounded, large).
- Section the infographic with horizontal dividers (`1px solid #e8e8e8`), not colored bands.
- Icons from Pika for section labels.
- Max 3 accent colors per infographic — pick from the chart color sequence.

### HTML Artifacts

Use **Tier 1** type scale (web desktop).
- Use CSS custom properties for all brand tokens
- Split-header as default page structure
- Pika icons inlined as SVGs

**Fixed-height page layout**: For fixed-height HTML pages (Letter 816x1056, A4 595x842, Slide 1920x1080), use `display: flex; flex-direction: column` on the `.page` container. The main content area should use `flex: 1` to fill available space between the hero band and footer. The footer should be a flex child with `flex-shrink: 0`, not `position: absolute`. Absolute-positioned footers create dead space between the last content block and the footer.

**Font strategy depends on the output context:**

**For HTML exported to PDF/PNG via `html-export.mjs`** (documents, decks, social):
SF Pro, SF Compact Rounded, and Space Grotesk are the primary fonts. Puppeteer's bundled Chromium renders system fonts, so SF Pro renders correctly on macOS. Load only Space Grotesk from Google Fonts. The CSS font stack stays as-is:
```css
--font-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif;
--font-body: 'SF Pro Text', 'SF Pro', 'Inter', system-ui, sans-serif;
--font-stat: 'SF Compact Rounded', 'SF Pro Rounded', 'Inter', system-ui, sans-serif;
```

**For HTML viewed in browsers** (web artifacts, prototypes, landing pages shared as URLs):
SF Pro and SF Compact Rounded won't render for non-Apple users. Load Inter from Google Fonts as the cross-platform fallback. Reorder the font stack so Inter comes first:
```css
--font-body: 'Inter', 'SF Pro Text', system-ui, sans-serif;
--font-stat: 'Inter', 'SF Compact Rounded', system-ui, sans-serif;
```

**Google Fonts import** (always include, covers Space Grotesk universally and Inter for web):
```html
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500&family=Inter:wght@400;500;600&display=swap" rel="stylesheet">
```

### Social Posts

Use **Tier 3** for square formats, **Tier 4** for stories/banners, **Tier 2** for landscape posts.
- Social Statement block: one headline, one idea. Don't cram in paragraphs.
- Halftone brand image or clean white background
- Gumbo wordmark in a corner, small
- Stats and metrics are great social content — use SF Compact Rounded to make them pop

### React Prototypes

Follow HTML artifact principles with **Tier 1** type scale.
- Tailwind utilities mapped to brand tokens
- Component patterns: card grids, icon+separator+text bullets, stat badges

## HTML Export Pipeline

The Gumbo workflow is: **build as HTML first, then export to PDF or PNG**. HTML is the source of truth for all deliverables. The export script at `<plugin-root>/scripts/html-export.mjs` handles conversion.

For collaborative review, run:

```bash
node "<plugin-root>/scripts/html-edit-server.mjs" \
  ./gumbo-document.html \
  --out ./gumbo-document.html \
  --pdf ./gumbo-document.pdf \
  --size letter
```

This pipeline is agent-agnostic. Any AI agent, CI pipeline, or human developer can run the script. No proprietary skills, platform-specific tools, or Claude-specific features are assumed.

### Requirements

Puppeteer is the only dependency. It works without global install via `npx`:

```bash
npm install puppeteer   # or: npx puppeteer browsers install chrome
```

### Usage

```bash
node "<plugin-root>/scripts/html-export.mjs" <input.html> <output> [options]
```

Options:
- `--size <preset>` — named preset (default: `letter`)
- `--format pdf|png` — force output format
- `--width <px>` — custom width (overrides preset)
- `--height <px>` — custom height (overrides preset)

### Format Selection Logic

If it's a file you share, present, or print, it's a **PDF**. If it's an image you upload to a platform, it's a **PNG**.

### Presets

**PDF output (shared, presented, printed):**

| Preset | Width | Height | Use |
|--------|-------|--------|-----|
| `letter` (default) | 816px | 1056px | One-pagers, proposals, SOWs |
| `a4` | 595px | 842px | International documents |
| `slide` | 1920px | 1080px | Pitch decks, presentations |

**PNG output (uploaded to platforms as images):**

| Preset | Width | Height | Use |
|--------|-------|--------|-----|
| `twitter` | 1200px | 675px | Twitter/X post images |
| `twitter-header` | 1500px | 500px | Twitter/X banner |
| `linkedin` | 1200px | 627px | LinkedIn feed images |
| `og` | 1200px | 630px | Link preview cards |
| `ig-square` | 1080px | 1080px | Instagram feed posts |
| `ig-story` | 1080px | 1920px | Instagram stories/reels |
| `mobile` | 390px | 844px | Mobile web screenshots |

### Custom Dimensions

```bash
node "<plugin-root>/scripts/html-export.mjs" custom.html out.pdf --width 800 --height 1200 --format pdf
node "<plugin-root>/scripts/html-export.mjs" custom.html out.png --width 800 --height 600
```

Custom dimensions default to PNG unless `--format pdf` is specified. Custom dimensions override any named preset.

### Multi-Page / Multi-Slide Handling

- **PDF presets** (letter, a4, slide): if the HTML contains multiple `.page` divs, each becomes one PDF page in a single file.
- **PNG presets**: multiple `.page` divs produce numbered files: `output-01.png`, `output-02.png`, etc.

### Critical: `printBackground: true`

The script always enables `printBackground`. Without it, hero bands, dark footers, content stages, and all CSS background colors render as white in the PDF. This is non-negotiable.

### Body Styles and Export Context

Puppeteer renders the full page, including `body` styles. Preview-only styles like `background: #e0e0e0` or `padding` on `body` will appear in the exported PDF/PNG. Wrap preview-only styles in `@media screen {}` so the export context stays clean:

```css
body { margin: 0; padding: 0; }
@media screen {
  body { background: #e0e0e0; padding: 40px 0; }
  .page { margin: 0 auto 40px auto; }
}
@media print {
  body { background: white; }
  .page { margin: 0; }
}
```

Puppeteer uses print media for PDF and screen media for PNG. Keep `body` background white and padding zero by default. Only add visual chrome (grey background, spacing between pages) inside `@media screen`.

### Examples

```bash
node "<plugin-root>/scripts/html-export.mjs" one-pager.html proposal.pdf
node "<plugin-root>/scripts/html-export.mjs" one-pager.html proposal.pdf --size a4
node "<plugin-root>/scripts/html-export.mjs" deck.html deck.pdf --size slide
node "<plugin-root>/scripts/html-export.mjs" post.html card.png --size linkedin
node "<plugin-root>/scripts/html-export.mjs" story.html story.png --size ig-story
node "<plugin-root>/scripts/html-export.mjs" custom.html out.png --width 1440 --height 900
```

## Visual Review (Mandatory)

After building or modifying any HTML artifact, visually inspect the output before delivering the final export. This catches layout issues, color problems, and rendering bugs that are invisible in the HTML source.

### Workflow

1. **Build or update** the HTML artifact.
2. **Export a review PNG:**
   ```bash
   node "<plugin-root>/scripts/html-export.mjs" <input.html> /tmp/review.png --format png --width <target-width> --height <target-height>
   ```
   For multi-page/multi-slide files, this produces numbered PNGs (`review-01.png`, `review-02.png`, etc.).
3. **Inspect the PNG** with the available image-viewing capability, one page or slide at a time.
4. **Check for:**
   - **Clipping/overflow**: text or elements cut off at page edges
   - **Background bleed**: body background color leaking into the export (see "Body Styles and Export Context" above)
   - **SVG sizing**: wordmarks, icons, or logos rendering at wrong size or missing entirely
   - **Footer visibility**: footer pushed off-page or overlapping content
   - **Spacing rhythm**: consistent gaps between sections, no collapsed margins
   - **Type hierarchy**: headings visually distinct from body text, correct font weights rendering
   - **Split-header alignment**: body copy begins level with the heading, not the context label
   - **Heading breathing room**: at least 16px between a context label and heading; multiline headings use at least 1.14 line-height
   - **Image placeholders**: any `REPLACE_WITH_*` text still visible
5. **Fix issues** found in the HTML source.
6. **Repeat steps 2-5** until the review is clean.
7. **Export the final deliverable:**
   ```bash
   node "<plugin-root>/scripts/html-export.mjs" <input.html> <output.pdf> --size <preset>
   ```

### Review Presets

Match the review PNG dimensions to the final output:

| Final Output | Review Command |
|-------------|----------------|
| Letter PDF | `--format png --width 816 --height 1056` |
| A4 PDF | `--format png --width 595 --height 842` |
| Slide PDF | `--format png --width 1920 --height 1080` |
| Social PNG | Use the same `--size` preset as final |

### When to Skip

The visual review step can be skipped only when making a text-only change (replacing placeholder copy with final copy) where no layout, styling, or structural HTML was modified.
