import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: process.env.NODE_ENV === 'production' ? 'https://github.com/CodeMaven22/ElementEdge_agency.git/' : '/',
})
// https://github.com/CodeMaven22/ElementEdge_agency.git