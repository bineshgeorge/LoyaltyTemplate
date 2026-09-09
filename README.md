# PYXiiS DIGI Partner Portal template

Static HTML reference for the DenebLoyalty partner portal. Open any page directly in a browser; no server or build step.

## Pages

| File | What it is |
|---|---|
| `layout-member.html` | Frame for signed-in pages: nav with cart and user chip, page head band, points card, footer. Copy this to start a new member page. |
| `layout-anonymous.html` | Frame for pre-login pages: three-item nav with Sign in button, page head band, footer. |
| `home.html` | Signed-in home: hero carousel, points card, tier progress, campaigns, featured rewards, value strip, terms modal. |
| `login.html`, `forgot-password.html` | Split auth layout: image panel plus form card. |
| `register.html` | Company registration form. |
| `catalogue.html`, `cart.html`, `checkout.html`, `order-placed.html` | Redemption flow with the three-step indicator. |
| `history.html`, `statement.html`, `profile.html` | Account and activity pages. |
| `contact-us.html`, `info.html` | Support and information pages. |

## Assets

| File | Purpose |
|---|---|
| `assets/css/theme.css` | Design tokens (colours, type, radius, shadow), nav, footer, buttons, pills, meters, cards, points card. Loaded by every page. |
| `assets/css/pages.css` | Inner page components: page head band, redemption steps, forms, tables, status pills, filters, catalogue grid, cart, order confirmation, prose, contact and profile side panels. Loaded by every page except home. |
| `assets/css/home.css` | Home page only: hero, tier, campaigns, featured rewards. |
| `assets/css/fonts.css` | Montserrat font faces (Regular, Medium, SemiBold, Bold). |
| `assets/js/site.js` | Injects the SVG icon sprite, runs the hero carousel, mobile nav toggle, and the terms modal trigger. |
| `assets/font/montserrat/` | The four Montserrat weights referenced by `fonts.css`. |
| `assets/images/banner/` | Page head and hero backgrounds. |
| `assets/images/layout/prelogin_bg.jpg` | Auth page image panel. |
| `assets/images/rewards/` | Reward images. |

Bootstrap 5.3 is loaded from the jsDelivr CDN and provides the grid, form base styles and the modal. Nothing else is loaded.

## Conventions

- Page head: `section.page-head` with `div.page-head-img` (inline `background-image`) and a `.container` holding optional `.crumbs`, `.kicker`, `h1`, `p.lead-x`. Add `has-stats` when the points card follows.
- Points card: `div.container.stats-wrap > div.card-x.stats`. Only on member pages.
- Content: `section.page-body` (add `after-stats` when following the points card), blocks are `div.card-x.card-pad.block` with an `h2.block-title`.
- Buttons: `btn btn-gold` primary, `btn btn-blue-soft` secondary, `btn btn-navy` for filter apply, `btn-sm` for compact.
- Forms: Bootstrap `row g-3` with `col-md-6`, `label.form-label` (required marker is `span.req`), `input.form-control` or `select.form-select`. Checkboxes use Bootstrap `form-check`.
- Tables: `table.table-x.stack` inside `div.table-wrap`; every `td` carries `data-label` so the table stacks into cards under 768px. Numeric columns use `.num`; status uses `span.status.status-<state>`.
- Redemption steps: `ol.steps` with `li.done`, `li.current`.
- Icons: `<svg><use href="#i-name"/></svg>`. The sprite is injected by `site.js`; add new symbols there.
- Terms modal: set `data-terms-accepted="false"` on `<body>` and `site.js` opens `#tncModal` on load.
