import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import serviceWorker from "@ayco/astro-sw";

import {VERSION} from './src/consts';

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [
    mdx(),
    sitemap(),
    serviceWorker({
      path: "./src/sw.js",
      assetCachePrefix: 'cozy-reader',
      assetCacheVersionID: VERSION
    })
  ]
});