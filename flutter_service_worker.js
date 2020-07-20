'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "3f54ab8b586a3dd7b5ada1a3355f0a1e",
"/": "3f54ab8b586a3dd7b5ada1a3355f0a1e",
"main.dart.js": "99d228ef552626ad691b8353d00c2532",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "5832f7ea51f8af3c01c395ff1cedbb17",
".git/config": "527d589db644eb12c73f783f37c19296",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/59/70ebbba992b08788176911bba60fe3027ed463": "2f4f7ef72bd715b5f9ef07d719f5732a",
".git/objects/3b/e010012a3b25903fac6081ef438d7832eec486": "049b6a7c92d6c719c5ab050c85e09945",
".git/objects/3b/0c74ae7307fed229807fd1c80e56559b1cae74": "8c3f0f9acc68814be4d7abc742d54c90",
".git/objects/02/aa9b961b00bdd16b7ca64bb3f59b4491a385af": "eb9b228408e3ded33f05577e8ded1ae4",
".git/objects/df/7d8f3f30e935427f156345435ad61a33c0ed04": "cbede45794500c4bcb6aaf21ca70b8e6",
".git/objects/a2/7c721fa3bb561352b2444b4b0631e8813c36d1": "59590d7c6f7aabf9c0090af406d4eb30",
".git/objects/bc/a693536921264a5b4624ba9f6fcb73d2ab5b30": "04bd1861ae3c8cee4def2f852e40c628",
".git/objects/f3/d10c7748b0eff41054fe2d01a7eb4d4f107cba": "b99450acbbfa54b0f31c2eac1df1c81a",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/42/5a7aebdc8184d3068bc3553f15e7f748e12a8d": "5eddb508159047002af6a66eae443c4b",
".git/objects/17/86386ea793dd74f48e7e8d467f144503c4dafa": "c8ba79e73d7fe9bcd18a68ab0a3d0c53",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/2adc0459c5f8ab6b8fec406b19244e1f16e1a7": "a0b2bfd13949eb5292ccaf1666d69ebd",
".git/objects/39/942ff3a962a533001d8617224656f754ebf45e": "84b2b7dca5c577c96ce10e8251882234",
".git/objects/99/c2bce547485b6fbfecb731e028aef1fab83bd7": "7a8f4b3a42dd18bf1b1bc724c363ea4b",
".git/objects/63/663e9a521993a3dfd4683518884b12232f7ae2": "34be2cc15815ffb1153858aa3c577d23",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/b1/c2d7bc3f9275dd1c27591fa1ddd0dffa93c222": "0fe17ccbca312301ad9e41035dc67fa5",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/af/b5b4881a2525c6eb08868d3861d87cb39b5451": "8857691f8ea4fcebe8620f1054ddf6aa",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/e9/adf85cb63337c56a468e7824ab99c6df620726": "876f9fa4f3597e3ee976a1b685114205",
".git/objects/2c/5bf47af768c4bd4adaffdf1f3fdc1efcd95537": "3b798610dad1c873f1d72d0995c7afcb",
".git/objects/2c/e3c9980dbfa241d0fe0fa11670d3957b714ee8": "2ec2cfaccbf26dbdae8dc6f20877f149",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/76/4c875d417e81c8a3ea1aa19b8f37a728bb29ff": "d55800ffb889db81600a3d81d16376a0",
".git/objects/78/7529fd71fd4b68cc43f124b0cac188cb5d52f3": "5827324e0f1fdf40e655458d78ff74f3",
".git/objects/8b/ee81d7e4a291e4bde51bceb880fd2d1d89b2df": "02ae767490fd1958d70e16546791163e",
".git/objects/25/620ec5b961b7f4e8a439dcdaa972438ab5d704": "0141d3aad9894f791604027a0e568b60",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "ac439e97e315b3cbab226fa05e234a6c",
".git/logs/refs/heads/master": "ac439e97e315b3cbab226fa05e234a6c",
".git/logs/refs/remotes/origin/master": "09e9c1d4ff3316f1f5cabb56c4cc7f4e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "5ed367530d22354f69e839b18ed694fb",
".git/refs/remotes/origin/master": "5ed367530d22354f69e839b18ed694fb",
".git/index": "56ef7fab00e5382e1a48a4ecbb6a7c0a",
".git/COMMIT_EDITMSG": "e151a332b124eedb803d16c463114574",
"assets/AssetManifest.json": "6ac64ca02af8ce5da83ba5271e7c6db0",
"assets/NOTICES": "cb8710d584f62800fb5e81a0fd74189e",
"assets/FontManifest.json": "3b88ded64dd599a6fd51214483163f4b",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "8d0d74fa070d25f1d57e29df18800b8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.data == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
