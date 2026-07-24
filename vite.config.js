import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

export default defineConfig({
  root: resolve(__dirname, 'pass-src'),
  base: './',
  publicDir: false,
  plugins: [react()],
  assetsInclude: ['**/*.glb'],
  build: {
    outDir: resolve(__dirname, 'frontend/pass'),
    emptyOutDir: true,
    target: 'es2022',
    sourcemap: false
  }
});
