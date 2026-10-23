#!/usr/bin/env python3
"""Generate a sitemap for the static 007saas.com site during deployment."""
from html import escape
from pathlib import Path

SITE_URL = "https://007saas.com"
EXCLUDED_DIRS = {".git", ".github", "assets", "node_modules", "vendor", "scripts"}


def public_url(path: Path) -> str | None:
    parts = path.parts
    if any(part.startswith(".") or part in EXCLUDED_DIRS for part in parts):
        return None
    if path.name.lower() == "404.html":
        return None

    if path.name == "index.html":
        relative_dir = path.parent.as_posix()
        suffix = "" if relative_dir == "." else f"{relative_dir}/"
    else:
        suffix = path.as_posix()

    return f"{SITE_URL}/" if not suffix else f"{SITE_URL}/{suffix}"


def main() -> None:
    urls = sorted(
        url
        for path in Path(".").rglob("*.html")
        if (url := public_url(path)) is not None
    )
    entries = "\n".join(
        f"  <url><loc>{escape(url)}</loc></url>" for url in urls
    )
    content = (
        '<?xml version="1.0" encoding="UTF-8"?>\n'
        '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
        f"{entries}\n"
        "</urlset>\n"
    )
    Path("sitemap.xml").write_text(content, encoding="utf-8")
    print(f"Generated sitemap.xml with {len(urls)} URLs")


if __name__ == "__main__":
    main()
