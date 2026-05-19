import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://sreearpita.github.io',
  devToolbar: {
    enabled: false,
  },
  vite: {
    build: {
      chunkSizeWarningLimit: 650,
    },
  },
});
