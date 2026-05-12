// SERVICE WORKER AbracadaParc RH
// Auto-update : à chaque nouveau déploiement, force le reload de tous les onglets.
// Network-first sur le HTML : on cherche TOUJOURS la dernière version, le cache n'est qu'un fallback.
// Version : 1.0 — 10/05/2026

const SW_VERSION = '1.0.0';
const HTML_CACHE = 'rh-html-' + SW_VERSION;

self.addEventListener('install', event => {
  console.log('[SW] install version', SW_VERSION);
  self.skipWaiting(); // activer immédiatement la nouvelle version
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    console.log('[SW] activate version', SW_VERSION);
    // Nettoyer les anciens caches
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== HTML_CACHE).map(k => caches.delete(k)));
    // Prendre contrôle de tous les onglets ouverts immédiatement
    await self.clients.claim();
    // Notifier tous les onglets ouverts qu'une nouvelle version est active
    const clients = await self.clients.matchAll({ type: 'window' });
    clients.forEach(c => c.postMessage({ type: 'sw-updated', version: SW_VERSION }));
  })());
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);
  // Network-first pour HTML et JS (toujours chercher la dernière version)
  // Cache-first pour les assets externes (CDN Firebase, fonts, etc.)
  if (url.origin === self.location.origin) {
    // Fichiers du domaine GitHub Pages → network-first
    event.respondWith(
      fetch(event.request, { cache: 'no-store' })
        .then(resp => {
          // Mettre en cache la réponse pour fallback offline
          if (resp.ok && (url.pathname === '/' || url.pathname.endsWith('/') || url.pathname.endsWith('.html') || url.pathname.endsWith('.js') || url.pathname.endsWith('.css'))) {
            const respClone = resp.clone();
            caches.open(HTML_CACHE).then(cache => cache.put(event.request, respClone));
          }
          return resp;
        })
        .catch(() => caches.match(event.request))
    );
  }
  // Pour CDN externes : comportement par défaut (cache navigateur)
});

// Écouter les messages depuis le code de la page (ex. force update)
self.addEventListener('message', event => {
  if (event.data === 'skip-waiting') self.skipWaiting();
});
