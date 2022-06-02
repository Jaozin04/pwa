const url="https://jaozin04.github.io/pwa/"
const CACHE_NAME = "ricoemorte-v8";
const assets = [
    url+"/",
    url+"/index.html",
    url+"/manifest.json",
    url+"/js/instalar.js",
    url+"/js/pwascript.js"
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
      caches.open(CACHE_NAME).then((cache) => {
            console.log('[Service Worker] Caching all: app shell and content');
        return cache.addAll(assets);
      })
    );
  });

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
});
