# WordPress migration inventory

Source: `007saas.WordPress.2026-10-12.xml` supplied by the site owner. This is an inventory, not proof that every image or WordPress feature has been migrated.

## Existing content observed in the export

- 14 posts.
- 7 pages.
- 97 media attachment records.
- 12 navigation menu item records, 1 navigation block, and 1 global styles record.
- The export contains custom HTML/CSS pages, including the root-page design (WordPress slug `1439-2`), `/home/`, `/1450-2/`, `/1470-2/`, and `/首页/`.
- The pages titled `隐私政策` and `联系我们` have empty page-content fields in the export. Their content must be checked in the live site or backup; do not invent their original content.
- Many article bodies are template/demo text, and several share the same body structure. Preserve them until the owner decides whether to publish or retire them.

## Posts found

- Hello world!
- Writing a Business Case: What It Is and How to Write
- Tools and Tips to Successfully Organize Your Small Business
- Want to Grow Your Business? You Need a Growth Strategy
- The Best SaaS Tools to Boost Business Growth
- 20 Business Blogs That Will Blow Your Mind
- What Effect Will AI Have on Construction?
- Be Remarkable: How to Make Your Business Stand Out
- The 8-Step Process We Used to Start a Successful Podcast
- Why Startups Fail: 11 Mistakes Founders Keep Making
- 5 Stages of Team Development: What You Need to Know
- Hello World 3
- Hello World 2
- Hello World 1

## Migration checklist

- [ ] Create a static route for every published post and page.
- [ ] Preserve old URLs where practical; add redirects or route-compatible files when necessary.
- [ ] Download media from the local WordPress backup and update image URLs to repository-relative paths.
- [ ] Review any embedded JavaScript and third-party dependencies before publishing.
- [ ] Rebuild the navigation, archive/category pages, privacy policy, and contact page.
- [ ] Compare the static version against the current WordPress website.
- [ ] Verify every route before changing DNS.

## Backup handling

Keep the ZIP, SQL, and XML backups outside this public repository. Never upload the SQL dump, `wp-config.php`, secrets, or the full WordPress installation into a public repository.
