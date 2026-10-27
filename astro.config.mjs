// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import iconset from 'astro-iconset';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [iconset()],
  adapter: cloudflare()
});