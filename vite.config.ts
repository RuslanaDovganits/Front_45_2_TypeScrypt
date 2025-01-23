
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Front_45_2_TypeScrypt/', // Это должен быть путь вашего проекта на GitHub Pages
});