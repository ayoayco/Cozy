import { defineConfig } from "astro/config";
import netlify from "@astrojs/netlify/functions";

import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: netlify(),
  integrations: [prefetch()]
});