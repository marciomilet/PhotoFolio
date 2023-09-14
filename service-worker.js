var cacheName = 'pwaTeste+-v1.0';

self.addEventListener('install', event => {

  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll([

        './index.html',

        './assets/css/main.css',

        './assets/img/profile.png',

        './assets/js/main.js',

        './assets/img/profile.png',

        './about.html',

        './assets/icons/120.png',
        './assets/icons/128.png',
        './assets/icons/144.png',
        './assets/icons/152.png',
        './assets/icons/167.png',
        './assets/icons/172.png',
        './assets/icons/180.png',
        './assets/icons/196.png',
        './assets/icons/216.png',
        './assets/icons/256.png',
        './assets/icons/512.png',

        './assets/'
       
        
      ]))
  );
});

self.addEventListener('message', function (event) {
  if (event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', function (event) {
  //Atualizacao internet
  event.respondWith(async function () {
    try {
      return await fetch(event.request);
    } catch (err) {
      return caches.match(event.request);
    }
  }());

  //Atualizacao cache
  /*event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );*/

});