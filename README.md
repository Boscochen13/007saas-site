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

**Deployment status (2026-10-20):** GitHub Pages was enabled manually in repository settings. The latest GitHub Actions run completed successfully, including `Deploy to GitHub Pages`, and the user confirmed that the preview URL opens. The static draft intentionally differs from the former WordPress homepage. Continue visual/content QA before setting the custom domain or cancelling the old hosting plan. No DNS change has been made; keep local WordPress backups until cutover is verified.

## Security review (2026-10-20)

- [x] Added `.gitignore` rules for common credential files and WordPress backups.
- [x] Added [SECURITY.md](SECURITY.md) with public-repository handling and incident-response guidance.
- [x] Performed a basic pattern scan of current tracked text/source files for common API-key formats, private-key headers, suspicious credential assignments, and email addresses; no matches were found in that limited scan.
- [ ] Review Git history for previously committed secrets and sensitive material; the current-file scan does not cover the full history.
- [ ] In GitHub account settings, confirm 2FA/passkey, recovery methods, active sessions, SSH keys, and authorized apps.
- [ ] Review repository collaborators/write access and branch protection; account/security settings cannot be fully verified from the public repository view.
- [ ] Verify `007saas.com` at the GitHub account Pages settings before adding custom-domain DNS records.

The repository is public by design, so source code and all committed history must be treated as public. `.gitignore` is only a preventive guardrail; it does not remove already committed files or revoke leaked credentials.
