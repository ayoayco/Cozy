import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import serviceWorker from "@ayco/astro-sw";
import {logInfo} from './src/utils/logger';

import {VERSION} from './src/consts';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://cozy.ayco.io/",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [
    mdx(),
    sitemap(),
    serviceWorker({
      path: "./src/sw.mjs",
      assetCachePrefix: 'cozy-reader',
      assetCacheVersionID: VERSION,
      logAssets: true,
      esbuild: {
        minify: true,
      },
      registrationHooks: {
        afterRegistration: async () => {
          const registeredServiceWorkers = navigator.serviceWorker.getRegistrations();
          logInfo('Registered SWs', {data: registeredServiceWorkers});
        }
      }
    })
  ]
});
