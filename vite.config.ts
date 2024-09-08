import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'Classed',
      fileName: 'main'
    }
  },
  plugins: [
    dts({ include: 'lib' })
  ]
})
