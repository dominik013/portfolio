import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL || 'https://reichinger.dev',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false },
});
