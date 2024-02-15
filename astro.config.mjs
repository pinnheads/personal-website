import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true
  },
  integrations: [tailwind()],
  output: "server",
  adapter: cloudflare({
    routes: {
      strategy: 'include',
      include: ['/resume/*.json', '/flags/*.json'], // handled by custom function: functions/resume/[id].json.js and functions/flags/[id].json.js
      exclude: [], // handled by static page
    },
  })
});