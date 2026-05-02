// MedAT Trainer – Service Worker
// WICHTIG: CACHE-Version hochzählen bei jedem Deployment mit Änderungen!
const CACHE = 'medat-v3';

const STATIC = [
  './',
  './index.html',
  './manifest.json',
];

const DATA = [
  './data_wortfluessigkeit.js',
  './data_zahlenfolgen.js',
  './data_wissen.js',
  './data_figuren.js',
  './data_flashcards.js',
];

// Install: cache alle Dateien
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll([...STATIC, ...DATA]))
  );
  self.skipWaiting();
});

// Activate: alten Cache sofort löschen
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch-Strategie:
// Datendateien → Network-first (Updates kommen sofort an)
// Alles andere  → Cache-first  (schnell, offline-fähig)
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isData = DATA.some(f => url.pathname.endsWith(f.replace('./', '/')));

  if (isData) {
    e.respondWith(
      fetch(e.request)
        .then(response => {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return response;
        })
        .catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(cached => cached || fetch(e.request))
    );
  }
});
