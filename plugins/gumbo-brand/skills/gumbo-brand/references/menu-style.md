# Menu Style

Use the plugin root already resolved and verified by `../SKILL.md`. Read `deck-styles.md` first to confirm this is the right house style for the piece.

```yaml
---
id: "M"
name: Menu Style
mode: content discipline on either chassis (Studio Deck 1920×1080 or Editorial Spread 1600×1100)
content-types: [steering-committee, alignment, options, pricing, glossary, worksheet, landscape, teach-the-room]
source: "NTN AI Steering Committee and migration decks (July 2026); The Gumbo Menu for the team (July 14, 2026)"
---
```

Menu Style is what you put on the page, not how the page is built. Pick the chassis first (the Studio Deck from `presentations.md` and `templates/html/deck.html` for slides, the Editorial Spread from `editorial-spread.md` for a printed-menu feel), then compose from these four patterns.

## Ordering: story, then options

A menu deck runs in this order and no other:

1. **The landscape.** Who the players are and what each one actually is, in plain words. One spread per ecosystem if the room needs it.
2. **The glossary.** Every term the room will hear, defined once.
3. **The price list.** What things cost, per unit, today.
4. **The options.** Two or three real choices, each with what it gets you and what it costs you.
5. **The worksheet.** The blanks the room fills in together.
6. **The questions.** What we want to know from the room before anyone decides.

Never open on a recommendation. If a recommendation exists, it is the last page, and it is phrased as a question.

Token names on the Studio Deck chassis (`--gumbo-*`, `--font-*`) come from `assets/theme/gumbo.css`. Token names on the Editorial Spread chassis (`--ink`, `--rule`, `--display`, `--serif`) come from the `<head>` block in `editorial-spread.md`.

## Pattern 1 · Glossary row

Term on the left in the display face, one plain line on the right. One term per row. Hairline between rows. Six to eight rows per page, no more.

**Studio Deck chassis** (inside a `.stage`):

```html
<div class="stage" style="padding:48px 56px;display:grid;grid-template-columns:1fr 1fr;gap:32px 64px;">
  <div class="qrow">
    <div class="q">BAA</div>
    <div class="a">Business Associate Agreement. The contract a vendor signs before it can touch patient data.</div>
  </div>
  <div class="qrow">
    <div class="q">Tenant</div>
    <div class="a">Your organization's own fenced-off copy of a cloud service. One tenant, one set of rules.</div>
  </div>
</div>
```

```css
.qrow{border-bottom:1px solid var(--gumbo-line);padding-bottom:15px}
.qrow .q{font-family:var(--font-heading);font-size:21px;color:var(--gumbo-black);line-height:1.4}
.qrow .a{font-size:15px;color:var(--gumbo-muted);margin-top:5px;line-height:1.4}
```

**Editorial Spread chassis** (inside `.safe`):

```html
<div class="menu">
  <div class="menu-row"><div class="term">BAA</div><div class="def">Business Associate Agreement. The contract a vendor signs before it can touch patient data.</div></div>
  <div class="menu-row"><div class="term">Tenant</div><div class="def">Your organization's own fenced-off copy of a cloud service. One tenant, one set of rules.</div></div>
</div>
```

```css
.menu{display:flex;flex-direction:column}
.menu-row{display:grid;grid-template-columns:260px 1fr;gap:40px;padding:22px 0;border-bottom:1px solid var(--rule)}
.menu-row .term{font-family:var(--display);font-weight:400;font-size:30px;letter-spacing:-.02em;color:var(--ink)}
.menu-row .def{font-family:var(--serif);font-size:21px;line-height:1.45;color:var(--ink-2)}
```

## Pattern 2 · Price list

Item, what it is, price. Right-align the price in the stat face. Alternate row tint. Use the accent colors for meaning only: okra for free, muted ink for "by quote" or "n/a." A price that depends on an unconfirmed count is written as the per-unit figure, never multiplied out.

```html
<table class="price">
  <thead><tr><th>Item</th><th>What it is</th><th class="num">Cost</th></tr></thead>
  <tbody>
    <tr><td class="item">Google data import</td><td>Google's own migration service, run from the Admin console</td><td class="num free">$0</td></tr>
    <tr><td class="item">Workspace Business Standard</td><td>The floor for Gemini across Gmail, Docs, and Meet under the BAA</td><td class="num">$14 /user/mo</td></tr>
    <tr><td class="item">Workspace Enterprise</td><td>No user ceiling, and the only tier with enforceable DLP. Quote-only</td><td class="num quiet">by quote</td></tr>
  </tbody>
</table>
```

```css
.price{width:100%;border-collapse:collapse;background:#fff;border-radius:8px;overflow:hidden}
.price th{text-align:left;padding:16px 24px;background:var(--gumbo-black);color:#fff;font-weight:500;font-size:15px}
.price td{padding:16px 24px;font-size:18px;border-bottom:1px solid var(--gumbo-line);color:var(--gumbo-black-90)}
.price tr:nth-child(even) td{background:var(--gumbo-canvas)}
.price .item{font-family:var(--font-heading);color:var(--gumbo-black)}
.price .num{text-align:right;font-family:var(--font-stat);font-weight:600;color:var(--gumbo-black)}
.price .free{color:var(--gumbo-okra)}
.price .quiet{color:var(--gumbo-muted)}
```

