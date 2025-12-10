import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// export default defineConfig(({ command, mode }) => ({
//   plugins: [react()],
//   base: mode === 'gh' ? './' : '/', 
//    // base: command === 'build' ? './' : '/',
// }))

export default defineConfig(() => ({
  plugins: [react()],
}))
