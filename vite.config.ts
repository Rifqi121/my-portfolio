import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['react-scroll','swiper/react','swiper/modules','swiper/css']
  },
  build: {
    rollupOptions: {
      external: ['react-scroll','swiper/react','swiper/modules', 'swiper/css'],
    },
  },
})
