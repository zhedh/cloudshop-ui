import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import typescript from '@rollup/plugin-typescript'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    typescript({
      target: 'es5',
      rootDir: path.resolve(__dirname, 'packages/'),
      declaration: true,
      declarationDir: path.resolve(__dirname, 'lib'),
      exclude: path.resolve(__dirname, 'node_modules/**'),
      allowImportingTsExtensions: false,
    }),
  ],

  server: {
    port: 8000,
  },
  resolve: {
    alias: {
      'retail-ui': path.resolve(__dirname, 'lib/retail-ui.js'),
    },
  },

  build: {
    outDir: 'lib',
    cssTarget: 'chrome61',
    lib: {
      entry: 'packages/index.ts',
      name: 'RetailUI',
      fileName: 'retail-ui',
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react', 'react-dom', 'antd'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'react',
          'react-dom': 'react-dom',
          antd: 'antd',
          // styled: 'styled-components',
        },
      },
    },
  },
})
