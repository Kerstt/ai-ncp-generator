import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  base: './', // 👈 ensures assets use relative paths (important for shared hosting)
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '~': path.resolve(__dirname, './'),
    },
  },
  optimizeDeps: {
    include: ['vue'],
  },
  build: {
    sourcemap: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['lucide-vue-next', 'reka-ui'],
          utils: ['axios', '@supabase/supabase-js'],
          document: ['docx', 'jspdf', 'jspdf-autotable', 'xlsx'],
        },
      },
    },
  },
})
