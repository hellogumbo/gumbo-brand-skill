# 05 - Split Header + Screenshots

```yaml
---
id: "05"
name: Split Header + Screenshots
mode: mixed
content-types: [split-header, service-cards, numbered-list]
figma-source: "05mjWR5GlV9QcGovOBxxDj/70:5827"
---
```

## Description

Two-zone layout. Zone 1 (top 316px) is a light split-header with title and body text on a near-white background. Zone 2 (remaining height) is a rounded container with a halftone image background containing three numbered service cards arranged horizontally, each with a vertical number rail and description.

## HTML Skeleton

```html
<!-- SLIDE: Split Header + Screenshots -->
<!-- WORDMARK OPTIONS: Use wordmark-white.svg on dark/immersive backgrounds, wordmark-black.svg on light backgrounds -->
<div style="
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: #fdfdfd;
  font-family: var(--font-body);
">

  <!-- Zone 1: Split header (top 316px) -->
  <div style="
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 316px;
  ">
    <!-- Title -->
    <div style="
      position: absolute;
      top: 104px;
      left: 244px;
      width: 414px;
      font-family: var(--font-heading);
      font-weight: 400;
      font-size: 64px;
      letter-spacing: 0;
      line-height: 1.14;
      color: var(--gumbo-black-100);
    ">
      Section Heading
    </div>
    <!-- Body text -->
    <div style="
      position: absolute;
      top: 104px;
      left: 700px;
      width: 1003px;
      font-family: var(--font-body);
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0;
      line-height: 1.6;
      color: var(--gumbo-black-100);
    ">
      Replace with descriptive body text. This zone mirrors the split-header layout used in templates 02 and 03, with a title on the left and longer body copy on the right.
    </div>
  </div>

  <!-- Zone 2: Halftone image container with service cards -->
  <div style="
    position: absolute;
    top: 316px;
    left: 0;
    width: 100%;
    height: 764px;
    border-radius: 32px 32px 0 0;
    overflow: hidden;
    background: var(--gumbo-black-100);
  ">

    <!-- IMAGE: Halftone brand image background for lower zone — replace src with actual image URL -->
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
      background: rgba(0,0,0,0.4);
    "></div>

    <!-- Service cards row -->
    <div style="
      position: absolute;
      top: 161px;
      left: 184px;
      display: flex;
      flex-direction: row;
      gap: 56px;
      height: 651px;
    ">

      <!-- Service Card 1 -->
      <div style="
        width: 480px;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 0;
      ">
        <!-- Number rail -->
        <div style="
          width: 35px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        ">
          <div style="
            font-family: var(--font-heading);
            font-weight: 400;
            font-size: 23px;
            letter-spacing: 0;
            line-height: 56px;
            color: white;
          ">01</div>
          <div style="
            width: 2px;
            flex: 1;
            background: rgba(255,255,255,0.4);
          "></div>
        </div>
        <!-- Content -->
        <div style="
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        ">
          <div style="
            font-family: var(--font-heading);
            font-weight: 400;
            font-size: 38px;
            letter-spacing: 0;
            line-height: 56px;
            color: white;
          ">
            Service Title One
          </div>
          <div style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            letter-spacing: 0;
            line-height: 1.6;
            color: white;
            opacity: 0.8;
          ">
            Replace with a description of this service or offering. Keep it concise and scannable.
          </div>
        </div>
      </div>

      <!-- Service Card 2 -->
      <div style="
        width: 480px;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 0;
      ">
        <!-- Number rail -->
        <div style="
          width: 35px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        ">
          <div style="
            font-family: var(--font-heading);
            font-weight: 400;
            font-size: 23px;
            letter-spacing: 0;
            line-height: 56px;
            color: white;
          ">02</div>
          <div style="
            width: 2px;
            flex: 1;
            background: rgba(255,255,255,0.4);
          "></div>
        </div>
        <!-- Content -->
        <div style="
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        ">
          <div style="
            font-family: var(--font-heading);
            font-weight: 400;
            font-size: 38px;
            letter-spacing: 0;
            line-height: 56px;
            color: white;
          ">
            Service Title Two
          </div>
          <div style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            letter-spacing: 0;
            line-height: 1.6;
            color: white;
            opacity: 0.8;
          ">
            Replace with a description of this service or offering. Keep it concise and scannable.
          </div>
        </div>
      </div>

      <!-- Service Card 3 -->
      <div style="
        width: 480px;
        height: 100%;
        display: flex;
        flex-direction: row;
        gap: 0;
      ">
        <!-- Number rail -->
        <div style="
          width: 35px;
          height: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
          align-items: center;
        ">
          <div style="
            font-family: var(--font-heading);
            font-weight: 400;
            font-size: 23px;
            letter-spacing: 0;
            line-height: 56px;
            color: white;
          ">03</div>
          <div style="
            width: 2px;
            flex: 1;
            background: rgba(255,255,255,0.4);
          "></div>
        </div>
        <!-- Content -->
        <div style="
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
        ">
          <div style="
            font-family: var(--font-heading);
            font-weight: 400;
            font-size: 38px;
            letter-spacing: 0;
            line-height: 56px;
            color: white;
          ">
            Service Title Three
          </div>
          <div style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            letter-spacing: 0;
            line-height: 1.6;
            color: white;
            opacity: 0.8;
          ">
            Replace with a description of this service or offering. Keep it concise and scannable.
          </div>
        </div>
      </div>

    </div>

  </div>

  <!-- Wordmark — bottom-left -->
  <!-- Use wordmark-white.svg because the wordmark sits on the image zone -->
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

</div>
```

## Usage Notes

- The lower zone has a halftone image with a dark overlay. All text in this zone is white. The header zone above remains light with dark text.
- Wordmark: use white variant (sits on the image zone).
