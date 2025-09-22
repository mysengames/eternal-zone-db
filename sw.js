self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('ezdb-v2').then(cache => cache.addAll([
    './',
    './index.html',
    './manifest.json',
    './icons/icon-192.png',
    './icons/icon-512.png',
    './data/items.json',
    './data/monsters.json'
  ])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
