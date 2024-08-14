/**
 * Note: @ayco/astro-sw integration injects variables `__prefix`, `__version`, & `__assets`
 * -- find usage in `astro.config.mjs` integrations
 * @see https://ayco.io/n/@ayco/astro-sw
 */
const cacheName = `${__prefix ?? 'app'}-v${__version ?? '000'}`
const addResourcesToCache = async (resources) => {
    const cache = await caches.open(cacheName);
    console.log('[cozy-sw]: adding resources to cache...', resources)
    await cache.addAll(resources);
};

const putInCache = async (request, response) => {
    const cache = await caches.open(cacheName);
    console.log('[cozy-sw]: adding one response to cache...', request)
    await cache.put(request, response);
};

const tryCache = async (request, fallbackUrl) => {
    // Try get the resource from the cache
    const responseFromCache = await caches.match(request);
    if (responseFromCache) {
        console.info('[cozy-sw]: using cached response', responseFromCache);
        return responseFromCache;
    }

    // Try the fallback
    const fallbackResponse = await caches.match(fallbackUrl);
    if (fallbackResponse) {
        console.info('[cozy-sw]: using fallback cached response', fallbackResponse);
        return fallbackResponse;
    }
}

const networkFirst = async ({ request, preloadResponsePromise, fallbackUrl }) => {
    try {
        // Try to use the preloaded response, if it's there
        // NOTE: Chrome throws errors regarding preloadResponse, see:
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1420515
        // https://github.com/mdn/dom-examples/issues/145
        // To avoid those errors, remove or comment out this block of preloadResponse
        // code along with enableNavigationPreload() and the "activate" listener.
        const preloadResponse = await preloadResponsePromise;
        if (preloadResponse) {
            console.info('[cozy-sw]: using preload response', preloadResponse);
            putInCache(request, preloadResponse.clone());
            return preloadResponse;
        }


        // Next try to get the resource from the network
        const responseFromNetwork = await fetch(request.clone());
        // response may be used only once
        // we need to save clone to put one copy in cache
        // and serve second one
        if (responseFromNetwork) {
            putInCache(request, responseFromNetwork.clone());
            console.info('[cozy-sw]: using network response', responseFromNetwork);
            return responseFromNetwork;
        }

        return tryCache(request, fallbackUrl);
    } catch (error) {

        return tryCache(request, fallbackUrl);

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
    console.log('[cozy-sw]: activating...', event)
    event.waitUntil(enableNavigationPreload());
});

self.addEventListener('install', (event) => {
    console.log('[cozy-sw]: installing...', event)
    event.waitUntil(
        addResourcesToCache([
            './',
            ...(__assets ?? [])
        ])
    );
    self.skipWaiting(); // activate updated SW
});

self.addEventListener('fetch', (event) => {
    console.log('[cozy-sw]: fetch happened, trying network first', event.request)

    // ... else, use cache first
    event.respondWith(
        networkFirst({
            request: event.request,
            preloadResponsePromise: event.preloadResponse,
            fallbackUrl: './',
        })
    );
});