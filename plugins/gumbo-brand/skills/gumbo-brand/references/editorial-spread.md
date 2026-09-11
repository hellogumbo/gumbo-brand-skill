# Editorial Spread

Use the plugin root already resolved and verified by `../SKILL.md`. Read `deck-styles.md` first to confirm this is the right house style for the piece.

```yaml
---
id: "E"
name: Editorial Spread
mode: paper + night-divider
content-types: [thesis, narrative, manifesto, all-hands, working-session, essay, framework, internal]
canvas: 1600x1100
source: "Multiplayer-OS-Thesis house style"
---
```

A magazine-grade "reading spread" deck. Where the **Studio Deck** (the default 1920×1080 style described in `presentations.md`) is built for pitches and product walkthroughs, the **Editorial Spread** is built for *writing that carries the weight* — a thesis, a narrative, a framework you're naming, a manifesto, an internal all-hands or working session.

It feels like a printed journal: warm paper, a serif reading face, magazine folio strips, registration corner-marks, a whisper of paper grain, and full-bleed "night" dividers. It is **typographic and deliberately icon-free** — structure comes from numerals, rules, and type, not glyphs. This is the one Gumbo deck style where you do **not** use Pika icons.

Hold one style for the whole deck. Don't mix Editorial Spread with Studio Deck slides.

## When to reach for it

- A thesis, essay, or point of view — the argument is the product
- A framework or method you're *naming* (e.g. a five-move process)
- An internal all-hands, town hall, or working session
- A manifesto, narrative, or "what we believe" piece
- Anything where prose and restraint read as more credible than UI chrome

If the deck is selling a product, showing screenshots, or walking a client through an offering → use the **Studio Deck** style instead.

## Canvas & fonts

- **Canvas:** `1600 × 1100` per spread (a magazine spread ratio, not 16:9). Every `.spread` is exactly this size.
- **Fonts (load both):**
  - **Space Grotesk** — display headings, eyebrows, folios, labels (weights 300/400/500)
  - **Source Serif 4** — body, lede, and the *italic-serif accent word* (weights 300–600 + italic)
- **Signature move:** set the **last word of a heading in italic serif** — `Three <span class="ser">movements.</span>`, `How we <span class="ser">work.</span>`, `Let's do a <span class="ser">Roux.</span>`. Used on nearly every heading; it's the soul of the style.
- **Palette:** warm paper `--paper: #faf8f1`, ink `#111`, hairline rules `#d8d4ca`; dividers/cover are "night" `#0d1424` with white type. Gumbo blue `#2563eb` is the single accent (top-borders, numerals, the method mark). Use it sparingly.
- **Voice mark (optional):** on a divider that carries a person's voice, use the circle mark — `α · Dustin` — borrowed from the thesis attribution system. Okra-ringed on night backgrounds.

## The style system — paste once into `<head>`

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&display=swap" rel="stylesheet">
<style>
:root{
  --blue:#2563eb; --blue-d:#1e3a8a;
  --pine:#38573e; --okra:#6a9d62; --cayenne:#d65c73; --orange:#f97316;
  --ink:#111111; --ink-2:#2a2a2a; --ink-3:#555555; --ink-4:#8a8a8a;
  --rule:#d8d4ca; --rule-2:#e8e5dc;
  --paper:#faf8f1; --paper-2:#f4f0e3; --night:#0d1424;
  --serif:"Source Serif 4","Iowan Old Style","Georgia",serif;
  --display:"Space Grotesk","Inter",system-ui,sans-serif;
}
*{box-sizing:border-box;}
html,body{margin:0;padding:0;background:#1a1a1a;font-family:var(--serif);color:var(--ink);-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;}
body{display:flex;flex-direction:column;align-items:center;padding:60px 0 120px;gap:60px;}
.deck-frame{display:flex;flex-direction:column;align-items:center;gap:60px;}

/* SPREAD canvas */
.spread{position:relative;width:1600px;height:1100px;background:var(--paper);color:var(--ink);overflow:hidden;border-radius:2px;
  box-shadow:0 1px 0 rgba(255,255,255,.04) inset,0 30px 80px -20px rgba(0,0,0,.55),0 8px 24px -10px rgba(0,0,0,.35);}
.spread::after{content:"";position:absolute;inset:0;pointer-events:none;z-index:1;
  background-image:radial-gradient(rgba(58,40,15,.025) 1px,transparent 1.2px),radial-gradient(rgba(58,40,15,.012) 1px,transparent 1px);
  background-size:3px 3px,7px 7px;background-position:0 0,1px 1px;mix-blend-mode:multiply;}
.spread>*{position:relative;z-index:2;}
.spread h1,.spread h2,.spread h3,.spread h4,.spread p,.spread ul,.spread hr{margin:0;}
.safe{position:absolute;inset:96px 120px 96px 120px;}

/* Folio strips (top + bottom magazine metadata) */
.folio{position:absolute;left:120px;right:120px;display:flex;justify-content:space-between;align-items:center;
  font-family:var(--display);font-weight:500;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--ink-4);z-index:3;}
