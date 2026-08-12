import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
      '@components': path.resolve(import.meta.dirname, './src/components'),
      '@features': path.resolve(import.meta.dirname, './src/features'),
      '@lib': path.resolve(import.meta.dirname, './src/lib'),
      '@store': path.resolve(import.meta.dirname, './src/store'),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000',
      '/ws-game': { target: 'http://localhost:3000', ws: true, rewrite: (path) => path.replace('/ws-game', '/ws') },
      '/ws-game-draw': { target: 'http://localhost:3000', ws: true, rewrite: (path) => path.replace('/ws-game-draw', '/ws-draw') },
    },
  },
})
