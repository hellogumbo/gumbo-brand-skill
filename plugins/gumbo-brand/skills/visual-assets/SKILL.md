---
name: visual-assets
description: Select and apply Gumbo brand photography, generate matching halftone imagery, use CSS-only image fallbacks, and embed official Gumbo wordmarks or icons. Use whenever a Gumbo deliverable needs photography, an immersive image, generated brand imagery, a logo, wordmark, pot icon, or lettermark. Apply gumbo-brand:foundations alongside this skill.
---

# Gumbo Visual Assets

Resolve `${CLAUDE_PLUGIN_ROOT}` to the installed plugin root. Claude expands it directly; in ChatGPT/Codex, derive the root as two directories above this `SKILL.md` before using a referenced path.

Apply `gumbo-brand:foundations` alongside this skill for colors, typography, and brand principles. Use bundled files through `${CLAUDE_PLUGIN_ROOT}`; never recreate or approximate official assets.

## Photography & Imagery

### The Halftone Treatment

Gumbo's signature photo treatment: retro computer halftone print texture with CRT scanlines, rasterized scan lines, subtle holographic grid. It bridges analog craft with digital futures.

Brand photography lives in `${CLAUDE_PLUGIN_ROOT}/assets/photography/`:
- `hero-landscape-halftone.jpg` — pastoral landscape, teal sky, wide open plains. CTAs, closing slides.
- `sunburst-farmland-halftone.jpg` — farmland with halftone dots + sunburst rays. Section openers.
- `team-working-dark-halftone.jpg` — people at computers, dark moody blue. Dramatic intros.
- `team-computers-blue-halftone.jpg` — team collaboration, bright blue halftone. Hero slides.
- `digital-terrain-data-landscape.jpg` — aerial digital farmland, glowing cyan data points. Vision slides.

These images are pre-treated and ready to use. **Always use these bundled images first.** They cover the most common needs (hero bands, section openers, immersive backgrounds, closing slides). Read the file directly from `${CLAUDE_PLUGIN_ROOT}/assets/photography/` and embed it. Only generate new images if none of the five work for the specific context.

### Generating Brand Images

When using an image generation tool, adapt the prompt to the aspect ratio and context:

**Base prompt structure:**
> Retro computer halftone print texture with CRT scanlines, subtle holographic grid emerging across the landscape, soft digital light rays stretching across the sky like a systems visualization, minimal composition, calm and spacious, [COLOR PALETTE] palette, [ASPECT RATIO GUIDANCE], designed as a UI background.

**Color palette options:**
- **Blue immersive**: `deep blue and cyan`
- **Teal landscape**: `cyan and white`
- **Dark moody**: `dark navy and steel blue`
- **Warm optimistic**: `teal, amber and white`

**Aspect ratio guidance** — append to the prompt:
- **16:9** (slides, Twitter): `wide cinematic composition, horizontal emphasis`
- **1:1** (Instagram square): `centered balanced composition, equal weight all sides`
- **9:16** (stories): `tall vertical composition, content stacked top-to-bottom`
- **~2:1** (LinkedIn, OG): `panoramic horizontal composition, expansive landscape`
- **3:1** (Twitter header): `ultra-wide banner composition, thin horizontal strip`

### Image Priority Order

1. **Bundled brand images** — use the five images in `${CLAUDE_PLUGIN_ROOT}/assets/photography/`. These are the default. Pick the one that best fits the context.
2. **User-supplied images** — if the user provides additional brand-treated images, use those.
3. **Generate with NanoBanana** — only if none of the bundled images fit and the context demands something specific. Use the prompt structure above.
4. **Solid color fallback** — `#2563eb` full-bleed, or gradient from `#1e40af` to `#2563eb`.
5. **Placeholder** — `#f3f3f3` rectangle with "[Brand photo — halftone treatment]" for the user to replace.

Never use untreated photography in an immersive context.

### CSS-Only Halftone Fallback

When halftone images are unavailable (no bundled image fits, no generation tool available), use this CSS combination as an acceptable alternative for hero bands and immersive sections:

```css
.halftone-fallback {
  position: relative;
  background: linear-gradient(135deg, #1e3a8a 0%, #2563eb 70%, #1d4ed8 100%);
}
/* Halftone dots */
.halftone-fallback::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(circle 1.5px, rgba(255,255,255,0.08) 1px, transparent 1px);
  background-size: 6px 6px;
}
/* CRT scanlines */
.halftone-fallback::after {
  content: '';
  position: absolute;
  inset: 0;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    rgba(0,0,0,0.04) 2px,
    rgba(0,0,0,0.04) 3px
  );
}
```

## Logo Usage

Logo files in `${CLAUDE_PLUGIN_ROOT}/assets/logo/`:
- `wordmark-white.svg` — for dark/immersive backgrounds
- `wordmark-black.svg` — for light backgrounds
- `wordmark-with-background.svg` — standalone
- `icon.svg` — "G" lettermark (pixel-style)
- `pot-icon.svg` — gumbo pot icon (pixel-style)

The wordmark is the default. Icon/pot for favicons, small marks, or playful contexts. Never distort, recolor, or add effects.

**Always inline the actual SVG from `${CLAUDE_PLUGIN_ROOT}/assets/logo/`.** Never approximate the wordmark with styled text. The Gumbo wordmark is a custom pixel-style design that cannot be reproduced with any font. Read the SVG file and embed the markup directly.
