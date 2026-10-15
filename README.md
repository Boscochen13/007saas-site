# 007SaaS Site

Static website for the 007SaaS domain and project hub. The goal is to move the public website away from WordPress hosting while keeping the domain `007saas.com` and leaving the Cloudflare Telegram shortlink service independent.

## Status

- [x] Initial responsive static homepage added.
- [ ] Import and review all WordPress pages and posts from the October 2026 export.
- [ ] Copy referenced media files into this repository (do not rely on the old host).
- [ ] Rebuild any WordPress-only interactions as static HTML/CSS/JavaScript.
- [ ] Test every legacy URL, images, navigation, mobile layout, and HTTPS.
- [ ] Configure GitHub Pages and test on its default URL.
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
