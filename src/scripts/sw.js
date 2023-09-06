self.addEventListener("install", (event) => {
  console.log("installing service worker");
});

self.addEventListener("activate", (event) => {
  console.log("service worker activated");
});

self.addEventListener("fetch", (event) => {
  console.log(event.request);

  event.respondWith(fetch(event.request));
  // TODO: Add/get fetch request to/from caches
});
