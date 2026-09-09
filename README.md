# Partner Portal HTML template

Static HTML reference for the DenebLoyalty Partner Portal. Open any page directly in a browser; no server needed.

## Files

| File | What it is |
|---|---|
| `layout-anonymous.html` | Page frame for sign-in, register, forgot password, contact us and information pages: white header with logo, three-item menu, footer. |
| `layout-member.html` | Page frame for signed-in pages: topbar with the member menu and cart count, point summary header, footer. Includes the slick carousel initialisation. |
| `login.html`, `register.html`, `forgot-password.html` | Anonymous pages. |
| `home.html` | Signed-in home: banner carousel, point summary, campaign progress cards, content block, terms modal. |
| `catalogue.html`, `cart.html`, `checkout.html`, `order-placed.html`, `history.html` | Rewards flow with the three-step progress indicator. |
| `statement.html`, `profile.html` | Account pages. |
| `contact-us.html`, `info.html` | Support and information pages. |
| `assets/css/min.css` | The customised Bootstrap 4.5.3 build. Loaded before the Bootstrap 5.1.3 CDN stylesheet, as in the original. |
| `assets/css/custom.css`, `customs.css`, `navbar.css`, `layout.css`, `style.css`, `icons.css`, `fonts.css`, `carousel-slide.css`, `loadpage.css`, `toaster.css` | Site styles. `icons.css` maps the `icon_*` classes to the SVGs in `assets/images/icons`. |
| `assets/js/min.js` | Bootstrap 4.5.3 bundle matching `min.css`. |
| `assets/js/navbar.js`, `loadpage.js`, `carousel-slide.js`, `toastr.min.js`, `form-validation.js`, `validation.js` | Site scripts. |
| `assets/slick/` | Slick carousel (CSS, theme, script, fonts) used by the home banner. |
| `assets/font/` | Decimal and Montserrat font files referenced by `fonts.css`. |
| `assets/images/` | Layout images (logo, arrows), page banners, icons, sample reward image. |

## Conventions in the markup

- Page banner: `div.main-banner` with a background image, `hr.title-line` and an `h1.text-white.text-semibold`.
- Section heading: `hr.title-line` followed by `h4.text-semibold`.
- Buttons: `btn btn-arrow btn-yellow` (primary), `btn btn-arrow btn-blue` (secondary). Paired buttons sit in `dual-btn-left` and `dual-btn-right`.
- Forms: `div.form > div.form-group > div.row > div.col-md-6` with `label.form-label` and `input.form-control`; required marker is `span.asterisk`.
- Tables: `table.pl-table` for lists (each `td` carries `data-label` for the mobile card layout); `table.redemption_table` for the cart.
- Custom checkbox: `label.checkbox-container > input[type=checkbox] + span.checkmark`.
- Toggle switch: `label.switch > input[type=checkbox] + span.slider.round`.
- Redemption steps: `div#progress > ul#progress-num > li.step` with `complete` on the current step.
- The white curve under a banner is the inline `svg.mask_wrapper` block.