On the Editorial Spread chassis, drop the header bar and the tint: hairline rows, the item in the display face, the price in Space Grotesk 500 right-aligned, a short italic-serif note under the item where a caveat is needed. Same three columns.

## Pattern 3 · The options spread

Two or three real choices side by side. Each card carries: a name, one sentence on what it is, "what you get," "what it costs you" (time, money, risk, in that order), and "who this fits." No card is pre-selected. No "recommended" badge unless the room already asked for one.

```html
<div class="options">
  <div class="opt">
    <div class="overline">// OPTION A</div>
    <h3>Stay on Microsoft, add the AI layer</h3>
    <p class="what">Keep every account where it is. Put the governed AI layer on top.</p>
    <dl><dt>You get</dt><dd>No migration. Familiar tools.</dd><dt>It costs you</dt><dd>Two vendors to govern. Copilot seats on top of E3.</dd><dt>Fits when</dt><dd>The team's habits matter more than the bill.</dd></dl>
  </div>
  <!-- Option B, Option C -->
</div>
```

```css
.options{display:grid;grid-template-columns:repeat(3,1fr);gap:24px}
.opt{background:var(--gumbo-surface);border-radius:8px;padding:24px}
.opt h3{margin:8px 0 12px}
.opt .what{color:var(--gumbo-black-90);margin-bottom:16px}
.opt dt{font-family:var(--font-body);font-weight:500;font-size:13px;letter-spacing:.04em;text-transform:uppercase;color:var(--gumbo-muted);margin-top:12px}
.opt dd{margin:4px 0 0}
```

## Pattern 4 · The live worksheet

Where the data does not exist yet, the deck becomes a form the room fills in. Real column heads, empty cells, generous row height, a pen-friendly rule under each cell. The deck is presented from the source file, so the cells can be typed into live.

```html
<table class="sheet">
  <thead><tr><th>Facility</th><th>People</th><th>Mostly Microsoft or Google today?</th><th>Who would know</th></tr></thead>
  <tbody>
    <tr><td>Hamilton</td><td contenteditable></td><td contenteditable></td><td contenteditable></td></tr>
    <tr><td>Fairfield</td><td contenteditable></td><td contenteditable></td><td contenteditable></td></tr>
  </tbody>
</table>
```

```css
.sheet{width:100%;border-collapse:collapse}
.sheet th{text-align:left;padding:12px 16px;font-size:14px;font-weight:500;color:var(--gumbo-muted);border-bottom:2px solid var(--gumbo-black)}
.sheet td{padding:20px 16px;border-bottom:1px solid var(--gumbo-line);font-size:18px;min-height:56px}
.sheet td[contenteditable]:empty::before{content:"";display:block;height:1.2em}
.sheet td[contenteditable]:focus{outline:2px solid var(--gumbo-blue);outline-offset:-2px;background:#fff}
```

## Stance check (run it after the facts are right)

Read every page once more asking only: *does this page ask the room, or tell it?* Cut or rewrite:

- `Owner: ___ Date: ___` blanks on decision pages (assigns work the room has not agreed to)
- "We leave this room with…" (predetermines the outcome)
- "The calendar argues for…" (a recommendation wearing a passive voice)
- Annualized savings ranges (multiplies two unconfirmed numbers into false precision)
- Any "recommended" badge the room did not ask for

Replace with the plain per-unit fact and a question.

## A worked page, Editorial Spread chassis

```html
<section class="spread">
  <div class="corner corner--tl"></div><div class="corner corner--tr"></div><div class="corner corner--bl"></div><div class="corner corner--br"></div>
  <div class="folio folio--top"><span>The menu</span><span class="folio-num">03</span></div>
  <div class="safe">
    <div class="eyebrow">Before we choose</div>
    <h2 class="display" style="font-size:76px;line-height:.96;margin:16px 0 40px;">Six words you will <span class="ser">hear.</span></h2>
    <div class="menu">
      <div class="menu-row"><div class="term">BAA</div><div class="def">The contract a vendor signs before it can touch patient data.</div></div>
      <div class="menu-row"><div class="term">Tenant</div><div class="def">Your organization's own fenced-off copy of a cloud service.</div></div>
      <div class="menu-row"><div class="term">SSO</div><div class="def">One login for everything, managed by you, not by each app.</div></div>
      <div class="menu-row"><div class="term">DLP</div><div class="def">Rules that stop a file leaving when it should not.</div></div>
      <div class="menu-row"><div class="term">Migration</div><div class="def">Moving mail, files, and calendars from one home to another, once.</div></div>
      <div class="menu-row"><div class="term">Seat</div><div class="def">One person's license, billed per month.</div></div>
    </div>
  </div>
  <div class="folio folio--bottom"><span>Gumbo</span><span>Hosted conversation, not a verdict</span></div>
</section>
```

Uses the Editorial Spread `<head>` block from `editorial-spread.md` plus the `.menu` rules above.
