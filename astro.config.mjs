import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import serviceWorker from "./src/plugins/astro-sw.ts";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [
    serviceWorker({
      assetCachePrefix: 'cozy-reader',
      serviceWorkerPath: './src/utils/sw.js'
    })
  ]
});