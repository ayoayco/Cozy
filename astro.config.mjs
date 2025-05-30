// @ts-check
import { defineConfig } from 'astro/config'
import node from '@astrojs/node'
import sitemap from '@astrojs/sitemap'
import serviceWorker from '@ayco/astro-sw'

import { VERSION } from './src/consts'

export default defineConfig({
  output: 'static',
  site: 'https://cozy.pub/',
  adapter: node({
    mode: 'middleware',
  }),
  vite: {
    server: {
      fs: {
        strict: false,
      },
    },
  },
  integrations: [
    sitemap(),
    serviceWorker({
      path: './src/sw.mjs',
      assetCachePrefix: 'cozy-reader',
      assetCacheVersionID: VERSION,
      logAssets: true,
      esbuild: {
        minify: true,
      },
    }),
  ],
})
