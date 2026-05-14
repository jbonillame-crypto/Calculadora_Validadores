// Nombre del caché (puedes cambiarlo si actualizas la app)
const CACHE_NAME = 'v1_calculadora_validadores';

// Archivos que se guardarán para que la app funcione sin internet
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.tailwindcss.com'
];

// Instalación del Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Estrategia de carga: primero busca en caché, si no hay, busca en internet
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});