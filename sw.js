// ★キャッシュ名は必ず更新（差し替え時に変える）
const CACHE_NAME = 'ezdb-v20';

// プリキャッシュするファイル
const PRECACHE = [
  './',
  './index.html',
  './manifest.json',
  './icons/icon-192.png',
  './icons/icon-512.png',
  // 武器をプリキャッシュ
  './data/items_daggers.json',
  './data/items_swords.json',
  './data/items_axes.json',
  './data/items_hammer.json',
  './data/items_rods.json',
  './data/items_bows.json',
  // モンスターも使うなら
  './data/monsters.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE))
  );
  // 旧SWを待たずに即時有効化
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // 古いキャッシュを掃除
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  // 既存タブにも即時反映
  self.clients.claim();
});

// JSONは「ネット優先 → ダメならキャッシュ」
// それ以外は「キャッシュ優先 → 無ければネット」
self.addEventListener('fetch', (event) => {
  const req = event.request;
  const url = new URL(req.url);

  const isJSON = url.pathname.endsWith('.json');

  if (isJSON) {
    event.respondWith(
      fetch(req).then(resp => {
        // 成功したらキャッシュに保存して返す
        const copy = resp.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(req, copy));
        return resp;
      }).catch(() => caches.match(req))
    );
  } else {
    event.respondWith(
      caches.match(req).then(resp => resp || fetch(req))
    );
  }
});
