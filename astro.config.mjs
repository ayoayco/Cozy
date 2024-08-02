import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import { randomUUID } from "node:crypto";
import serviceWorker from "./src/plugins/astro-sw.ts";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [
    serviceWorker({
      assetCacheVersionID: randomUUID(),
      serviceWorkerPath: './src/utils/sw.js'
    })
  ]
});