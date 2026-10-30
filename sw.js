// Offline support: serve the app shell from cache, refresh it in the background.
const CACHE = "life-counter-v13";
const SHELL = ["./", "index.html", "manifest.webmanifest", "icon.svg", "icon-180.png", "icon-192.png", "icon-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  // Pages: newest version when online, cached copy offline. Everything else: cache first.
  const isPage = e.request.mode === "navigate";
  e.respondWith(caches.open(CACHE).then(async cache => {
    const cached = await cache.match(e.request);
    // GitHub Pages lets browsers cache pages for 10 minutes; skip that so updates show on the next open.
    const network = (isPage ? fetch(e.request.url, { cache: "no-cache" }) : fetch(e.request)).then(res => {
      if (res.ok || res.type === "opaque") cache.put(e.request, res.clone());
      return res;
    }).catch(() => cached);
    return isPage ? network : (cached || network);
  }));
});