.folio--top{top:48px;} .folio--bottom{bottom:48px;}
.folio .dot{display:inline-block;width:4px;height:4px;background:var(--ink-4);margin:0 10px 2px;vertical-align:middle;border-radius:50%;}
.folio-num{font-variant-numeric:tabular-nums;}
.folio .wm{height:17px;width:auto;display:block;}

/* Registration corner marks */
.corner{position:absolute;width:18px;height:18px;z-index:3;pointer-events:none;}
.corner::before,.corner::after{content:"";position:absolute;background:var(--ink-4);opacity:.35;}
.corner::before{left:0;right:0;height:1px;top:50%;} .corner::after{top:0;bottom:0;width:1px;left:50%;}
.corner--tl{top:24px;left:24px;} .corner--tr{top:24px;right:24px;} .corner--bl{bottom:24px;left:24px;} .corner--br{bottom:24px;right:24px;}

/* Immersive / night spreads */
.spread--immersive{background:var(--night);color:#fff;}
.spread--immersive .folio{color:rgba(255,255,255,.55);}
.spread--immersive .folio .dot{background:rgba(255,255,255,.55);}
.spread--immersive .corner::before,.spread--immersive .corner::after{background:rgba(255,255,255,.4);}
.bleed-img{position:absolute;inset:0;background-size:cover;background-position:center;filter:contrast(1.04) saturate(.92);z-index:0;}
.bleed-img::after{content:"";position:absolute;inset:0;
  background:linear-gradient(115deg,rgba(8,12,24,.74) 0%,rgba(8,12,24,.5) 42%,rgba(8,12,24,.32) 70%,rgba(8,12,24,.5) 100%);}
.bleed-img--btm::after{background:linear-gradient(180deg,rgba(8,12,24,.28) 0%,rgba(8,12,24,.3) 45%,rgba(8,12,24,.74) 100%);}

/* Type */
.eyebrow{font-family:var(--display);font-weight:500;font-size:12px;letter-spacing:.22em;text-transform:uppercase;color:var(--ink-3);}
.eyebrow--white{color:rgba(255,255,255,.72);}
.display{font-family:var(--display);font-weight:400;letter-spacing:-.025em;line-height:1.02;color:var(--ink);}
.ser{font-family:var(--serif);font-style:italic;font-weight:400;letter-spacing:-.01em;}  /* italic-serif accent word */
.lede{font-family:var(--serif);font-weight:400;font-size:24px;line-height:1.42;letter-spacing:-.005em;color:var(--ink);}
.body{font-family:var(--serif);font-weight:400;font-size:19px;line-height:1.58;color:var(--ink-2);}
.body p{margin:0 0 1.05em 0;} .body p:last-child{margin-bottom:0;}
.body em{font-style:italic;} .body strong{font-weight:600;color:var(--ink);}
.body--white{color:rgba(255,255,255,.86);} .body--white strong{color:#fff;}
.caption{font-family:var(--display);font-weight:400;font-size:13px;letter-spacing:.04em;color:var(--ink-3);line-height:1.5;}
.dropcap::first-letter{font-family:var(--serif);font-weight:400;float:left;font-size:88px;line-height:.86;margin:8px 14px -4px 0;color:var(--ink);}

/* Flag label (eyebrow with a bar) */
.flag{display:inline-flex;align-items:center;gap:10px;font-family:var(--display);font-weight:500;font-size:11px;letter-spacing:.24em;text-transform:uppercase;color:var(--ink-4);}
.flag .bar{width:18px;height:1px;background:currentColor;} .flag--white{color:rgba(255,255,255,.78);}

/* Voice / numeral mark (circle) */
.mark{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border:1.5px solid currentColor;border-radius:50%;
  font-family:var(--serif);font-style:italic;font-weight:400;font-size:21px;line-height:1;}

/* Column row — 3-up movements / agenda */
.cols-3{display:grid;grid-template-columns:repeat(3,1fr);gap:48px;}
.mcol{border-top:3px solid var(--blue);padding-top:26px;display:flex;flex-direction:column;height:100%;}
.mcol .rom{font-family:var(--display);font-weight:500;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:var(--blue);}
.mcol h3{font-family:var(--display);font-weight:400;font-size:40px;letter-spacing:-.02em;line-height:1;margin:18px 0;}
.mcol .body{font-size:18px;}
.mcol .time{margin-top:auto;padding-top:26px;font-family:var(--display);font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:var(--ink-4);}

/* Two-column panel (e.g. now / after) divided by a hairline */
.cols-2{display:grid;grid-template-columns:1fr 1fr;gap:0;}
.pcol{padding:0 56px;} .pcol:first-child{padding-left:0;border-right:1px solid var(--rule);} .pcol:last-child{padding-right:0;}
.pcol .phead{display:flex;align-items:baseline;gap:16px;margin-bottom:30px;}
.pcol .phead h3{font-family:var(--display);font-weight:400;font-size:34px;letter-spacing:-.015em;line-height:1;}
.pcol .when{margin-left:auto;font-family:var(--display);font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:var(--blue);border:1px solid var(--rule);border-radius:999px;padding:5px 14px;}
.qlist{list-style:none;padding:0;display:flex;flex-direction:column;gap:24px;}
.qlist li{display:flex;gap:20px;align-items:baseline;}
.qlist .n{flex:0 0 auto;font-family:var(--serif);font-style:italic;font-size:24px;color:var(--blue);line-height:1;width:24px;}
.qlist .t{font-family:var(--serif);font-size:20px;line-height:1.46;color:var(--ink-2);}
.qlist .t b{font-weight:600;color:var(--ink);}

/* Index row — N columns divided by hairlines (e.g. five moves) */
.moves{display:grid;gap:0;}                          /* set grid-template-columns inline: repeat(N,1fr) */
.move{padding:0 30px;} .move:not(:last-child){border-right:1px solid var(--rule);}
.move:first-child{padding-left:0;} .move:last-child{padding-right:0;}
.move .num{font-family:var(--serif);font-style:italic;font-size:30px;color:var(--blue);line-height:1;}
.move h3{font-family:var(--display);font-weight:400;font-size:32px;letter-spacing:-.02em;line-height:1;margin:16px 0;}
.move .body{font-size:16.5px;line-height:1.5;}

@media print{
  @page{size:1600px 1100px;margin:0;}
  html,body{background:#fff;padding:0!important;margin:0!important;gap:0!important;}
  body,.deck-frame{display:block!important;gap:0!important;padding:0!important;}
  .spread{page-break-after:always;break-after:page;box-shadow:none!important;border-radius:0!important;margin:0!important;}
  .spread:last-of-type{page-break-after:auto;}
}
</style>
```

Wrap all spreads in `<div class="deck-frame"> … </div>`. Each spread carries four `.corner` marks, a `.folio--top`, a `.safe` content area, and a `.folio--bottom`.

## Spreads

### A — Cover (immersive, bleed image)

```html
<section class="spread spread--immersive" id="s01">
  <div class="bleed-img bleed-img--btm" style="background-image:url('assets/photography/people-gathering-glow-halftone.jpg');"></div>
  <div class="corner corner--tl"></div><div class="corner corner--tr"></div><div class="corner corner--bl"></div><div class="corner corner--br"></div>
  <div class="folio folio--top">
    <span><!-- INLINE assets/logo/wordmark-white.svg, class="wm" (height 17px) --></span>
    <span>Town Hall <span class="dot"></span> All-Hands</span>
  </div>
  <div class="safe" style="display:flex;flex-direction:column;justify-content:flex-end;">
    <div class="eyebrow eyebrow--white" style="margin-bottom:30px;">A Working Session · June 26, 2026</div>
    <h1 class="display" style="font-size:176px;color:#fff;line-height:.9;letter-spacing:-.035em;">Hello,<br><span class="ser">Gumbo.</span></h1>
    <hr style="height:1px;background:rgba(255,255,255,.4);width:420px;border:0;margin:40px 0 30px;">
    <p class="lede" style="color:rgba(255,255,255,.9);max-width:720px;font-size:25px;">One-line lede. Plainspoken, warm, never salesy.</p>
  </div>
  <div class="folio folio--bottom"><span>Gumbo &middot; A Working Session</span><span class="folio-num">01</span></div>
</section>
```

### B — Content + column row (paper)

Title block at top, a lede, then a 3-up `cols-3` row pinned to the bottom (`margin-top:auto` inside a column-flex `.safe`).

```html
<section class="spread" id="s02">
  <div class="corner corner--tl"></div><div class="corner corner--tr"></div><div class="corner corner--bl"></div><div class="corner corner--br"></div>
  <div class="folio folio--top"><span>Today's Flow</span><span>Three Movements <span class="dot"></span> 02</span></div>
  <div class="safe" style="display:flex;flex-direction:column;">
    <div>
      <div class="flag" style="margin-bottom:20px;"><span class="bar"></span>Today's Flow</div>
      <h2 class="display" style="font-size:96px;line-height:.96;">Three <span class="ser">movements.</span></h2>
      <p class="lede" style="max-width:980px;margin-top:26px;color:var(--ink-2);">A short framing paragraph in the serif reading face.</p>
    </div>
    <div class="cols-3" style="margin-top:auto;padding-bottom:8px;">
      <div class="mcol"><div class="rom">Movement 01</div><h3>Triads</h3><div class="body">Column body.</div><div class="time">~20 min &middot; in threes</div></div>
      <div class="mcol"><div class="rom">Movement 02</div><h3>The method</h3><div class="body">Column body.</div><div class="time">~10 min &middot; together</div></div>
      <div class="mcol"><div class="rom">Movement 03</div><h3>Share back</h3><div class="body">Column body.</div><div class="time">~15 min &middot; one per group</div></div>
    </div>
  </div>
  <div class="folio folio--bottom"><span>Gumbo &middot; Town Hall</span><span>Page <span class="folio-num">02</span></span></div>
</section>
```

### C — Two-column breakout (paper)

Left column = big title + lede; right column = two `.pcol` panels divided by a hairline, each with a `now`/`after` pill and a Roman-numeral `.qlist`.

```html
<section class="spread" id="s03">
  <div class="corner corner--tl"></div><div class="corner corner--tr"></div><div class="corner corner--bl"></div><div class="corner corner--br"></div>
  <div class="folio folio--top"><span>The Breakout</span><span>In Your Threes <span class="dot"></span> 03</span></div>
  <div class="safe" style="display:grid;grid-template-columns:1fr 1.55fr;gap:96px;">
    <div style="display:flex;flex-direction:column;justify-content:space-between;">
      <div>
        <div class="flag" style="margin-bottom:22px;"><span class="bar"></span>The Breakout</div>
        <h2 class="display" style="font-size:92px;line-height:.94;">In your<br><span class="ser">threes.</span></h2>
        <div style="width:120px;height:2px;background:var(--blue);margin-top:36px;"></div>
      </div>
      <p class="lede" style="font-size:23px;color:var(--ink-2);max-width:380px;">Anchor lede at the foot of the left column.</p>
    </div>
    <div class="cols-2" style="align-self:center;">
      <div class="pcol">
        <div class="phead"><h3>Trade updates</h3><span class="when">now</span></div>
        <ul class="qlist">
          <li><span class="n">i</span><span class="t"><b>Lead phrase.</b> Supporting sentence.</span></li>
          <li><span class="n">ii</span><span class="t"><b>Lead phrase.</b> Supporting sentence.</span></li>
          <li><span class="n">iii</span><span class="t"><b>Lead phrase.</b> Supporting sentence.</span></li>
        </ul>
      </div>
      <div class="pcol">
        <div class="phead"><h3>Share back</h3><span class="when">after</span></div>
        <ul class="qlist">
          <li><span class="n">i</span><span class="t"><b>Lead phrase.</b> Supporting sentence.</span></li>
          <li><span class="n">ii</span><span class="t"><b>Lead phrase.</b> Supporting sentence.</span></li>
          <li><span class="n">iii</span><span class="t"><b>Lead phrase.</b> Supporting sentence.</span></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="folio folio--bottom"><span>Gumbo &middot; Town Hall</span><span>Page <span class="folio-num">03</span></span></div>
</section>
```

### D — Section divider (immersive, bleed image)

Type anchored to the bottom-left over a darkened photo. Big `display` heading; italic-serif lede; optional voice `.mark`.

```html
<section class="spread spread--immersive" id="s04">
  <div class="bleed-img bleed-img--btm" style="background-image:url('assets/photography/digital-terrain-data-landscape.jpg');"></div>
  <div class="corner corner--tl"></div><div class="corner corner--tr"></div><div class="corner corner--bl"></div><div class="corner corner--br"></div>
  <div class="folio folio--top"><span>The Method</span><span>Listen · Map · Build · Trust · Teach <span class="dot"></span> 04</span></div>
  <div class="safe" style="display:flex;flex-direction:column;justify-content:flex-end;">
    <div class="flag flag--white" style="margin-bottom:26px;"><span class="bar"></span>The method that's developing</div>
    <h2 class="display" style="font-size:118px;line-height:.98;color:#fff;letter-spacing:-.03em;">Listen. Map. Build.<br>Trust. Teach.</h2>
    <hr style="height:1px;background:rgba(255,255,255,.45);width:520px;border:0;margin:34px 0 28px;">
    <p class="lede" style="color:rgba(255,255,255,.85);font-style:italic;max-width:820px;font-size:24px;">Italic-serif lede.</p>
    <!-- Optional voice mark: -->
    <div style="display:inline-flex;align-items:baseline;gap:14px;margin-top:30px;font-family:var(--display);font-weight:500;font-size:16px;letter-spacing:.18em;text-transform:uppercase;color:#fff;">
      <span class="mark" style="border-color:var(--okra);color:#fff;position:relative;top:6px;">α</span><span>Dustin</span>
    </div>
  </div>
  <div class="folio folio--bottom"><span>Gumbo &middot; A Working Method</span><span class="folio-num">04</span></div>
</section>
```

### E — Index row, N columns (paper)

A header band (split title + body), a `2px` ink rule, then an N-column `.moves` index pinned to the bottom. Set `grid-template-columns:repeat(N,1fr)` inline.

```html
<section class="spread" id="s05">
  <div class="corner corner--tl"></div><div class="corner corner--tr"></div><div class="corner corner--bl"></div><div class="corner corner--br"></div>
  <div class="folio folio--top"><span>The Five Moves</span><span>How We Work <span class="dot"></span> 05</span></div>
  <div class="safe" style="display:flex;flex-direction:column;">
    <div style="display:grid;grid-template-columns:1fr 1.25fr;gap:80px;align-items:end;">
      <div>
        <div class="flag" style="margin-bottom:20px;"><span class="bar"></span>The Five Moves</div>
        <h2 class="display" style="font-size:92px;line-height:.94;">How we<br><span class="ser">work.</span></h2>
      </div>
      <p class="body" style="font-size:20px;padding-bottom:8px;">Framing paragraph. Bold a key clause with <strong>strong</strong>.</p>
    </div>
    <hr style="height:2px;background:var(--ink);border:0;margin:48px 0 44px;">
    <div class="moves" style="grid-template-columns:repeat(5,1fr);margin-top:auto;padding-bottom:10px;">
      <div class="move"><div class="num">i</div><h3>Listen</h3><div class="body">One line.</div></div>
      <div class="move"><div class="num">ii</div><h3>Map</h3><div class="body">One line.</div></div>
      <div class="move"><div class="num">iii</div><h3>Build</h3><div class="body">One line.</div></div>
      <div class="move"><div class="num">iv</div><h3>Trust</h3><div class="body">One line.</div></div>
      <div class="move"><div class="num">v</div><h3>Teach</h3><div class="body">One line.</div></div>
    </div>
  </div>
  <div class="folio folio--bottom"><span>Gumbo &middot; Town Hall</span><span>Page <span class="folio-num">05</span></span></div>
</section>
```

### E2 — Cycle diagram (non-linear, paper)

Use **instead of the N-column index (E)** when the steps are *continuous and interdependent* rather than sequential — a process where everything runs at once and each part leans on the others. A numbered row reads as "do these in order"; this circle reads as "all at once." Five nodes on a ring (one at top = "begin here"), clockwise tangent arrows for motion, a quiet concentric core holding the center label. Tuned for 5 nodes (cx 680, cy 380, r 270); recompute node coords for other counts: `x = cx + r·sin(θ)`, `y = cy − r·cos(θ)`, θ clockwise from top.

> ⚠️ **Never draw point-to-point lines between the nodes to show "interdependence."** Five symmetric points joined to each other form a **pentagram** — straight diagonals make a literal star, and inward-bowing curves carve a star into the negative space. (Learned the hard way: it rendered live mid-presentation as a pentagram.) Let the single unbroken ring + the copy carry "interdependent / all leaning on each other," and put a quiet concentric core in the middle. If you must show convergence, use short radial ticks from each node toward the center — not a web between nodes.

```html
<div style="flex:1;display:flex;align-items:center;justify-content:center;min-height:0;">
  <svg viewBox="0 0 1360 700" preserveAspectRatio="xMidYMid meet" style="width:100%;height:100%;max-height:700px;display:block;">
    <!-- quiet concentric core (NO point-to-point lines — they form a pentagram) -->
    <circle cx="680" cy="380" r="138" fill="none" stroke="#e0d9c8" stroke-width="1"/>
    <!-- the cycle -->
    <circle cx="680" cy="380" r="270" fill="none" stroke="#2563eb" stroke-width="2" opacity="0.5"/>
    <!-- clockwise motion: tangent arrowheads at arc midpoints (rotate = midpoint angle) -->
    <g fill="#2563eb" opacity="0.85">
      <path d="M -5,-5 L 6,0 L -5,5 Z" transform="translate(839,162) rotate(36)"/>
      <path d="M -5,-5 L 6,0 L -5,5 Z" transform="translate(937,463) rotate(108)"/>
      <path d="M -5,-5 L 6,0 L -5,5 Z" transform="translate(680,650) rotate(180)"/>
      <path d="M -5,-5 L 6,0 L -5,5 Z" transform="translate(423,463) rotate(252)"/>
      <path d="M -5,-5 L 6,0 L -5,5 Z" transform="translate(521,162) rotate(324)"/>
    </g>
    <text x="680" y="373" text-anchor="middle" font-family="Space Grotesk,sans-serif" font-size="13" letter-spacing="3" fill="#555">ALL AT ONCE</text>
    <text x="680" y="399" text-anchor="middle" font-family="Source Serif 4,serif" font-style="italic" font-size="15" fill="#8a8a8a">always running</text>
    <!-- nodes: paper mask + dot (top node gets a halo = "begin here") -->
    <g>
      <circle cx="680" cy="110" r="11" fill="#faf8f1"/><circle cx="680" cy="110" r="15" fill="none" stroke="#2563eb" stroke-width="1.5"/><circle cx="680" cy="110" r="7" fill="#2563eb"/>
      <circle cx="937" cy="297" r="11" fill="#faf8f1"/><circle cx="937" cy="297" r="7" fill="#2563eb"/>
      <circle cx="839" cy="598" r="11" fill="#faf8f1"/><circle cx="839" cy="598" r="7" fill="#2563eb"/>
      <circle cx="521" cy="598" r="11" fill="#faf8f1"/><circle cx="521" cy="598" r="7" fill="#2563eb"/>
      <circle cx="423" cy="297" r="11" fill="#faf8f1"/><circle cx="423" cy="297" r="7" fill="#2563eb"/>
    </g>
    <g font-family="Space Grotesk,sans-serif" fill="#111">
      <text x="680" y="22" text-anchor="middle" font-size="10.5" letter-spacing="2.5" fill="#2563eb">BEGIN HERE · NEVER STOP</text>
      <text x="680" y="56" text-anchor="middle" font-size="31">Node A</text>
      <text x="1004" y="290" text-anchor="start" font-size="31">Node B</text>
      <text x="880" y="652" text-anchor="start" font-size="31">Node C</text>
      <text x="480" y="652" text-anchor="end" font-size="31">Node D</text>
      <text x="356" y="290" text-anchor="end" font-size="31">Node E</text>
    </g>
    <g font-family="Source Serif 4,serif" font-size="15" fill="#555">
      <text x="680" y="79" text-anchor="middle">One-line descriptor.</text>
      <text x="1004" y="313" text-anchor="start">One-line descriptor.</text>
      <text x="880" y="675" text-anchor="start">One-line descriptor.</text>
      <text x="480" y="675" text-anchor="end">One-line descriptor.</text>
      <text x="356" y="313" text-anchor="end">One-line descriptor.</text>
    </g>
  </svg>
</div>
```

Node coords (5-up): top `(680,110)`, upper-right `(937,297)`, lower-right `(839,598)`, lower-left `(521,598)`, upper-left `(423,297)`. Arrow midpoints `(839,162)/(937,463)/(680,650)/(423,463)/(521,162)` with `rotate` = `36/108/180/252/324`. Label anchors sit radially outside each node (start on the right side, end on the left, middle top/bottom).

### F — Closing (immersive, bleed image)

Same structure as the cover; swap the photo and copy. Wordmark in the top folio, big `display` headline with italic-serif last word, lede, dated bottom folio.

```html
<section class="spread spread--immersive" id="s06">
  <div class="bleed-img bleed-img--btm" style="background-image:url('assets/photography/hero-landscape-halftone.jpg');"></div>
  <div class="corner corner--tl"></div><div class="corner corner--tr"></div><div class="corner corner--bl"></div><div class="corner corner--br"></div>
  <div class="folio folio--top"><span><!-- INLINE wordmark-white.svg, class="wm" --></span><span>Last Thing <span class="dot"></span> 06</span></div>
  <div class="safe" style="display:flex;flex-direction:column;justify-content:flex-end;">
    <div class="eyebrow eyebrow--white" style="margin-bottom:28px;">Last thing</div>
    <h2 class="display" style="font-size:148px;line-height:.92;color:#fff;letter-spacing:-.035em;">Let's do<br>a <span class="ser">Roux.</span></h2>
    <hr style="height:1px;background:rgba(255,255,255,.4);width:460px;border:0;margin:38px 0 28px;">
    <p class="lede" style="color:rgba(255,255,255,.9);max-width:780px;font-size:25px;">Closing lede.</p>
  </div>
  <div class="folio folio--bottom"><span>Gumbo &middot; Town Hall &middot; June 26, 2026</span><span class="folio-num">06</span></div>
</section>
```

## Building a deck

A clean editorial arc: **Cover (A) → Content/agenda (B) → detail spreads (C/B) → Divider (D) → Index (E) → Closing (F).** Alternate paper and night — never run two night spreads back-to-back. Drop caps (`.dropcap` on a lede) are great for the first prose spread.

## Export

Canvas is `1600 × 1100`; the baked-in `@page` rule makes each `.spread` one PDF page.

- **With Puppeteer:** `node "<plugin-root>/scripts/html-export.mjs" deck.html deck.pdf --width 1600 --height 1100 --format pdf`
- **No Node (headless Chrome):**
  `"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --disable-gpu --no-pdf-header-footer --print-to-pdf=deck.pdf --virtual-time-budget=12000 "file:///ABS/PATH/deck.html"`
- **Image-heavy decks balloon** (Chrome embeds full-bleed photos uncompressed — easily 80MB+). Compress with Ghostscript, which keeps it crisp at spread size:
  `gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.5 -dPDFSETTINGS=/printer -dDownsampleColorImages=true -dColorImageResolution=150 -dNOPAUSE -dQUIET -dBATCH -sOutputFile=deck-min.pdf deck.pdf`

Always do a **visual review** (render a PNG and read it) before delivering — same rule as any Gumbo artifact.

## Usage notes & gotchas

- **No Pika icons** in this style — numerals, rules, and the circle `.mark` only. This is the intended exception to the global icon rule.
- The **italic-serif last word** is the signature. Use it on almost every heading; skip it only when a heading is a single proper noun.
- Keep the blue accent **rare** — top-borders, numerals, the `now/after` pill, the voice mark. Paper + ink does the heavy lifting.
- Night dividers: bleed photos run dark. Anchor type to the **bottom-left** over `--btm` gradient; use the `115deg` overlay only when type must sit mid-frame.
- For browser-viewed (not exported) HTML, Source Serif and Space Grotesk both load from Google Fonts, so it renders cross-platform as-is.
- Bundled halftone photography in `assets/photography/` already suits the night dividers; pick by mood (gathering/people for openers, terrain/landscape for method + closing).
```
