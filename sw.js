const CACHE_NAME = 'pet-health-v1';
const ASSETS = [
  'index.html',
  'manifest.json',
  '貓貓.PNG', // 將您的背景圖加入快取
  'bg.jpg', // 同時加入備用背景圖
  'https://cdn.tailwindcss.com',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
