import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import md from './vite-plugin/md'

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [react(), md()],
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
})
