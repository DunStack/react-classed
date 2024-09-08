import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  publicDir: false,
  build: {
    lib: {
      entry: './lib/main.ts',
      name: 'Classed',
      fileName: 'main'
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'JSX'
        }
      }
    }
  },
  plugins: [
    dts({ include: 'lib' })
  ]
})
