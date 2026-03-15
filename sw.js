self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  // מאפשר לאפליקציה לעבוד גם בחיבור איטי
  e.respondWith(fetch(e.request));
});
