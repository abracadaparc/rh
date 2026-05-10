import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// CONFIG : base path pour déploiement canary sur GitHub Pages
// → l'app est servie depuis https://abracadaparc.github.io/rh/v2/
// → quand on remplace l'ancienne app par la nouvelle, on changera base à '/rh/'
export default defineConfig({
  plugins: [react()],
  base: '/rh/v2/',
  build: {
    outDir: 'dist',
    sourcemap: true,
    target: 'es2020',
  },
})
