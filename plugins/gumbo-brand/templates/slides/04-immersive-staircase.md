# 04 - Immersive Staircase

```yaml
---
id: "04"
name: Immersive Staircase
mode: immersive
content-types: [two-column, heading-body, bullet-points]
figma-source: "05mjWR5GlV9QcGovOBxxDj/70:5747"
---
```

## Description

Full-bleed halftone image background with two equal columns separated by a white vertical divider. Left column has a heading and body paragraph. Right column has a heading and a list of bullet points, each with a Pika icon and vertical separator. Wordmark and small Gumbo icon sit at the bottom-left.

## HTML Skeleton

```html
<!-- SLIDE: Immersive Staircase -->
<!-- WORDMARK OPTIONS: Use wordmark-white.svg on dark/immersive backgrounds, wordmark-black.svg on light backgrounds -->
<div style="
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: var(--gumbo-black-100);
  font-family: var(--font-body);
">

  <!-- IMAGE: Full-bleed halftone brand image — replace src with actual image URL -->
  <img
    src="REPLACE_WITH_IMAGE_URL"
    alt=""
    style="
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    "
  />

  <!-- Dark overlay for legibility -->
  <div style="
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,0.45);
  "></div>

  <!-- Two-column layout -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
  ">

    <!-- Left column: heading + body -->
    <div style="
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-top: 248px;
      padding-left: 8px;
      padding-right: 8px;
      align-items: center;
      overflow: hidden;
      gap: 88px;
    ">
      <div style="
        width: 401px;
        font-family: var(--font-heading);
        font-weight: 400;
        font-size: 64px;
        letter-spacing: 0;
        line-height: 1;
        color: white;
      ">
        Left Column Heading
      </div>
      <div style="
        width: 500px;
        font-family: var(--font-body);
        font-weight: 400;
        font-size: 24px;
        line-height: 1.6;
        color: white;
      ">
        Replace with body text. This area supports a paragraph of descriptive content that explains the topic introduced by the heading above.
      </div>
    </div>

    <!-- Vertical separator -->
    <div style="flex-shrink: 0; padding-top: 32px; width: 2px; height: 1048px;">
      <div style="width: 2px; height: 1016px; background: rgba(255,255,255,0.4); opacity: 0.6; border-radius: 8px;"></div>
    </div>

    <!-- Right column: heading + bullet points -->
    <div style="
      flex: 1;
      display: flex;
      flex-direction: column;
      padding-top: 248px;
      padding-left: 8px;
      padding-right: 8px;
      align-items: center;
      overflow: hidden;
      gap: 88px;
    ">
      <div style="
        width: 538px;
        font-family: var(--font-heading);
        font-weight: 400;
        font-size: 64px;
        letter-spacing: 0;
        line-height: 1;
        color: white;
      ">
        Right Column Heading
      </div>

      <!-- Bullet points container -->
      <div style="
        display: flex;
        flex-direction: column;
        gap: 24px;
        width: 538px;
      ">

        <!-- Bullet point 1 -->
        <div style="
          display: flex;
          flex-direction: row;
          gap: 12px;
          align-items: center;
          padding: 8px;
        ">
          <!-- ICON: Replace with duotone/contrast icon SVG (32x32) from assets/icons/ -->
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <div style="
            width: 2px;
            height: 24px;
            background: rgba(255,255,255,0.3);
            border-radius: var(--radius-md);
            flex-shrink: 0;
          "></div>
          <div style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            line-height: 1.6;
            color: white;
          ">
            First bullet point text
          </div>
        </div>

        <!-- Bullet point 2 -->
        <div style="
          display: flex;
          flex-direction: row;
          gap: 12px;
          align-items: center;
          padding: 8px;
        ">
          <!-- ICON: Replace with duotone/contrast icon SVG (32x32) from assets/icons/ -->
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <div style="
            width: 2px;
            height: 24px;
            background: rgba(255,255,255,0.3);
            border-radius: var(--radius-md);
            flex-shrink: 0;
          "></div>
          <div style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            line-height: 1.6;
            color: white;
          ">
            Second bullet point text
          </div>
        </div>

        <!-- Bullet point 3 -->
        <div style="
          display: flex;
          flex-direction: row;
          gap: 12px;
          align-items: center;
          padding: 8px;
        ">
          <!-- ICON: Replace with duotone/contrast icon SVG (32x32) from assets/icons/ -->
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
          </svg>
          <div style="
            width: 2px;
            height: 24px;
            background: rgba(255,255,255,0.3);
            border-radius: var(--radius-md);
            flex-shrink: 0;
          "></div>
          <div style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            line-height: 1.6;
            color: white;
          ">
            Third bullet point text
          </div>
        </div>

      </div>
    </div>

  </div>

  <!-- Wordmark — bottom-left -->
  <!-- Use wordmark-white.svg for this immersive/halftone slide -->
  <img
    src="wordmark-white.svg"
    alt="Gumbo"
    style="
      position: absolute;
      left: 40px;
      top: 1006px;
      width: 104px;
      height: 20px;
    "
  />

  <!-- Small Gumbo icon — bottom-left below wordmark -->
  <img
    src="gumbo-icon.svg"
    alt=""
    style="
      position: absolute;
      left: 49px;
      top: 1024px;
      width: 104px;
      height: auto;
    "
  />

</div>
```

## Usage Notes

- Add a semi-transparent overlay on the halftone image so white text remains legible. rgba(0,0,0,0.4) to rgba(0,0,0,0.55) depending on image brightness.
- Wordmark: always white on this slide.
- Icons must be 32px Pika contrast icons from `assets/icons/contrast/`. Always pick icons relevant to the bullet point content. Never use other icon libraries.
- Bullet points should be generated relative to the deck topic, not generic placeholder text.
