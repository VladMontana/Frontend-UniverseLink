import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/links': 'http://localhost:8000',
      '/auth':  'http://localhost:8000',
    }
  }
})
