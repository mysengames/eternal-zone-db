self.addEventListener('install', function(e) {
  e.waitUntil(caches.open('ezdb-v5').then(function(cache) {
    return cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './icons/icon-192.png',
      './icons/icon-512.png',
      './data/items.json',
      './data/monsters.json'
    ]);
  }));
});
self.addEventListener('fetch', function(e) {
  e.respondWith(caches.match(e.request).then(function(resp) {
    return resp || fetch(e.request);
  }));
});
