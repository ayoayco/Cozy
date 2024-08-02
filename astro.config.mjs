import { defineConfig } from "astro/config";

import node from "@astrojs/node";
import { readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';

let assets = []

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [
    {
      'name': 'astro-cozy-build',
      'hooks': {
        'astro:build:ssr': (options) => {
          assets = options.manifest.assets.filter(ass => !ass.includes('sw.js'))
          console.log('build-cozy', assets)
        },
        'astro:build:done': async ({dir}) => {
          const outFile = fileURLToPath(new URL('./sw.js', dir));
          const originalScript = await readFile(outFile);
          await writeFile(outFile, 'const assets = ' + JSON.stringify(assets) + ';' + originalScript);
        }
      }
    }
  ]
});