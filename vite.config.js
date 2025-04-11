import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [
    react()
  ],
  base: '/', // Using only root base path for both dev and prod
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  }, // End of build block
  server: {
    hmr: {
      protocol: 'ws', // Explicitly set protocol
      host: 'localhost', // Explicitly set host
      port: 5173, // Explicitly set HMR port to match the server
      // path: '/' // Let Vite handle the path based on base/host/port
    }
  }
})) // End of returned object
