self.addEventListener('install', (e) => {
    console.log('Service Worker installé');
});

self.addEventListener('fetch', (e) => {
    // Intercepte les requêtes réseau pour un usage potentiel hors-ligne
    e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
