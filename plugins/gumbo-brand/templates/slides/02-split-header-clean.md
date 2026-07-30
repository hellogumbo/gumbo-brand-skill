# 02 - Split Header / Clean

```yaml
---
id: "02"
name: Split Header / Clean
mode: light
content-types: [section-intro, overview, chapter-opener]
figma-source: "05mjWR5GlV9QcGovOBxxDj/70:5804"
---
```

## Description

Light slide with a two-column header zone (title left, body right) above a large rounded image container that bleeds to the bottom edge. Wordmark sits at the bottom-left corner.

## HTML Skeleton

```html
<!-- SLIDE: Split Header / Clean -->
<!-- WORDMARK OPTIONS: Use wordmark-black.svg on light backgrounds, wordmark-white.svg on dark/immersive backgrounds -->
<div style="
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: #fdfdfd;
  font-family: var(--font-body);
">

  <!-- ===== ZONE 1: Header (top 316px) ===== -->
  <div style="
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 16px;
    padding: 104px 244px 0 244px;
    height: 316px;
    box-sizing: border-box;
  ">

    <!-- Title — left column -->
    <div style="
      width: 414px;
      flex-shrink: 0;
      font-family: var(--font-heading);
      font-weight: 400;
      font-size: 64px;
      letter-spacing: 0;
      line-height: 1;
      color: #252525;
    ">
      Section Title
    </div>

    <!-- Body — right column -->
    <div style="
      width: 1003px;
      font-family: var(--font-body);
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0;
      line-height: 1.6;
      color: #252525;
    ">
      Replace with descriptive body text that introduces the section or topic. Keep it concise: two to three sentences is ideal.
    </div>

  </div>

  <!-- ===== ZONE 2: Image Container (from y=316px to bottom) ===== -->
  <div style="
    position: absolute;
    top: 316px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 32px 32px 0 0;
    background: var(--gumbo-black-20);
    overflow: hidden;
  ">
    <!-- IMAGE: Full-bleed halftone brand image or content stage — replace src with actual image URL -->
    <img
      src="REPLACE_WITH_IMAGE_URL"
      alt=""
      style="
        width: 100%;
        height: 100%;
        object-fit: cover;
      "
    />
  </div>

  <!-- Wordmark — bottom-left corner, overlaid on image container -->
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

- The image container uses the bundled halftone brand photography. If no image is available, the #f3f3f3 background serves as a clean fallback.
- Wordmark: black variant. If the image is very dark and the wordmark sits on top of it, switch to white.
