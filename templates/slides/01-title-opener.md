# 01 - Title / Opener

```yaml
---
id: "01"
name: Title / Opener
mode: immersive
content-types: [title, brand-statement, opener]
figma-source: "05mjWR5GlV9QcGovOBxxDj/70:5790"
---
```

## Description

Full-bleed immersive slide with a halftone brand image background, dark gradient overlay, and a two-column flex layout: title text vertically centered on the left, wordmark vertically centered on the right. Both columns share equal width with 100px horizontal padding.

## HTML Skeleton

```html
<!-- SLIDE: Title / Opener -->
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

  <!-- Gradient overlay -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(250deg, rgba(0,6,28,0.3) 8%, rgba(0,0,0,0.8) 95%);
  "></div>

  <!-- Two-column flex container — centered vertically, full height -->
  <div style="
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1920px;
    height: 1080px;
    display: flex;
    align-items: center;
  ">

    <!-- Left column: Title -->
    <div style="
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      height: 100%;
      padding: 0 100px;
      overflow: hidden;
    ">
      <div style="
        max-width: 645px;
        font-family: var(--font-heading);
        font-weight: 400;
        font-size: 64px;
        letter-spacing: -1.8px;
        line-height: 1.2;
        color: var(--gumbo-white);
      ">
        Replace with slide title or brand statement
      </div>
    </div>

    <!-- Right column: Wordmark -->
    <div style="
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      height: 100%;
      padding: 0 100px;
      overflow: hidden;
    ">
      <!-- Use wordmark-white.svg for this immersive/dark slide -->
      <img
        src="wordmark-white.svg"
        alt="Gumbo"
        style="
          width: 164px;
          height: 32px;
        "
      />
    </div>

  </div>

</div>
```

## Usage Notes

- Two-column flex layout: title left, wordmark right. Both vertically centered.
- All text on this slide is white. The gradient overlay ensures legibility.
- If the halftone image is light-toned, increase the gradient opacity to maintain contrast.
- Wordmark: always white on this slide.
- The title container has a max-width of 645px to prevent overly long lines.
