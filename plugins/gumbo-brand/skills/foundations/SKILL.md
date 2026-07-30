---
name: foundations
description: Apply Gumbo's core brand identity, design philosophy, colors, typography, iconography, CSS tokens, component patterns, and voice to any Gumbo-related output. Use whenever the user mentions Gumbo, asks for something on-brand, or creates a deliverable for Gumbo or its clients. Assume every Gumbo-related output needs this skill. Always use Pika icons; never substitute another icon library.
---

# Gumbo Brand System

Resolve `${CLAUDE_PLUGIN_ROOT}` to the installed plugin root. Claude expands it directly. In Codex, resolve this file and go from `skills/foundations/` up to the plugin root. Run `node "<plugin-root>/scripts/verify-install.mjs"` before using resources; stop if verification fails.

Gumbo is an AI-first product and engineering studio. The brand communicates forward momentum, technical confidence, and human craft. Think: a team that ships fast, explains things plainly, and doesn't hide behind jargon.

This skill exists so that every output Claude produces for Gumbo — whether it's a pitch deck, a client report, an HTML prototype, a social post, or an internal doc — feels like it came from the same studio. Consistency is the goal, rigidity is not. Use judgment.

## Companion skills

Load the matching companion skill for the deliverable:

- Use the companion whose frontmatter name is `layouts` for visual composition, spacing, layout blocks, tables, or charts.
- Use `visual-assets` for photography, image generation, halftone treatments, or logo usage.
- Use `presentations` for decks, slides, or PPTX output.
- Use `artifacts` for documents, proposals, PDFs, email, infographics, HTML, web, social, React, or export workflows.

Prefer companions qualified with `gumbo-brand:`. If only a plain name is shown, confirm its `SKILL.md` lives under this same plugin root. Ignore loose `~/.agents/skills/mcp-*` copies because they do not include the required shared resources.

## Design Philosophy

The visual language lives in the tension between **precision and warmth**. Clean layouts that breathe. Typography that's confident but not loud. Color used with intention, not decoration. Photography treated through a halftone lens that bridges analog craft and digital future.

The signature layout pattern is the **split-header**: a large heading anchored left (~1/3 width) with body copy flowing to the right (~2/3 width). This rhythm shows up on nearly every surface and is the default starting point for any content layout.

Two visual modes alternate depending on context:

- **Clean mode**: white/light backgrounds for content that needs to breathe — data, explanations, process flows, case studies. Background `#ffffff` or `#fafafa`, text in `#111111` or `#252525`, card surfaces in `#f3f3f3`.
- **Immersive mode**: full-bleed photography with a deep blue overlay for narrative or emotional beats — title slides, section openers, big statements. Photo treatment uses a blue-tinted halftone/dot-matrix effect. When halftone isn't achievable, fall back to a solid `#2563eb` background or a dark blue gradient.

## What Gumbo Doesn't Look Like (Anti-Patterns)

This section matters as much as the design specs. AI-generated layouts tend toward the same safe defaults. Gumbo's visual language is the opposite of those defaults.

- **Don't center headings.** Anchor them left. Centered text is generic and passive. Left-anchored headings are confident.
- **Don't put body text inside colored containers.** Let text sit directly on the background. Colored boxes around text scream "template."
- **Don't use drop shadows on cards.** Surfaces are flat. Depth comes from the grayscale — `#f3f3f3` on `#ffffff` — not from shadows.
- **Don't split layouts 50/50.** Symmetry is boring. Go 1/3 + 2/3, or full-width, or asymmetric. The split-header is always weighted.
- **Don't stack everything vertically.** Use horizontal relationships. Three cards side by side. Stats in a row. Icons in a strip. Horizontal layouts feel intentional.
- **Don't add decorative elements.** No gradient backgrounds, no floating shapes, no abstract swooshes. Every element should have a purpose. When in doubt, remove something rather than add it.
- **Don't use generic stock photography.** Either use the halftone-treated brand images, a solid color, or nothing. An untreated stock photo instantly breaks the brand.
- **Don't over-use the brand blue.** It's powerful because it's used with restraint on clean layouts and fully committed on immersive ones. A page shouldn't be littered with blue accents.
- **Don't use rounded/bubbly buttons or components.** Keep border radii tight (4-8px for most elements). Rounded-full is for stat badges only, not for buttons or cards.

