import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/NeoFlex/',
  plugins: [react(), tsconfigPaths()],

  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/app/styles/_index.scss";`
      }
    }
  },
})
