const CACHE_NAME = "version-1";
const urlsToCache = [
  '/',
  'icons/clipboard.svg',
  'icons/delete.svg',
  'icons/lock.svg',
  'icons/send.svg',
  'icons/unlock.svg',
  'asset-manifest.json',
  'favicon.ico',
  'index.html',
  'logo192.png',
  'logo512.png',
  'manifest.json',
  'serviceworker.js',
  'service-worker.js',
  'static/js/main.chunk.js',
  'static/js/0.chunk.js',
  'static/js/bundle.js',
];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((resp) => {
        if (resp) {
          return resp
        }
        return fetch(event.request)
      })
  )
});

// Activate the SW
self.addEventListener('activate', (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(CACHE_NAME);

  event.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        if(!cacheWhitelist.includes(cacheName)) {
          return caches.delete(cacheName);
        }
      })
    ))

  )
});
