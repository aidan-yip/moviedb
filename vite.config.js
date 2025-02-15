import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/Pop_Movies/',
  build: {
    outDir: 'Pop_Movies'
  },
  plugins: [react()],
})