## Artboard Sizes

Always start from the right canvas size. Using the wrong artboard leads to wrong type sizing, wrong spacing, and wrong density — even if the colors and fonts are correct.

### Documents

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Letter one-pager | 816 × 1056 | 8.5 × 11" | Client one-pagers, proposals, flyers |
| Letter multi-page | 816 × 1056/page | 8.5 × 11" | Reports, SOWs, multi-page docs |
| A4 | 595 × 842 | 210 × 297mm | International documents |

### Presentations

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Slide deck | 1920 × 1080 | 16:9 | Pitch decks, internal presentations |

### Web

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Web desktop | 1440 wide, fluid height | — | Landing pages, dashboards, web apps |
| Web mobile | 390 wide, fluid height | — | Mobile views |

### Social

| Name | Size (px) | Aspect | Use |
|------|-----------|--------|-----|
| Twitter/X post | 1200 × 675 | 16:9 | Post images, announcements |
| Twitter/X header | 1500 × 500 | 3:1 | Profile banner |
| LinkedIn post | 1200 × 627 | ~1.91:1 | Feed images |
| Instagram square | 1080 × 1080 | 1:1 | Feed posts |
| Instagram story | 1080 × 1920 | 9:16 | Stories, reels |
| OG / link preview | 1200 × 630 | ~1.91:1 | Link sharing cards |

## Colors

### Primary

**Gumbo Hyper-Roux Blue** `#2563eb` — The brand's signature color.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#eff6ff` | Lightest tint, subtle backgrounds |
| 100  | `#dbeafe` | Light backgrounds, hover states |
| 200  | `#bfdbfe` | Borders, secondary backgrounds |
| 300  | `#93c5fd` | Inactive elements, illustrations |
| 400  | `#60a5fa` | Supporting UI, links |
| 500  | `#3b82f6` | Interactive elements |
| 600  | `#2563eb` | **Primary — the brand blue** |
| 700  | `#1d4ed8` | Hover/pressed states on primary |
| 800  | `#1e40af` | Dark accents |
| 900  | `#1e3a8a` | Deepest blue, immersive overlays |

### Accents — use sparingly and with purpose

Each accent has a personality. Don't use them decoratively — use them when the meaning fits.

**Cayenne Red** `#d65c73` — Attention, urgency, or a warm pop.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#fdf2f4` | Lightest tint, subtle error backgrounds |
| 100  | `#fce4e8` | Light backgrounds, soft warnings |
| 200  | `#f5c4cc` | Borders, hover tints |
| 300  | `#e9a0ad` | Inactive/muted states |
| 400  | `#df7e8f` | Supporting accents |
| 500  | `#d65c73` | **Primary cayenne** |
| 600  | `#c44860` | Hover/pressed |
| 700  | `#b03a52` | Dark accent |
| 800  | `#932d43` | Deeper emphasis |
| 900  | `#7a2038` | Deepest red |

**Bayou Pine** `#38573e` — Depth, maturity, trust.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#f0f5f1` | Lightest tint |
| 100  | `#e0ebe2` | Light backgrounds |
| 200  | `#bdd4c0` | Borders, subtle fills |
| 300  | `#8fb396` | Muted/inactive |
| 400  | `#6b8f71` | Supporting accents |
| 500  | `#527a59` | Mid-range |
| 600  | `#436849` | Standard use |
| 700  | `#38573e` | **Primary pine** |
| 800  | `#2a4430` | Dark accent |
| 900  | `#1f3323` | Deepest green |

