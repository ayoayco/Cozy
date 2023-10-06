import { defineConfig } from "astro/config";
import vercel from '@astrojs/vercel/serverless';
import prefetch from "@astrojs/prefetch";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [prefetch()],
  adapter: vercel()
});