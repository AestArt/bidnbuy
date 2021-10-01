/* eslint-disable no-restricted-globals */
const filesToCache = [
  './',
  'css/vendor/animate.min.css',
  'css/vendor/bootstrap.min.css',
  'css/vendor/bootstrap.min.css.map',
  'css/app.css',
  'css/app.min.css',
  'css/font.css',
  'css/font.min.css',
  'css/main.css',
  'css/main.min.css',
  'images/already-a-winner-your-testimony-can-get-you-even-more-wins.png',
  'images/banner_1.png',
  'images/banner_2.png',
  'images/banner_3.png',
  'images/banner_4.png',
  'images/banner3.png',
  'images/ella33-is-our-big-winner-of-the-week.png',
  'images/favicon.png',
  'images/have-you-met-our-super-hot-deals-of-the-week.png',
  'images/just-like-the-name-it-has-everything-in-one-place.png',
  'images/logo-stacked.png',
  'images/logo-success.png',
  'images/logo-white.png',
  'images/logo16.png',
  'images/logo32.png',
  'images/logo64.png',
  'images/logo128.png',
  'images/logo192.png',
  'images/logo512.png',
  'images/pattern2.png',
  'images/refer-a-friend-and-get-more-free-bids.png',
  'images/we-have-got-an-update-on-win-limits.png',
  'images/who-wants-free-bids-theyre-waiting-for-you-to-come-get-them.png',
  'js/vendor/bootstrap.bundle.min.js',
  'js/vendor/bootstrap.bundle.min.js.map',
  'js/vendor/fontawesome.min.js',
  'js/vendor/free-v4-shims.min.js',
  'js/vendor/free.min.js',
  'js/vendor/plugins.min.js',
  'js/header.js',
  'js/header.min.js',
  'js/main.js',
  'js/main.min.js',
  'js/store.js',
  'js/store.min.js',
  'js/toast.js',
  'js/toast.min.js',
  'js/utils.js',
  'js/utils.min.js'
];
const vNum = Math.floor(Math.random() * 1000000000000) + 1;
const staticCacheName = `canada-cache-v${vNum}`;

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(staticCacheName).then((cache) => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [staticCacheName];

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map(
          (cN) => cacheWhitelist.indexOf(cN) === -1 && caches.delete(cN)
        )
      );
    })
  );
});
