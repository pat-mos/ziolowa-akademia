import { defineConfig } from 'astro/config';

// Statyczny build → folder `dist/` → Cloudflare Pages (bez adaptera Node).
//
// `site` — wpisz prawdziwą domenę PO zakupie / podpięciu (SEO, Open Graph).
// Przykład: 'https://ziolowa-akademia.pl'
export default defineConfig({
  site: 'https://twoja-domena.pl',
  trailingSlash: 'never',
});
