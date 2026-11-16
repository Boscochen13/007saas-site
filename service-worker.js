const CACHE_NAME = "007saas-pwa-v1";
const APP_SHELL = ["/", "/zh-cn/", "/ja/", "/offline.html", "/manifest.webmanifest", "/favicon.svg"];
self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("007saas-pwa-") && key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== "GET" || url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response && response.ok) cache.put(request, response.clone());
        return response;
      } catch (error) {
        const cached = await cache.match(request);
        if (cached) return cached;
        const home = url.pathname.startsWith("/zh-cn/") ? "/zh-cn/" : (url.pathname.startsWith("/ja/") ? "/ja/" : "/");
        return (await cache.match(home)) || (await cache.match("/offline.html"));
      }
    })());
    return;
  }
  if (url.pathname.startsWith("/assets/") || /\.(?:css|js|svg|png|webp|jpg|jpeg|woff2?)$/i.test(url.pathname)) {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request);
      if (cached) return cached;
      try {
        const response = await fetch(request);
        if (response && response.ok) cache.put(request, response.clone());
        return response;
      } catch (error) { return cached || Response.error(); }
    })());
  }
});