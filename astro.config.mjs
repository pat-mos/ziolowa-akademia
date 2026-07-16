import { defineConfig } from 'astro/config';

// Konfiguracja Astro.
// - `site`: wpisz tu docelowy adres strony (przyda się do SEO / sitemap).
// - Build tworzy statyczne pliki w folderze `dist/`, które wgrywasz na hosting FTP.
export default defineConfig({
  site: 'https://twoja-domena.pl',
});
