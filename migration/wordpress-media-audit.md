# WordPress media and page audit

Audit date: 2026-10-20
Source: `007saas.WordPress.2026-10-12(1).xml` WordPress WXR export.

## What the export contains

The export includes these published content records:
- 15 blog posts, including several starter/demo articles and Hello World tests.
- 6 pages: privacy policy, contact, a “首页” voice-wake experiment, and multiple custom landing-page variants.
- Numerous attachment records spanning the 2021 theme/demo site and a 2026 Elementor/template import.

This is an inventory of the XML export, not a guarantee that the current live site or the entire media directory has been captured.

## Media decisions

### Do not migrate by default

- 2026/03 files named `wireframe-img.png` and variants: template/wireframe imagery, not verified brand assets.
- 2026/03 files named `placeholder-demo-image-*.jpg`: explicit placeholder/demo assets.
- 2021/04 theme assets named `woocommerce-placeholder.png`, `bg-*.png`, `dots-*.png`, `payments.png`, generic `logo-*.png`, `ui-*.png`, `dashboard*.png`, and generic avatar/headshot files: likely theme/demo kit material; don't copy without checking visual context and licensing.
- Generic stock-photo attachments from 2021: no need to preserve for a text-first portfolio unless a particular image is visibly tied to a real project and rights/attribution are clear.
- External Elementor starter asset URL `https://ai-assets.elementor.com/wp-content/uploads/2024/02/wireframe-img.png`: external template dependency; do not make the static site depend on it.

### Candidates to inspect locally

- `agent-device.png`, `aquisition-transaction.png`, `session-acquisition.png`, `total-sale.png`, and related 2021 acquisition/dashboard assets: potentially related to the older SaaS/analytics theme, but not yet verified as original product screenshots. Keep out of the published site until visually reviewed.
- `10-1.png` through `10-5.png`, `01.jpg`–`04.jpg`, and numbered assets: ambiguous filenames; do not migrate based on filename alone.
- `logo-saas.png` / `logo-saas-1.png`: likely template branding, not assumed to be the current 007SaaS logo.

## Page content decisions

- `/` (page ID 1439): retain the design direction only; the new static homepage is already a distinct draft.
- `/home/` (page ID 1444): inspect for overlap with other landing-page variants before deciding whether any unique copy/components deserve saving.
- `/1450-2/` (page ID 1450): retain the dark/neon visual direction and bento-style feature layout as design references.
- `/1470-2/` (page ID 1470): positioning reference only; claims about 24/7 monitoring, automated lead capture, and automatic conversion are not verified capabilities.
- `/首页/` (page ID 1369): isolate as the “语音唤醒：夏娃形态” experiment, not the main site.
- `/隐私政策/` and `/联系我们/`: empty in the WXR page body; rebuild only if needed.
- Older article bodies: do not migrate verbatim; use the other migration inventory for the topic backlog.

## Next media step

When the local WordPress ZIP is available for inspection, visually review only the candidate assets above, then copy a small selected set into an `assets/` directory. Do not download images from the old live host as a prerequisite, and do not keep the old host alive solely to serve images.

## Safety

Never commit the WordPress ZIP, SQL dump, `wp-config.php`, credentials, or API keys. Keep infrastructure unchanged until GitHub Pages preview and the custom-domain migration have both been tested.