**Okra Leaf** `#6a9d62` — Growth, success, positive states.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#f3f8f2` | Lightest tint, success backgrounds |
| 100  | `#e6f0e4` | Light backgrounds |
| 200  | `#c8dec5` | Borders, subtle fills |
| 300  | `#a3cca0` | Muted/inactive |
| 400  | `#87b482` | Supporting accents |
| 500  | `#6a9d62` | **Primary okra** |
| 600  | `#578b50` | Hover/pressed |
| 700  | `#4a7a44` | Dark accent |
| 800  | `#3b6536` | Deeper emphasis |
| 900  | `#2d5228` | Deepest green |

**Creole Orange** `#f97316` — Energy, highlights, calls to action that need warmth.

| Step | Hex       | Use |
|------|-----------|-----|
| 50   | `#fff7ed` | Lightest tint |
| 100  | `#ffedd5` | Light backgrounds |
| 200  | `#fed7aa` | Borders, subtle fills |
| 300  | `#fdba74` | Muted/inactive |
| 400  | `#fb923c` | Supporting accents |
| 500  | `#f97316` | **Primary orange** |
| 600  | `#ea580c` | Hover/pressed |
| 700  | `#c2410c` | Dark accent |
| 800  | `#9a3412` | Deeper emphasis |
| 900  | `#7c2d12` | Deepest orange |

### Neutrals

| Token        | Hex       | Use |
|-------------|-----------|-----|
| Black 100   | `#111111` | Primary text, darkest backgrounds |
| Black 90    | `#444444` | Secondary text |
| Black 80    | `#5b5b5b` | Tertiary text |
| Black 70    | `#727272` | Muted text, captions |
| Black 60    | `#a1a1a1` | Placeholder text, disabled states |
| Black 50    | `#b9b9b9` | Borders (subtle) |
| Black 40    | `#d0d0d0` | Dividers |
| Black 30    | `#e8e8e8` | Subtle borders, separators |
| Black 20    | `#f3f3f3` | Card surfaces, input backgrounds |
| Black 10    | `#fafafa` | Page backgrounds (off-white) |
| White       | `#ffffff` | Surfaces, text on dark |

### Color on dark backgrounds

On immersive blue or dark backgrounds, text is always `#ffffff`. Use `rgba(255,255,255,0.6)` for secondary text and `rgba(255,255,255,0.2)` for subtle dividers or separators.

### Contrast Reference

Use these combinations for accessible text. All meet WCAG AA (4.5:1 for normal text, 3:1 for large text).

| Text Color | Background | Ratio | Use |
|------------|------------|-------|-----|
| `#111111` | `#ffffff` | 18.3:1 | Primary text on white — default |
| `#111111` | `#fafafa` | 17.4:1 | Primary text on off-white |
| `#111111` | `#f3f3f3` | 15.9:1 | Primary text on card surfaces |
| `#444444` | `#ffffff` | 9.7:1 | Secondary text on white |
| `#727272` | `#ffffff` | 4.6:1 | Muted text on white — minimum for body |
| `#ffffff` | `#2563eb` | 4.6:1 | White text on brand blue — passes AA large |
| `#ffffff` | `#1d4ed8` | 5.8:1 | White text on blue-700 — passes AA |
| `#ffffff` | `#111111` | 18.3:1 | White text on dark — immersive mode |
| `#ffffff` | `#1e3a8a` | 9.4:1 | White text on blue-900 — immersive overlays |

**Important**: `#a1a1a1` on `#ffffff` is only 2.6:1 — use only for placeholder/disabled text, never for readable content. If muted text must be accessible, use `#727272` as the minimum.

## Typography

### Heading: Space Grotesk

