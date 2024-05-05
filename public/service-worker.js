
const staticCacheName = 'site-static-v1'
const dynamicCache = 'site-dynamic-v1'
//هنا بنخزن الينكات بس لو راح يعمل ريكويست للينك في البرنامج هيعدي علي اللينكات دي ويشوف هو منهم ولا لا يعني مثلا انا واخد لينك للفونت اسوم ممكن احطه هنا عادي

const assets = [
    "/",
    "/index.html",
    '/js/app.js',
    // '/css/styles.css',
    'img/logo.png',
    '/notfound'
];

const limitCacheSize = (name, size) => {
    caches.open(name).then(cache => {
        cache.keys().then(keys => {
            if (keys.length > size) {
                cache.delete(keys[0]).then(() => {
                    // After deletion, check again and limit the cache size
                    limitCacheSize(name, size);
                });
            }
        });
    });
};

//install service worker
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('Caching shell assets');
            cache.addAll(assets);
            // cache.add('img/logo.png')
            // cache.add('/')
            // cache.add('/index.html')
            // cache.add('/js/app.js')

        }).catch((err) => { console.log(err) })
    );
});
// activate event
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys)
            return Promise.all(keys
                .filter(key => key !== staticCacheName && key !== dynamicCache)
                .map(key => caches.delete(key)))
        })
    )
})

//fetch event
self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt)
    evt.respondWith(
        caches.match(evt.request).then(cacheRes => {
            return cacheRes || fetch(evt.request).then(fetchRes => {
                return caches.open(dynamicCache).then(cache => {
                    cache.put(evt.request.url, fetchRes.clone());
                    limitCacheSize(dynamicCache, 2)
                    return fetchRes
                })
            })
        }).catch(() => {
          
                return caches.match('/notfound')
            

        })
    )
})
