import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://kiastorm.co.uk',
  integrations: [react(), mdx(), sitemap()],
  vite: {
    ssr: {
      noExternal: ['@radix-ui/themes']
    }
  }
});