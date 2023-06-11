import React, { Suspense } from 'react';

self.addEventListener('install', event => {
  console.log('Installing [Service Worker]', event);

  event.waitUntil(
    caches.open('static')
      .then(cache => {
        console.log('[Service Worker] Precaching App Shell');
        cache.addAll([
          '/',
          '/index.html',
          // '/favicon.ico',
          // '/src/js/app.js',
          // '/src/js/chart.js',
          // '/src/js/materialize.js',
          // '/src/js/materialize.min.js',
          // '/src/css/materialize.css',
          // '/src/css/materialize.min.css',
          // '/src/css/style.css',
          // 'https://fonts.googleapis.com/icon?family=Material+Icons',
          // 'https://code.jquery.com/jquery-2.1.1.min.js',
          // 'https://cdn.jsdelivr.net/npm/chart.js@2.8.0'
        ]);
      }));
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(res => {
              return caches.open('dynamic')
                .then(cache => {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            });
        }
      })
    );
});