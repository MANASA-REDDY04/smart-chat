import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    // this makes dev server fallback to index.html
    historyApiFallback: true,
  },
  preview: {
    // same for preview after build
    historyApiFallback: true,
  },
})
