import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import history from 'connect-history-api-fallback'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  server: {
    middlewareMode: false,
    setupMiddlewares(middlewares, devServer) {
      middlewares.use(
        history({
          disableDotRule: true,
          htmlAcceptHeaders: ['text/html', 'application/xhtml+xml'],
        })
      )
      return middlewares
    },
  },
  preview: {
    port: 4173,
    open: true,
    middlewareMode: false,
  },
})
