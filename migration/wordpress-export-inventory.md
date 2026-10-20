# 007SaaS WordPress migration inventory

Source: WordPress export `007saas.WordPress.2026-10-12.xml` (768 KB). This is a content triage log, not proof that all live-site content, media, or WordPress features have been recovered.

## Decision summary

**Migration policy: selective migration, not a full copy.** The export shows substantial theme/demo filler in the old articles. Do not publish those bodies just to preserve URLs. Preserve useful concepts and design references, then rewrite only when there is genuine experience, evidence, or a clear user need behind the content.

| Source item | Decision | Reason / next step |
|---|---|---|
| Custom root landing page, slug `1439-2` | **Keep as a design reference** | Useful dark/navy + neon-green visual direction and project-hub concept. The new static `index.html` is already a cleaner draft; compare and selectively reuse ideas rather than blindly copying WordPress markup. |
| Page slug `1470-2`, title/positioning around “007SaaS / 自动化营销与海外线索捕获” | **Keep for positioning review** | Potentially useful positioning around SaaS marketing, overseas growth, and AI analytics. Any strong feature/performance claims must be verified against real, working products before public use. |
| Page slug `1450-2` | **Review later** | Custom HTML page appears in the export; the export inventory alone does not establish that its content is worth publishing. Inspect the full page before deciding. |
| Page titled `首页`, slug `首页`, title “语音唤醒：夏娃形态” | **Keep separate as an experiment** | Voice-wake/Eve concept is an independent prototype, not the official 007SaaS homepage. Do not surface it as a live feature unless the demo is tested and intentionally revived. |
| `Writing a Business Case: What It Is and How to Write` | **Do not migrate body; save topic idea** | Body contains Lorem ipsum/template text and generic social-media tips unrelated to the title. Could be rewritten later only if there is a useful original case. |
| `Tools and Tips to Successfully Organize Your Small Business` | **Do not migrate body; save topic idea** | Article appears to use starter-template content. Rewrite only if there is a specific, useful angle. |
| `Want to Grow Your Business? You Need a Growth Strategy` | **Do not migrate body; save topic idea** | Body is placeholder text; topic is broad and needs original substance. |
| `The Best SaaS Tools to Boost Business Growth` | **Do not migrate body; save topic idea** | Old listicle is not validated/current. Rebuild only as a researched and dated comparison if still useful. |
| `20 Business Blogs That Will Blow Your Mind` | **Do not migrate body; save topic idea** | Potentially stale listicle; only revive after checking relevance and links. |
| `What Effect Will AI Have on Construction?` | **Do not migrate body; low priority topic idea** | Generic topic; no evidence in the export of an original analysis worth preserving. |
| `Be Remarkable: How to Make Your Business Stand Out` | **Do not migrate body; save topic idea** | Template-like article, no demonstrated original value. |
| `The 8-Step Process We Used to Start a Successful Podcast` | **Do not migrate body; save topic idea** | Title implies first-hand experience, but the exported body does not support that claim. Do not repeat the “we used” claim without evidence. |
| `Why Startups Fail: 11 Mistakes Founders Keep Making` | **Do not migrate body; save topic idea** | Generic topic; needs original examples or research to be worth publishing. |
| `5 Stages of Team Development: What You Need to Know` | **Do not migrate body; save topic idea** | Generic/template content; low priority. |
| `Hello world!`, `Hello World 1`, `Hello World 2`, `Hello World 3` | **Skip** | Test/demo posts, not portfolio value. |
| `隐私政策`, `联系我们` | **Do not copy from export** | Their exported page-content fields are empty. Create appropriate new pages only when needed; do not invent that these reproduce the original pages. |
| WordPress comments | **Skip** | Not useful for the static site; may include spam or irrelevant links. |
| Theme demo content, placeholder imagery, empty/template pages | **Skip unless a specific asset is verified useful** | Avoid carrying over clutter or broken dependencies. |

## Useful article ideas to keep in a backlog

These are **ideas, not approved articles**. Prefer writing from actual work and experiments rather than generic SEO filler:

1. How to build a lightweight overseas-growth tracking/reporting system from zero to one.
2. Practical lessons from SEO, paid acquisition, attribution, and channel operations.
3. How to validate an AI tool idea before investing in a full product.
4. A real comparison of AI tools/workflows, with test setup, limitations, and results.
5. Turning business videos into searchable Markdown notes — if the prototype is validated.
6. Small, independent tools and automation experiments: what problem each solves, what works, and what does not.

## Static-site migration checklist

- [x] Initial static homepage draft exists at `index.html`.
- [x] Initial 404 page exists.
- [x] This selective content inventory has been recorded.
- [ ] Inspect the complete custom HTML for `1450-2` and decide whether any component is worth reusing.
- [ ] Review the complete `1470-2` page and strip any unsupported product claims before reuse.
- [ ] Extract only selected, verified media from the local WordPress backup; do not assume the XML contains media binaries.
- [ ] Add static pages only for content that passes review.
- [ ] Decide whether to retain legacy URL paths or create redirects for pages intentionally retired.
- [ ] Test links, responsive layout, accessibility basics, images, and all routes on a GitHub Pages default URL.
- [ ] Configure GitHub Pages and verify the published default URL.
- [ ] Attach `007saas.com` only after the preview is checked.
- [ ] Verify `link.007saas.com` and its Cloudflare Worker remain independent and functional.
- [ ] Cancel GoDaddy web hosting only after the migration is verified and no required service depends on it.

## Safety / infrastructure constraints

- Keep the WordPress ZIP, SQL export, and XML backup outside the public repository.
- Never commit `wp-config.php`, credentials, API keys, private keys, or database dumps.
- Do not change DNS, cancel hosting, or remove the old site during content triage.
- Keep the existing Cloudflare Telegram shortlink service at `link.007saas.com` independent from this repository.
- This repository is not yet proof of a published or verified production site.
