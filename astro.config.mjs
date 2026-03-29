import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import cloudflare from '@astrojs/cloudflare';

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3001
  },
  integrations: [tailwind(), icon()],
  output: "server",
  adapter: cloudflare()
});
