import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import cozyBuild from "./src/plugins/cozy-build.ts";

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