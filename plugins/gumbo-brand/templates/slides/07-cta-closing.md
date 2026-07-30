# 07 - CTA / Closing

```yaml
---
id: "07"
name: CTA / Closing
mode: light
content-types: [cta, closing, contact, final-slide, book-a-call]
figma-source: "05mjWR5GlV9QcGovOBxxDj/70:5910"
---
```

## Description

Two-panel closing slide with a left panel containing the pot icon, headline, and body text, and a right panel divided into three zones: a top image with a floating "Book an audit" card, and a bottom half split into contact details and website link. Wordmark sits at the bottom-left corner.

## HTML Skeleton

```html
<!-- SLIDE: CTA / Closing -->
<!-- WORDMARK OPTIONS: Use wordmark-black.svg on light backgrounds, wordmark-white.svg on dark/immersive backgrounds -->
<div style="
  position: relative;
  width: 1920px;
  height: 1080px;
  overflow: hidden;
  background: #fdfdfd;
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
    display: flex;
    flex-direction: column;
    gap: 43px;
    padding: 203px 102px;
  ">

    <!-- Pot icon -->
    <img
      src="assets/logo/pot-icon.svg"
      alt=""
      style="
        width: 152px;
        height: 152px;
      "
    />

    <!-- Heading -->
    <div style="
      font-family: var(--font-heading);
      font-weight: 400;
      font-size: 101.28px;
      letter-spacing: 0;
      line-height: 1.14;
      color: #252525;
    ">
      Let's cook.
    </div>

    <!-- Body text -->
    <div style="
      font-family: var(--font-body);
      font-weight: 400;
      font-size: 24px;
      letter-spacing: 0;
      line-height: 1.6;
      color: #252525;
    ">
      Ready to bring your vision to life? Book a free audit and let's talk about what's next.
    </div>

  </div>

  <!-- ===== RIGHT PANEL (1174px) ===== -->
  <div style="
    position: absolute;
    top: 0;
    left: 746px;
    width: 1174px;
    height: 100%;
    display: flex;
    flex-direction: column;
  ">

    <!-- ===== TOP HALF: Image + floating CTA card ===== -->
    <div style="
      flex: 1;
      position: relative;
      overflow: hidden;
    ">

      <!-- IMAGE: Halftone landscape image — replace src with actual image URL -->
      <img
        src="REPLACE_WITH_IMAGE_URL"
        alt=""
        style="
          width: 100%;
          height: 100%;
          object-fit: cover;
        "
      />

      <!-- Floating "Book an audit" card -->
      <div style="
        position: absolute;
        bottom: 40px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--gumbo-white);
        border: 2px solid var(--gumbo-black-20);
        border-radius: 22.6px;
        box-shadow: 0 8px 32px rgba(0,0,0,0.08);
        padding: 28px 34px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 40px;
        min-width: 520px;
      ">

        <!-- Card text -->
        <div>
          <div style="
            font-family: var(--font-heading);
            font-weight: 400;
            font-size: 45px;
            letter-spacing: 0;
            line-height: 1.14;
            color: #252525;
          ">
            Book an audit
          </div>
          <div style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 25px;
            letter-spacing: 0;
            line-height: 1.4;
            color: #252525;
            opacity: 0.7;
            margin-top: 8px;
          ">
            Free, no strings attached
          </div>
        </div>

        <!-- CTA button -->
        <a href="#" style="
          display: inline-block;
          background: var(--gumbo-blue);
          color: var(--gumbo-white);
          font-family: var(--font-body);
          font-weight: 600;
          font-size: 31px;
          letter-spacing: 0;
          padding: 16px 36px;
          border-radius: 17px;
          text-decoration: none;
          white-space: nowrap;
        ">
          Book now
        </a>

      </div>

    </div>

    <!-- ===== BOTTOM HALF: Contact + Website ===== -->
    <div style="
      flex: 1;
      display: flex;
      flex-direction: row;
      border-top: 2px solid #d2d2d2;
    ">

      <!-- Bottom-left: Contact section -->
      <div style="
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 60px;
        gap: 28px;
        border-right: 2px solid #d2d2d2;
      ">

        <!-- Email heading -->
        <div style="
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 24px;
          letter-spacing: 0;
          color: #252525;
          margin-bottom: 4px;
        ">
          Email
        </div>

        <!-- Contact item 1 -->
        <div style="display: flex; align-items: center; gap: 16px;">
          <!-- Pika envelope icon (24px) -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            letter-spacing: 0;
            color: #252525;
          ">hello@hellogumbo.com</span>
        </div>

        <!-- Contact item 2 -->
        <div style="display: flex; align-items: center; gap: 16px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            letter-spacing: 0;
            color: #252525;
          ">name@hellogumbo.com</span>
        </div>

        <!-- Contact item 3 -->
        <div style="display: flex; align-items: center; gap: 16px;">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
          <span style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            letter-spacing: 0;
            color: #252525;
          ">team@hellogumbo.com</span>
        </div>

      </div>

      <!-- Bottom-right: Website link -->
      <div style="
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 60px;
      ">
        <div style="display: flex; align-items: center; gap: 16px;">
          <!-- Pika globe icon (24px) -->
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#252525" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>
          <span style="
            font-family: var(--font-body);
            font-weight: 400;
            font-size: 24px;
            letter-spacing: 0;
            color: #252525;
          ">www.hellogumbo.com</span>
        </div>
      </div>

    </div>

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

- Left panel is always light with dark text. Right panel top zone uses a halftone brand image.
- The floating card uses white background with subtle shadow.
- CTA button uses --gumbo-blue.
- Wordmark: black variant (left panel is light).
- Use Pika icons from `assets/icons/stroke/` for contact icons (envelope-default, globe, etc.). Never create custom icon SVGs or use other icon libraries.
