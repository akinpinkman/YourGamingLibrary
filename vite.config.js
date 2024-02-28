import { defineConfig } from 'vite'
import { createProxy } from 'vite-plugin-proxy'

export default defineConfig({
  plugins: [
    createProxy({
      '/api': {
        target: 'https://api.igdb.com/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api/v4')
      }
    })
  ]
})
