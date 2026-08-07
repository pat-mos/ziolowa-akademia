import { defineConfig } from 'astro/config';

// Statyczny build → folder `dist/` → Cloudflare Pages (bez adaptera Node).
export default defineConfig({
  site: 'https://ziolowaakademia.pl',
  trailingSlash: 'never',
});
