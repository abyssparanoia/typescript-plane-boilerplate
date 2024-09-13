import { defineConfig } from 'tsup'

export default defineConfig(options => ({
  entry: {
    index: './src/index.ts'
  },
  format: ['esm', 'cjs'],
  dts: false,
  clean: !options.watch,
  treeshake: true,
  splitting: true
}))
