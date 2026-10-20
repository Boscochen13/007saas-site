# 007SaaS Site

Static website for the 007SaaS domain and project hub. The goal is to move the public website away from WordPress hosting while keeping the domain `007saas.com` and leaving the Cloudflare Telegram shortlink service independent.

## Status

- [x] Initial responsive static homepage added.
- [x] First-pass content triage completed; see [`migration/wordpress-export-inventory.md`](migration/wordpress-export-inventory.md).
- [x] Review exported copy of the custom landing-page variants; retain layout ideas only and flag unsupported claims.
- [x] Audit media references and identify likely theme/demo placeholders; see [`migration/wordpress-media-audit.md`](migration/wordpress-media-audit.md).
- [ ] Visually inspect candidate media from the local WordPress ZIP before copying selected assets into this repository.
- [ ] Rebuild any WordPress-only interactions as static HTML/CSS/JavaScript.
- [ ] Decide how to handle legacy URLs: keep only useful routes or document retired routes; then test navigation, images, mobile layout, and HTTPS.
- [x] Add a GitHub Actions workflow for publishing the static site (`.github/workflows/pages.yml`).
- [x] GitHub Pages enabled; GitHub Actions selected as the publishing source.
- [x] GitHub Actions deployment completed successfully; default preview URL: https://boscochen13.github.io/007saas-site/ (user confirmed the page opens; visual/content review remains).
- [ ] Attach `007saas.com` only after verification.
- [ ] Verify `link.007saas.com` still works after the main-domain DNS change.
- [ ] Cancel GoDaddy web hosting only after the migration is complete.

## Important safety notes

- Never commit the WordPress ZIP backup, SQL database export, `wp-config.php`, credentials, or private keys.
- Keep local backups until the new site is verified and the old host is no longer needed.
- The current homepage is a new static draft, not yet a full reproduction of the old WordPress homepage.
- The WordPress export contains media references, not the actual image files. Media migration remains a required step.

## Hosting target

- Static pages: GitHub Pages.
- DNS and subdomains: Cloudflare.
- Telegram shortlink: keep the existing Cloudflare Worker at `link.007saas.com`; do not move it into this repository.
- Dynamic tools: deploy independently to Cloudflare Workers or another suitable service.

## Local preview

Open `index.html` in a browser. For routing and path testing, use a local static web server rather than opening individual files directly.


## Current migration decision (2026-10-20)

The WordPress export contains several older article bodies with placeholder text and mismatched generic copy. These are not being imported verbatim. Their titles are recorded as optional future topics, not as ready-to-publish content.

The custom pages `1439-2`, `home`, `1450-2`, and `1470-2` are separate landing-page variants. They offer dark/neon visual references, but contain unsupported claims including automated conversion, 24/7 monitoring, live revenue/ROI feeds, $54,000 annual savings, and price-like figures. Do not present these as real capabilities or outcomes without evidence. See the content and media audit files.

**Deployment status (2026-10-20):** GitHub Pages has been enabled manually in repository settings. The latest workflow run completed successfully, including the `Deploy to GitHub Pages` step. The user confirmed the preview page opens. The preview is a new static draft and differs from the former WordPress homepage by design; finish visual/content QA before setting the custom domain or cancelling hosting.al step is to enable Pages in repository Settings → Pages and select GitHub Actions as the source. No DNS change or hosting cancellation is part of this stage.
