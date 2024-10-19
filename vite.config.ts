import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main/index.html'),
        notFound: resolve(__dirname, 'src/404/index.html'),
      },
    },
  },
});
