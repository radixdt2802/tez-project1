
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'
  );
  workbox.routing.registerRoute(
    new RegExp('^https://d2ms8rpfqc4h24.cloudfront.net/'), 
   new workbox.strategies.CacheFirst({
      cacheName: 'assets-cache',
      cacheableResponse: {
        statuses: [0, 200], // Make sure 0 is included in this list.
      }
    })
  )
async function deleteCache(request,cacheResponse){
    const cache = await caches.open(getCacheName(request));
    const keys = await cache.keys();
  for(var key  of keys){
    var splitKey = key.url.split("?")[0];
    if(splitKey === request.url)
    {
      const result = await cache.delete(key);
          cacheResponse = undefined;
          break;
    }
  }
  return cacheResponse;
}
function getRequestHash(request){
    var key = request.url.replace(`${self.location.origin}`,"");
    var extension = request.url.split('.').pop()
    var hashKey = ""; 
    switch(extension){
        case "css":
            hashKey = assets.styles[key];
            break;
        case "js":
            hashKey = assets.scripts[key];
            break;
        case "json":
            hashKey = assets.json[key];
            break;
        default:
           hashKey = assets.html[key];
            break;
    }
    return hashKey
}
const carDealsCacheName = "carDealsCacheV1";
const cacheFirstStrategy = async (request) => {
    var hashKey = getRequestHash(request)
    var webKey = hashKey ? `?web_key=${hashKey}` : ``;
    var cacheKey = `${request.url}${webKey}`;
    var cacheResponse = await caches.match(`${request.url}${webKey}`);
    if(!cacheResponse){
      cacheResponse = await caches.match(cacheKey,{ignoreSearch:true});
      if(cacheResponse)
      cacheResponse = await deleteCache(request,cacheResponse)
    }else if(!hashKey)
      cacheResponse=  await deleteCache(request)
    return cacheResponse || fetchRequestAndCache(request,cacheKey,hashKey);
  };

const fetchRequestAndCache = async (request,cacheKey,isCache) => {
    const networkResponse = await fetch(request);
    const clonedResponse = networkResponse.clone();
    const cache = await caches.open(getCacheName(request));
    if(isCache){
      console.log(cacheKey)
        cache.put(cacheKey, networkResponse);
    }
        
    return clonedResponse;
  };
  const payloadCacheName = 'payload_v1';
  const assetsCacheName = "assets_v1"
  const getCacheName = (request) => {
    var extension = request.url.split('.').pop();
    if(extension === "json")
        return payloadCacheName;
    return assetsCacheName;
  };
  

self.addEventListener("message", (e) => {
    console.log(e)
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
})

self.addEventListener('install', async (event) => {
    var response  = await fetch('payload-data.json'); 
    var result = await response.json();
    assets.json = result;
    self.skipWaiting();
})
self.addEventListener("fetch",(event) => {
   return event.respondWith(cacheFirstStrategy(event.request));
});