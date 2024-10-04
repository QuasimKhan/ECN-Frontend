import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({

  proxy: {
    '/api': {
      target: 'https://ecn-backend.onrender.com',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, ''),
    },
  },

  
  
  plugins: [react()],
})
