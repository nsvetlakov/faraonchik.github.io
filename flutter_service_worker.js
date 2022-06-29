'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "af53185e89991dacd146d26d21f83142",
"index.html": "35b0d38307f99e5c48b2aa3a58929ee1",
"/": "35b0d38307f99e5c48b2aa3a58929ee1",
"main.dart.js": "3249dac7652be491718ba89ad496ec61",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d27aba43a50f3db0eee66539f1faf293",
"assets/AssetManifest.json": "dc73571d7e062545146fdb15b32ef7ad",
"assets/NOTICES": "7f5e26e5761e2acd3905adffaf0a4acc",
"assets/FontManifest.json": "2226e979828c34e4c2636d268bb4692d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/logo_alpha.png": "4e67d6f9ccb61b1c86a831d249d1d975",
"assets/assets/images/test.gif": "d87a4376c66beef0078ebba0dd770c26",
"assets/assets/images/callStart.png": "04aaf05e2cd1c235a23e20d62af1ce65",
"assets/assets/images/ger.png": "37a915783f3612d07822b0c4228d43fd",
"assets/assets/images/no_image.jpg": "cf38fec6649b0f4880fe6adc6e853e78",
"assets/assets/images/tab_profile.png": "438f1926ff304dcca01ada53e7db766a",
"assets/assets/images/lock.png": "5c6ad533203967bb107b4254886a53db",
"assets/assets/images/discuss.gif": "55b1a5d18278d482964eba85764a6225",
"assets/assets/images/avatar_noname_big.png": "0a3689c28d5f74d835e6b291e50d661d",
"assets/assets/images/testcover.jpg": "3badcac673becf74f4ecaf711deb13cb",
"assets/assets/images/logout.png": "22f112581c1f9057b7ddbd9d32014203",
"assets/assets/images/tab_favorite.png": "eaaf6196853a2ff62eb41368e7475d63",
"assets/assets/images/quick_meetings_img.png": "e831a3f5767d87fd54055cfc9323cced",
"assets/assets/images/ru.png": "b8dc9e83851e3347faf6d3086594be02",
"assets/assets/images/girl.jpg": "c003a3a3888e9c4d0a13d2fc8c8a9136",
"assets/assets/images/eng.png": "b47a69935763e79c2c19b586c6422724",
"assets/assets/images/uncheckbox.png": "540ce12dfd0652a973f438925eec6c80",
"assets/assets/images/saved.png": "358e228028e844a29aa521a4907bafe8",
"assets/assets/images/croa.png": "f35896e9150e6d395c37a1c615629edb",
"assets/assets/images/heart.png": "890766e1e734735deefa47095022bfee",
"assets/assets/images/chart_empty.png": "c21012ee07f19e41089d2e26e53b5745",
"assets/assets/images/date.png": "a97f8cf73a9a2fd82af5e1a49788ad23",
"assets/assets/images/bookmark.png": "127232068277d6b8de704eae66f263a9",
"assets/assets/images/placeholder_bg.jpeg": "88425cff1e09383a78b8cf6b7633576d",
"assets/assets/images/testmen.jpg": "e0842ab2dd9ae65055690a29f732750e",
"assets/assets/images/quote.png": "cb843524742401a057baecf9eeecc5ad",
"assets/assets/images/portu.png": "84252c70c34cbbd9b3612cdc5aebfb6e",
"assets/assets/images/logo.png": "fa01743cd5c365eca7e2377689b4d04a",
"assets/assets/images/empty_avatar.png": "01e33aa0d41231a206a09e094fb22bd2",
"assets/assets/images/star.svg": "112834fc2a7e577eaf98a9a3693d9042",
"assets/assets/images/demo1.gif": "ca99f6a79a2368ec422da94a2df2e51b",
"assets/assets/images/demo2.gif": "0ab78a86d6438e45cfd9a51fb5c40673",
"assets/assets/images/clock.svg": "d446383111b0b06417551d2aba0aef83",
"assets/assets/images/noimg.png": "66cc50c5259eb282cb5fc2d9833cee5a",
"assets/assets/images/checkbox.png": "4b6e1e471957b3d6aa3206e7d7b517c5",
"assets/assets/images/testfeed.png": "3ab235792c40de2616b9b7d094fae6d0",
"assets/assets/images/avatar_noname_around.png": "116cfaf5d26a3e14c1ed81bef04e50e6",
"assets/assets/images/chat.png": "ae5cc800f8626f0c3af1b29602eccb23",
"assets/assets/images/plan_vacation_img.png": "10a59eeb6963012a9485bb99bc15329f",
"assets/assets/images/tab_saved.png": "c8826e30eab096cbde5b3d6ce4de1584",
"assets/assets/images/redheart.png": "b2f72357ebeb013f2843972a3036d46e",
"assets/assets/images/halfnoimg.png": "4565c0d3c124fc87bee19cae8d1cb03c",
"assets/assets/images/create_event_img.png": "f691b21384a369be79f7eded5c486454",
"assets/assets/images/noname.png": "56d2165b145b959168f0da09892bc9a0",
"assets/assets/preloader.json": "3eb0669cf281762a36942dc5419e381f",
"assets/assets/audio/ring.mp3": "5de2e6e858de950f0b04bbbc993c0006",
"assets/assets/fonts/Inter-Medium.ttf": "5ff1f2a9a78730d7d0c309320ff3c9c7",
"assets/assets/fonts/App20Icons.ttf": "82ae7f3d9d14194870317865efc09103",
"assets/assets/fonts/App30Icons.ttf": "5e03d71cfb982f3bd6b96dd483abceff",
"assets/assets/fonts/Inter-Bold.ttf": "91e5aee8f44952c0c14475c910c89bb8",
"assets/assets/fonts/App12Icons.ttf": "f51521f5c6b5ef8cc186723ece4fd7b0",
"assets/assets/fonts/Inter-Regular.ttf": "515cae74eee4925d56e6ac70c25fc0f6",
"assets/assets/fonts/App16Icons.ttf": "f5c1c5e3d2af8d5115bb4ae977f74be5",
"assets/assets/fonts/App24Icons.ttf": "2eb9099566d57ce21a787e304e90cfe9",
"assets/assets/fonts/Inter-SemiBold.ttf": "ec60b23f3405050f546f4765a9e90fec",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
