// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import iconset from 'astro-iconset';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [iconset()]
});