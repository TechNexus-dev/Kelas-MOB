const CACHE_NAME = 'mob-technexus-v1';
const PRECACHE_URLS = [
  './',
  './index.html',
  './style.css',
  './Project/script.js',
  './offline.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_URLS))
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
    ))
  );
});

self.addEventListener('fetch', event => {
  // respond with cache-first for precached assets, fallback to network, then offline page
  event.respondWith(
    caches.match(event.request).then(cached => {
      if(cached) return cached;
      return fetch(event.request).then(resp => {
        // optionally cache new requests (e.g., images)
        return resp;
      }).catch(()=>{
        // if navigation request, return offline page
        if(event.request.mode === 'navigate') return caches.match('/offline.html');
      });
    })
  );
});