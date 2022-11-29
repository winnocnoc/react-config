import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mixPlugin from 'vite-plugin-mix';
import dynamicImport from 'vite-plugin-dynamic-import';

const mix = (mixPlugin as any).default;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      dynamicImport(),
      mode === 'development' &&
        mix({
          handler: './src/mockServer.ts',
        }),
    ].filter(Boolean),
  };
});
