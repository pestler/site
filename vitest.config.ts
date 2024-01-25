/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react(), stubAssetImport()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      Styles: path.resolve(__dirname, 'src/app/styles')
    }
  },
  test: {
    environment: 'jsdom',
    setupFiles: ['src/__tests__/setup-tests.ts'],
    coverage: {
      provider: 'v8',
      thresholds: {
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80
      }
    }
  }
});

function stubAssetImport() {
  return {
    name: 'stub-asset-import',
    transform(_code: string, id: string) {
      if (id.endsWith('.svg') || id.endsWith('.png')) {
        return `export default 'mocked-image-path'`;
      }
    }
  };
}
