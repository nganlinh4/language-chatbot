import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/language-chatbot/',  // Base path for GitHub Pages
  server: {
    port: 5173,
    hmr: false
  }
})
