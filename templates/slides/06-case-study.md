# 06 - Case Study

```yaml
---
id: "06"
name: Case Study
mode: light
content-types: [case-study, portfolio, project-showcase, client-work]
figma-source: "05mjWR5GlV9QcGovOBxxDj/70:5969"
---
```

## Description

Two-panel layout with a text-heavy left panel (overline, heading with stat badge, body paragraphs) and a right panel showcasing product screenshots. The left panel is separated by a vertical border. Wordmark sits at the bottom-left corner.

## HTML Skeleton

```html
<!-- SLIDE: Case Study -->
<!-- WORDMARK OPTIONS: Use wordmark-black.svg on light backgrounds, wordmark-white.svg on dark/immersive backgrounds -->
<div style="
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  font-family: var(--font-body);
">

  <!-- ===== LEFT PANEL (746px) ===== -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 746px;
    height: 100%;
    border-right: 2px solid #d2d2d2;
    box-sizing: border-box;
  ">

    <!-- Title section -->
    <div style="
      padding: 104px 40px 0 102px;
    ">

      <!-- Overline / client name -->
      <div style="
        font-family: var(--font-heading);
        font-weight: 400;
        font-size: 20px;
        letter-spacing: 0.4px;
        text-transform: uppercase;
        color: var(--gumbo-black-70);
        margin-bottom: 20px;
      ">
        CASESTUDY // CLIENT NAME
      </div>

      <!-- Main heading with stat badge -->
      <div style="
        font-family: var(--font-heading);
        font-weight: 400;
        font-size: 64px;
        letter-spacing: -2.56px;
        line-height: 1;
        color: var(--gumbo-black-100);
        margin-bottom: 16px;
      ">
        Headline describing the outcome
        <!-- Stat badge — inline pill -->
        <span style="
          display: inline-block;
          vertical-align: middle;
          margin-left: 12px;
          padding: 6px 16px;
          background: var(--gumbo-blue);
          color: var(--gumbo-white);
          font-family: 'SF Compact Rounded', var(--font-body);
          font-weight: 600;
          font-size: 28px;
          letter-spacing: -0.56px;
          border-radius: 999px;
          line-height: 1.2;
        ">↓50%</span>
      </div>

      <!-- Sub heading -->
      <div style="
        font-family: var(--font-heading);
        font-weight: 400;
        font-size: 32px;
        letter-spacing: -1.28px;
        line-height: 1.2;
        color: var(--gumbo-black-100);
        margin-bottom: 40px;
      ">
        Supporting sub-headline
      </div>

    </div>

    <!-- Body section -->
    <div style="
      padding: 0 40px 0 102px;
      width: 501px;
      box-sizing: content-box;
    ">

      <p style="
        font-family: var(--font-body);
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.48px;
        line-height: 1.6;
        color: var(--gumbo-black-100);
        margin: 0 0 24px 0;
      ">
        First paragraph describing the client challenge, project context, and what Gumbo was brought in to solve.
      </p>

      <p style="
        font-family: var(--font-body);
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.48px;
        line-height: 1.6;
        color: var(--gumbo-black-100);
        margin: 0;
      ">
        Second paragraph covering the approach, key deliverables, and measurable results achieved.
      </p>

    </div>

  </div>

  <!-- ===== RIGHT PANEL (1174px) ===== -->
  <div style="
    position: absolute;
    top: 0;
    left: 746px;
    width: 1174px;
    height: 100%;
    overflow: hidden;
  ">

    <!-- IMAGE/SCREENSHOTS: Product screenshots go here -->
    <!-- Stack 2-3 overlapping screenshot frames. Each should have:
         - border: 1px solid var(--gumbo-black-30)
         - border-radius: var(--radius-md) (8px)
         - Slight overlap and stagger (offset 30-60px each)
         - Can bleed past the right edge
         - Small-caps labels like "FRONT END", "CMS", "DATA // PIPELINE"
           in Space Grotesk 14px, uppercase, color var(--gumbo-black-70)
         - Optional: name tag cursors for team collaboration feel
    -->

    <!-- Example screenshot frame structure (repeat/adjust for each screenshot):
    <div style="
      position: absolute;
      top: 80px;
      left: 60px;
      width: 720px;
      height: 500px;
      border: 1px solid var(--gumbo-black-30);
      border-radius: var(--radius-md);
      overflow: hidden;
      background: var(--gumbo-white);
    ">
      <img src="REPLACE_WITH_SCREENSHOT_URL" alt="" style="width: 100%; height: 100%; object-fit: cover;" />
      <div style="
        position: absolute;
        top: 16px;
        left: 16px;
        font-family: var(--font-heading);
        font-weight: 400;
        font-size: 14px;
        letter-spacing: 0.56px;
        text-transform: uppercase;
        color: var(--gumbo-black-70);
      ">FRONT END</div>
    </div>
    -->

  </div>

  <!-- Wordmark — bottom-left corner -->
  <!-- Use wordmark-black.svg for this light slide -->
  <img
    src="wordmark-black.svg"
    alt="Gumbo"
    style="
      position: absolute;
      left: 40px;
      bottom: 42px;
      width: 104px;
      height: 20px;
    "
  />

</div>
```

## Usage Notes

- All text is dark on light backgrounds. The right panel is for product screenshots or mockups.
- Stat badges use --gumbo-blue background with white text.
- Wordmark: black variant.

## Prebuilt Case Studies

### DermSquared

```yaml
overline: "CASESTUDY // DERMSQUARED"
heading: "Modernizing dermatology education"
stat_badge: "3x"
stat_context: "engagement increase"
sub_heading: "Full-stack platform redesign"
body_p1: "DermSquared needed to consolidate fragmented tools across their .com and .org properties into a cohesive digital experience for dermatology professionals."
body_p2: "Gumbo delivered a unified design system, rebuilt the component library, and shipped a modernized platform that tripled user engagement within the first quarter."
screenshot_labels: ["FRONT END", "CMS", "DATA // PIPELINE"]
```
