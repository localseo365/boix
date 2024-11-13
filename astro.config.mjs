import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://boix.vercel.app',
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },
});