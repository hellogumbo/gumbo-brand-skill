# Gumbo house styles

Use the plugin root already resolved and verified by `../SKILL.md`. Read this before any deck, menu, one-pager, or shareable, and pick one style before writing a line of markup. Hold it for the whole piece. Never mix styles in one deliverable.

| Style | Canvas | Feels like | Reach for it when |
|---|---|---|---|
| **Studio Deck** (default) | 1920×1080 | A confident product studio | Selling or showing: pitches, client decks, product walkthroughs, anything with a UI in it |
| **Editorial Spread** | 1600×1100 | A printed journal | The writing carries the weight: a thesis, a framework you are naming, a manifesto, an all-hands, a working session |
| **Menu Style** | either canvas | A restaurant menu handed to the table | Teaching a room the landscape and asking it real questions: steering committees, alignment conversations, options and prices, anything with jargon to translate |

How to choose in one line: **show a product → Studio. Make an argument → Editorial. Teach a room and let it choose → Menu.**

## Studio Deck

The default. `presentations.md` describes it in full: clean and immersive modes, the split-header backbone (heading left one third, body right two thirds), content stages, Pika icons, halftone photography. Start from `templates/html/deck.html` or `templates/slides/`. Nothing about it is repeated here.

## Editorial Spread

Magazine-grade reading spreads on warm paper (`#faf8f1`) with night dividers (`#0d1424`). Source Serif 4 body, Space Grotesk display, and the signature move: **the last word of every heading set in italic serif.** Folio strips, registration corner-marks, a whisper of paper grain. Deliberately icon-free: the one Gumbo style that skips Pika icons.

Full system, the paste-once `<head>` block, and seven ready spreads (cover, content and column row, two-column breakout, divider, index row, cycle diagram, closing) are in `editorial-spread.md`.

Working rule from the founder: any plated artifact that leaves the kitchen (client docs, proposals, team menus, shareables) gets the Editorial Spread treatment. Plain letter pages are for internal working notes only.

## Menu Style

Menu Style is a **content discipline, not a new chassis.** It runs on either canvas: Studio Deck when the room expects slides, Editorial Spread when it should feel like a printed menu (the July 2026 Gumbo Menu for the team was an Editorial Spread). What makes it a menu is what is on the page:

1. **Big type, short items.** Nothing on a page that cannot be read in a few seconds. No paragraphs where a line will do.
2. **Every term defined the moment it appears.** A glossary row: the term on the left, a one-line plain-English definition on the right. Never assume the room knows an acronym (BAA, PHI, Part 2, SSO).
3. **Real costs as a price list.** Item, one-line description, price. Not a comparison matrix. State the plain per-unit difference and stop; never build a savings projection from unconfirmed counts.
4. **Story, then options.** Teach the landscape first (who the players are, what each thing actually is), then lay out the choices. Never open on the recommendation.
5. **Blank where the data is not real yet.** A live, fillable worksheet the room completes together beats a fabricated number every time.
6. **Stance check as a separate pass.** After the facts are right, read the deck again for posture. Tells that it has drifted into an execution plan: `Owner: ___ Date: ___` blanks, "we leave this room with six owners," "the calendar argues for starting in August." A menu asks; it does not assign.

Skeletons for the glossary row, the price list, the options spread, and the worksheet, on both chassis, are in `menu-style.md`.

## The one rule that spans all three

Show the work. Decks are presented live from the source file and iterated in front of the room when the room is internal. That is a value, not a slip. Client rooms get the finished file.

## Export and the brand audit

`scripts/html-export.mjs` works for all three styles; pass `--width 1600 --height 1100` for Editorial Spreads. The mandatory brand audit was written for the Studio Deck. Its all-caps and tracking checks will flag the Editorial Spread's spaced-caps eyebrows and folios on purpose; for that style, render with headless Chrome (recipe in `editorial-spread.md`) and do the visual review by eye instead of bypassing the audit. Image-heavy spreads balloon past 80MB; compress with Ghostscript (`-dPDFSETTINGS=/printer -dColorImageResolution=150`). Ship files with a dated name so nobody reviews a stale download.
