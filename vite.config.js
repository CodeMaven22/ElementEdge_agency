import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/ElementEdge_agency/', // Match your repository name
})
// https://github.com/CodeMaven22/ElementEdge_agency.git