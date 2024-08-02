import { defineConfig } from "astro/config";
import cozyBuild from './plugins/cozy-build.ts';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: node({
    mode: "middleware"
  }),
  integrations: [
    cozyBuild()
  ]
});