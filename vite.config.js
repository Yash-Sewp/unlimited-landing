import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
  },
  server: {
    port: 3000,
  },
  preview: {
    allowedHosts: ['python-html-generator.onrender.com'],
  },
})
