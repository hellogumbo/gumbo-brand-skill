# 03 - Split Header / Hero Band

```yaml
---
id: "03"
name: Split Header / Hero Band
mode: light
content-types: [feature-cards, highlights, portfolio, case-studies]
figma-source: "05mjWR5GlV9QcGovOBxxDj/70:5872"
---
```

## Description

Same split-header layout as template 02 (title left, body right in the top 316px). The slide base is near-white (#fdfdfd). The lower zone has a light grey (#f4f4f4) background with rounded top corners and a subtle border. Three white cards with borders sit on the grey, each with an image placeholder and description text.

## HTML Skeleton

```html
<!-- SLIDE: Split Header / Three Cards -->
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
      letter-spacing: -2.56px;
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
      letter-spacing: -0.48px;
      line-height: 1.6;
      color: #252525;
    ">
      Replace with descriptive body text that introduces the section or topic. Keep it concise: two to three sentences is ideal.
    </div>

  </div>

  <!-- ===== ZONE 2: Grey container with white cards (from y=316px to bottom) ===== -->
  <div style="
    position: absolute;
    top: 316px;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 32px 32px 0 0;
    background: #f4f4f4;
    border: 1px solid #f3f3f3;
    border-bottom: none;
    overflow: hidden;
  ">

    <!-- Card row — 3 equal white cards, centered with justify-between -->
    <div style="
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: space-between;
      width: 1434px;
    ">

      <!-- Card 1 -->
      <div style="
        width: 427px;
        padding: 24px;
        background: var(--gumbo-white);
        border: 1px solid #f0f0f0;
        border-radius: 16px;
        box-sizing: border-box;
      ">
        <!-- IMAGE: Card image placeholder — replace src with actual image URL -->
        <div style="
          width: 100%;
          height: 281px;
          background: var(--gumbo-black-20);
          border-radius: 8px;
          overflow: hidden;
        ">
          <img
            src="REPLACE_WITH_CARD_1_IMAGE_URL"
            alt=""
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </div>
        <div style="
          padding: 16px 8px 0 8px;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 24px;
          letter-spacing: -0.48px;
          line-height: 1.4;
          color: #252525;
        ">
          Card description text. Replace with relevant content for this item.
        </div>
      </div>

      <!-- Card 2 -->
      <div style="
        width: 427px;
        padding: 24px;
        background: var(--gumbo-white);
        border: 1px solid #f0f0f0;
        border-radius: 16px;
        box-sizing: border-box;
      ">
        <!-- IMAGE: Card image placeholder — replace src with actual image URL -->
        <div style="
          width: 100%;
          height: 281px;
          background: var(--gumbo-black-20);
          border-radius: 8px;
          overflow: hidden;
        ">
          <img
            src="REPLACE_WITH_CARD_2_IMAGE_URL"
            alt=""
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </div>
        <div style="
          padding: 16px 8px 0 8px;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 24px;
          letter-spacing: -0.48px;
          line-height: 1.4;
          color: #252525;
        ">
          Card description text. Replace with relevant content for this item.
        </div>
      </div>

      <!-- Card 3 -->
      <div style="
        width: 427px;
        padding: 24px;
        background: var(--gumbo-white);
        border: 1px solid #f0f0f0;
        border-radius: 16px;
        box-sizing: border-box;
      ">
        <!-- IMAGE: Card image placeholder — replace src with actual image URL -->
        <div style="
          width: 100%;
          height: 281px;
          background: var(--gumbo-black-20);
          border-radius: 8px;
          overflow: hidden;
        ">
          <img
            src="REPLACE_WITH_CARD_3_IMAGE_URL"
            alt=""
            style="width: 100%; height: 100%; object-fit: cover;"
          />
        </div>
        <div style="
          padding: 16px 8px 0 8px;
          font-family: var(--font-body);
          font-weight: 400;
          font-size: 24px;
          letter-spacing: -0.48px;
          line-height: 1.4;
          color: #252525;
        ">
          Card description text. Replace with relevant content for this item.
        </div>
      </div>

    </div>
    <!-- End card row -->

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

## Variants

The lower zone has three interchangeable backgrounds. Only Zone 2 changes; the header, cards, and wordmark stay the same.

### Variant A: Grey background (default)

```html
  <!-- ZONE 2 — Variant A: Grey background -->
  <div style="
    position: absolute; top: 316px; left: 0; right: 0; bottom: 0;
    border-radius: 32px 32px 0 0;
    background: #f4f4f4;
    border: 1px solid var(--gumbo-black-20);
    border-bottom: none;
    overflow: hidden;
  ">
```

### Variant B: Image background

```html
  <!-- ZONE 2 — Variant B: Image background -->
  <div style="
    position: absolute; top: 316px; left: 0; right: 0; bottom: 0;
    border-radius: 32px 32px 0 0;
    background: var(--gumbo-black-100);
    overflow: hidden;
  ">
    <!-- IMAGE: Hero band background — replace src with actual image URL -->
    <img
      src="REPLACE_WITH_IMAGE_URL"
      alt=""
      style="position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;"
    />
    <!-- Dark overlay for card legibility -->
    <div style="position:absolute;inset:0;background:rgba(0,0,0,0.3);"></div>
```

Use white wordmark when using this variant.

### Variant C: White background with border

```html
  <!-- ZONE 2 — Variant C: White background with border -->
  <div style="
    position: absolute; top: 316px; left: 0; right: 0; bottom: 0;
    border-radius: 32px 32px 0 0;
    background: var(--gumbo-white);
    border: 1px solid var(--gumbo-black-20);
    border-bottom: none;
    overflow: hidden;
  ">
```

## Usage Notes

- Slide base is always near-white (#fdfdfd).
- **Variant A** (grey): Cards are white with border, creating separation from the grey.
- **Variant B** (image): Cards float over the image. Add a dark overlay for legibility. Use white wordmark.
- **Variant C** (white): Cards have no visible separation from the zone background; the outer border frames the whole section.
- Card image placeholders use var(--gumbo-black-20) (#f3f3f3).
- Wordmark: black variant (except Variant B, use white).
