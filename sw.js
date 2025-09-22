self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ezdb-v8').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './icons/icon-192.png',
      './icons/icon-512.png',
      './data/items_daggers.json'  // ← 短剣のみ
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
