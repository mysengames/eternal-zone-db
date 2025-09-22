self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ezdb-v9').then(cache => cache.addAll([
      './',
      './index.html',
      './manifest.json',
      './icons/icon-192.png',
      './icons/icon-512.png',
      './data/items_daggers.json',
      // 後で長剣や防具を追加したらここに追記
      './data/monsters.json'
    ]))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(resp => resp || fetch(e.request))
  );
});
