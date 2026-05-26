// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Configuration officielle du site Cena a Palazzo
// Domaine de production : cenapalazzo.com
// Internationalisation native d'Astro : FR par défaut, IT et EN secondaires.
export default defineConfig({
  site: 'https://cenapalazzo.com',
  output: 'static',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'it', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      it: 'fr',
      en: 'fr',
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap({
      i18n: {
        defaultLocale: 'fr',
        locales: {
          fr: 'fr',
          it: 'it',
          en: 'en',
        },
      },
    }),
  ],
});
