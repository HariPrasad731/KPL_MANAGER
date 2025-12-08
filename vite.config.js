import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // In dev use "/", in build (for GitHub Pages) use "/KPL_MANAGER/"
  base: command === 'build' ? '/KPL_MANAGER/' : '/',
}))
