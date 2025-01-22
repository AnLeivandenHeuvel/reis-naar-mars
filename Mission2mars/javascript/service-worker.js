const CACHE_NAME = 'offline-games-cache-v1';
const assetsToCache = [
    'Mission2mars/games/endless-runner-html5-game-master/index.html',
    'Mission2mars/games/html5-lightcycles-master/index.html',
    'Mission2mars/games/html5-snake-master/index.html',
    'Mission2mars/games/tower_game-master/index.html',
    'Mission2mars/games/endless-runner-html5-game-master/kandi.css',
    'Mission2mars/games/html5-snake-master/page.css',
    'Mission2mars/games/endless-runner-html5-game-master/kandi.js',
    'Mission2mars/games/html5-lightcycles-master/main.js',
    'Mission2mars/games/html5-snake-master/game.js',
    'Mission2mars/games/tower_game-master/index.js'
    // Add more game-related files here
];

// Install event to cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                return cache.addAll(assetsToCache);
            })
    );
});

// Fetch event to serve cached files when offline
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((cachedResponse) => {
                if (cachedResponse) {
                    return cachedResponse;
                }
                return fetch(event.request);
            })
    );
});

// Activate event to clean up old caches
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => {
                return Promise.all(
                    cacheNames.map((cacheName) => {
                        if (!cacheWhitelist.includes(cacheName)) {
                            return caches.delete(cacheName);
                        }
                    })
                );
            })
    );
});
