// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://api.igdb.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  },
  plugins: [react(), eslint()],
  define: {
    'process.env.VITE_REACT_APP_CLIENT_ID': JSON.stringify(process.env.VITE_REACT_APP_CLIENT_ID),
    'process.env.VITE_REACT_APP_AUTHORIZATION_TOKEN': JSON.stringify(
      process.env.VITE_REACT_APP_AUTHORIZATION_TOKEN
    )
  }
})