- **Weight**: Regular (400) — not Bold. The font carries enough character at regular weight.
- **Availability**: Freely available on [Google Fonts](https://fonts.google.com/specimen/Space+Grotesk). Always load it for any HTML/web output.
- **Tracking**: Scales proportionally with size. The larger the text, the tighter it can be pulled. At body-sized headings the tracking should be normal. Never use tight tracking on small text.
- **Line height**: 1.0 for display headings (single-line), 1.1-1.2 for multi-line.
- **Fallback**: `'Space Grotesk', 'Inter', system-ui, sans-serif`

### Body: SF Pro

- **Weight**: Regular (400) for body, Medium (500) for labels and emphasis.
- **Line height**: 1.5-1.6 for readability.
- **Tracking**: Slightly negative at larger sizes (20px+), normal at standard body sizes.
- **Fallback**: `'SF Pro Text', 'SF Pro', 'Inter', system-ui, sans-serif`

SF Pro is an Apple system font. For PDF/PNG export via Puppeteer on macOS, it renders fine. For browser-viewed HTML, Inter is the cross-platform fallback. See "HTML Artifacts" for the full font strategy by output context.

### Data Display: SF Compact Rounded

- **Weight**: Medium (500) or Semibold (600).
- **Use**: Exclusively for stat callouts, metric badges, highlighted numbers, and data badges. The rounded forms give numbers a friendly precision that works for stats like "↓50%" or "180k+". Not for body text or headings.
- **Fallback**: `'SF Compact Rounded', 'SF Pro Rounded', 'Inter', system-ui, sans-serif`

### Canvas-Aware Type Scales

Typography must adapt to the canvas. The skill groups artboards into four tiers. Always use the right tier.

**How to pick a size within a role**: When a role shows two values (e.g., "72 / 64"), the first is the default. Use the second when the heading runs long (more than ~6 words) or when content density is high and the block needs to share space. If in doubt, use the larger value.

**Tier 1 — Large canvas** (presentations 1920×1080, web desktop 1440w):

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Display / H1   | Space Grotesk     | Regular | 72 / 64px | -3%      | 1.0         |
| H2             | Space Grotesk     | Regular | 52 / 48px | -2%      | 1.05        |
| H3             | Space Grotesk     | Regular | 34 / 32px | -1%      | 1.2         |
| H4             | Space Grotesk     | Regular | 24px     | 0        | 1.3         |
| Body Large     | SF Pro            | Regular | 24 / 22px | -0.02em  | 1.5         |
| Body           | SF Pro            | Regular | 17px     | 0        | 1.6         |
| Label          | SF Pro            | Medium  | 13px     | 0        | 1.4         |
| Stat           | SF Compact Rounded| Medium  | 40 / 32px | -1%      | 1.0         |

**Tier 2 — Medium canvas** (Letter 816×1056, A4 595×842, social landscape 1200×675, LinkedIn 1200×627, OG 1200×630):

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Title / H1     | Space Grotesk     | Regular | 32 / 28px | -1.5%    | 1.1         |
| H2             | Space Grotesk     | Regular | 22 / 20px | -0.5%    | 1.15        |
| H3             | Space Grotesk     | Regular | 15 / 14px | 0        | 1.2         |
| H4             | Space Grotesk     | Regular | 12px     | 0        | 1.3         |
| Body           | SF Pro            | Regular | 11 / 10px | 0        | 1.5         |
| Body Small     | SF Pro            | Regular | 9px      | 0        | 1.5         |
| Caption        | SF Pro            | Medium  | 9px      | 0.02em   | 1.4         |
| Stat           | SF Compact Rounded| Semibold| 20 / 16px | -0.5%    | 1.0         |

**Tier 3 — Small/square canvas** (Instagram 1080×1080, web mobile 390w):

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Headline       | Space Grotesk     | Regular | 44 / 36px | -2%      | 1.0         |
| Subhead        | Space Grotesk     | Regular | 22 / 20px | -1%      | 1.15        |
| Body           | SF Pro            | Regular | 15 / 14px | 0        | 1.5         |
| Caption        | SF Pro            | Medium  | 12 / 11px | 0        | 1.4         |
| Stat           | SF Compact Rounded| Semibold| 44 / 32px | -1%      | 1.0         |

**Tier 4 — Tall/narrow canvas** (Instagram story 1080×1920, Twitter header 1500×500):

Stories and banners are special — they're either very tall or very wide, so type needs to be large and punchy with minimal copy. Favor one headline, one stat, or one statement. Don't try to fit paragraphs.

| Role           | Font              | Weight  | Size     | Tracking | Line Height |
|----------------|-------------------|---------|----------|----------|-------------|
| Headline       | Space Grotesk     | Regular | 56 / 48px | -2%      | 1.0         |
| Supporting     | SF Pro            | Regular | 20 / 18px | 0        | 1.4         |
| Stat           | SF Compact Rounded| Semibold| 64 / 48px | -1%      | 1.0         |

## Icons — Pika Icons (Non-negotiable)

**Always use Pika icons. Never substitute with Lucide, Heroicons, Font Awesome, or any other library.**

Pika icons are bundled in `${CLAUDE_PLUGIN_ROOT}/assets/icons/` as SVGs. Designed on a 24px grid with 2px stroke weight. Default to the **stroke** style.

**Stroke-width by tier**: The default `stroke-width="2"` looks chunky at smaller render sizes. Adjust per tier:
- **Tier 1** (48px icons): `stroke-width="2"` (default)
- **Tier 2** (20-24px icons): `stroke-width="1.5"`
- **Tier 3+** (16px or smaller): `stroke-width="1.25"`

Available styles: `stroke` (default), `solid`, `duo-stroke`, `duo-solid`, `contrast`

27 categories: `general`, `arrows-&-chevrons`, `communication`, `devices`, `navigation`, `security`, `users`, `money-&-payments`, `chart-&-graph`, `files-&-folders`, `media`, `editing`, `development`, `ai`, `food`, `medical`, `sports`, `weather`, `building`, `automotive`, `appliances`, `apps-&-social`, `ar-&-vr`, `web3-&-crypto`, `alerts`, `time`, `maths`

### Using Pika Icons

**HTML/React:** Inline the SVG from `${CLAUDE_PLUGIN_ROOT}/assets/icons/stroke/[category]/[name].svg`.

**Presentations:** Embed as SVG or PNG at 48-96px.

**Documents:** Embed as inline images at 16-20px.

### Bullet point pattern

For feature lists and deliverables: `[Pika icon] [thin vertical separator, 2px, 20% opacity] [text]`

## Voice & Tone (Light Guidance)

The brand voice is evolving — principles, not rules:

- **Direct over clever.** "We audit, prioritize, and sequence" not "We leverage our proprietary methodology."
- **Confident, not arrogant.** "We're a partner that ships" not "We're the best agency in the world."
- **Short sentences land harder.** Mix them in.
- **Plainspoken.** No jargon, no buzzwords, no filler.
- **Cooking metaphors** are brand DNA but should feel natural, never forced.

## CSS Custom Properties Template

```css
:root {
  /* Primary */
  --gumbo-blue: #2563eb;
  --gumbo-blue-50: #eff6ff;
  --gumbo-blue-100: #dbeafe;
  --gumbo-blue-200: #bfdbfe;
  --gumbo-blue-300: #93c5fd;
  --gumbo-blue-400: #60a5fa;
  --gumbo-blue-500: #3b82f6;
  --gumbo-blue-600: #2563eb;
  --gumbo-blue-700: #1d4ed8;
  --gumbo-blue-800: #1e40af;
  --gumbo-blue-900: #1e3a8a;

  /* Accents */
  --gumbo-cayenne: #d65c73;
  --gumbo-cayenne-50: #fdf2f4;
  --gumbo-cayenne-100: #fce4e8;
  --gumbo-cayenne-200: #f5c4cc;
  --gumbo-cayenne-300: #e9a0ad;
  --gumbo-cayenne-400: #df7e8f;
  --gumbo-cayenne-500: #d65c73;
  --gumbo-cayenne-600: #c44860;
  --gumbo-cayenne-700: #b03a52;
  --gumbo-cayenne-800: #932d43;
  --gumbo-cayenne-900: #7a2038;

  --gumbo-pine: #38573e;
  --gumbo-pine-50: #f0f5f1;
  --gumbo-pine-100: #e0ebe2;
  --gumbo-pine-200: #bdd4c0;
  --gumbo-pine-300: #8fb396;
  --gumbo-pine-400: #6b8f71;
  --gumbo-pine-500: #527a59;
  --gumbo-pine-600: #436849;
  --gumbo-pine-700: #38573e;
  --gumbo-pine-800: #2a4430;
  --gumbo-pine-900: #1f3323;

  --gumbo-okra: #6a9d62;
  --gumbo-okra-50: #f3f8f2;
  --gumbo-okra-100: #e6f0e4;
  --gumbo-okra-200: #c8dec5;
  --gumbo-okra-300: #a3cca0;
  --gumbo-okra-400: #87b482;
  --gumbo-okra-500: #6a9d62;
  --gumbo-okra-600: #578b50;
  --gumbo-okra-700: #4a7a44;
  --gumbo-okra-800: #3b6536;
  --gumbo-okra-900: #2d5228;

  --gumbo-orange: #f97316;
  --gumbo-orange-50: #fff7ed;
  --gumbo-orange-100: #ffedd5;
  --gumbo-orange-200: #fed7aa;
  --gumbo-orange-300: #fdba74;
  --gumbo-orange-400: #fb923c;
  --gumbo-orange-500: #f97316;
  --gumbo-orange-600: #ea580c;
  --gumbo-orange-700: #c2410c;
  --gumbo-orange-800: #9a3412;
  --gumbo-orange-900: #7c2d12;

  /* Neutrals */
  --gumbo-black-100: #111111;
  --gumbo-black-90: #444444;
  --gumbo-black-80: #5b5b5b;
  --gumbo-black-70: #727272;
  --gumbo-black-60: #a1a1a1;
  --gumbo-black-50: #b9b9b9;
  --gumbo-black-40: #d0d0d0;
  --gumbo-black-30: #e8e8e8;
  --gumbo-black-20: #f3f3f3;
  --gumbo-black-10: #fafafa;
  --gumbo-white: #ffffff;

  /* Typography
     Two contexts:
     - PDF/PNG export (html-export.mjs): SF Pro renders via Puppeteer on macOS. Use stacks as-is.
     - Browser viewing: SF Pro won't render for non-Apple users. Swap Inter to first position
       for --font-body and --font-stat. See "HTML Artifacts" section for details. */
  --font-heading: 'Space Grotesk', 'Inter', system-ui, sans-serif;
  --font-body: 'SF Pro Text', 'SF Pro', 'Inter', system-ui, sans-serif;
  --font-stat: 'SF Compact Rounded', 'SF Pro Rounded', 'Inter', system-ui, sans-serif;

  /* Spacing (base-8) */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
  --space-24: 96px;
  --space-32: 128px;

  /* Radii */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 16px;
  --radius-xl: 32px;
  --radius-full: 9999px;

  /* Chart colors */
  --chart-1: #2563eb;
  --chart-2: #111111;
  --chart-3: #93c5fd;
  --chart-4: #d65c73;
  --chart-5: #6a9d62;
  --chart-6: #f97316;
}
```

## Component Patterns

### Cards

- Background: `#f3f3f3` (Black 20)
- Border radius: `8px`
- No border by default, or `1px solid #e8e8e8` when separation is needed
- Padding: `24px` (Tier 1), `16px` (Tier 2)
- No drop shadows — ever
- Description text below the card, not inside

### Stat Badges

- SF Compact Rounded for the number/metric
- Small pill shape with `border-radius: 9999px`
- Background: Hyper-Roux Blue or accent color
- White text
- Padding: `8px 16px`
- Often paired with a short label to the right in SF Pro

### Separators

- Horizontal: `1-2px` height, `#e8e8e8` on light backgrounds
- Vertical (immersive): `2px` width, `rgba(255,255,255,0.2-0.6)` on dark
- Functional, not decorative

### Buttons

- Primary: `#2563eb` background, white text, `border-radius: 8px`, SF Pro Medium, `12px 24px` padding
- Secondary: transparent with `1px solid #111111`, dark text, `12px 24px` padding
- Keep them simple — no gradients, no shadows, no rounded-full
