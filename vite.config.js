import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // Alias "@" → carpeta src (Paso 2: rutas limpias)
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    modules: {
      // Muestra Componente_clase__hash para evidenciar el hashing de CSS Modules
      generateScopedName: '[name]_[local]__[hash:base64:5]',
    },
  },
})
