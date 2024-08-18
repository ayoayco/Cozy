import { logInfo } from './utils/logger'
/**
 * Note: @ayco/astro-sw integration injects variables `__prefix`, `__version`, & `__assets`
 * -- find usage in `astro.config.mjs` integrations
 * @see https://ayco.io/n/@ayco/astro-sw
 */
const cacheName = `${__prefix ?? 'app'}-v${__version + '-' + Date.now()}`
const forceLogging = true;

const addResourcesToCache = async (resources) => {
    const cache = await caches.open(cacheName);
    logInfo('adding resources to cache...', { force: !!forceLogging, context: 'cozy-sw', data: resources })
    await cache.addAll(resources);
};

const putInCache = async (request, response) => {
    const cache = await caches.open(cacheName);
    logInfo('adding one response to cache...', { force: forceLogging, context: 'cozy-sw', data: request.url })
    // if exists, replace

    const keys = await cache.keys();
    if (keys.includes(request)) {
        cache.delete(request);
    }

    await cache.put(request, response);
};


const cacheAndRevalidate = async ({ request, preloadResponsePromise, fallbackUrl }) => {

    const cache = await caches.open(cacheName);

    // Try get the resource from the cache
    const responseFromCache = await cache.match(request);
    try {
        // get network response for revalidation of stale assets
        const responseFromNetwork = await fetch(request.clone());
        if (responseFromNetwork) {
            logInfo('updated cached resource...', { force: forceLogging, context: 'cozy-sw', data: responseFromNetwork.url })
            putInCache(request, responseFromNetwork.clone());
        }

        if (responseFromCache) {
            logInfo('using cached response...', { force: forceLogging, context: 'cozy-sw', data: responseFromCache.url })
            return responseFromCache;
        } else {
            logInfo('using network response...', { force: forceLogging, context: 'cozy-sw', data: responseFromNetwork.url })
            return responseFromNetwork;
        }
    } catch (error) {
        logInfo('failed to fetch updated resource', { force: forceLogging, context: 'cozy-sw', data: request.url })
        if (responseFromCache) {
            logInfo('using cached response', { force: forceLogging, context: 'cozy-sw', data: responseFromCache.url })
            return responseFromCache;
        }
    }

    // Try to use the preloaded response, if it's there
    // NOTE: Chrome throws errors regarding preloadResponse, see:
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1420515
    // https://github.com/mdn/dom-examples/issues/145
    // To avoid those errors, remove or comment out this block of preloadResponse
    // code along with enableNavigationPreload() and the "activate" listener.
    const preloadResponse = await preloadResponsePromise;
    if (preloadResponse) {
        putInCache(request, preloadResponse.clone());
        logInfo('using preload response', { force: forceLogging, context: 'cozy-sw', data: preloadResponse.url })
        return preloadResponse;
    }

    try {
        // Try to get the resource from the network for 5 seconds
        const responseFromNetwork = await fetch(request.clone(), { signal: AbortSignal.timeout(5000) });
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        putInCache(request, responseFromNetwork.clone());
        logInfo('using network response', { force: forceLogging, context: 'cozy-sw', data: responseFromNetwork.url })
        return responseFromNetwork;

    } catch (error) {

        // Try the fallback
        const fallbackResponse = await cache.match(fallbackUrl);
        if (fallbackResponse) {
            logInfo('using fallback cached response...', { force: forceLogging, context: 'cozy-sw', data: fallbackResponse.url })
            return fallbackResponse;
        }

        // when even the fallback response is not available,
        // there is nothing we can do, but we must always
        // return a Response object
        return new Response('Network error happened', {
            status: 408,
            headers: { 'Content-Type': 'text/plain' },
        });
    }
};

const enableNavigationPreload = async () => {
    if (self.registration.navigationPreload) {
        // Enable navigation preloads!
        await self.registration.navigationPreload.enable();
    }
};

self.addEventListener('activate', (event) => {
    logInfo('activating service worker...', { force: forceLogging, context: 'cozy-sw' })
    event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
    logInfo('installing service worker...', { force: forceLogging, context: 'cozy-sw' })
    event.waitUntil(
        addResourcesToCache(__assets ?? [])
    );
    self.skipWaiting(); // activate updated SW
});

self.addEventListener('fetch', (event) => {
    // ... else, use network first
    event.respondWith(
        cacheAndRevalidate({
            request: event.request,
            preloadResponsePromise: event.preloadResponse,
            fallbackUrl: './',
        })
    );
});
