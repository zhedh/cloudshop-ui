import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkGfm from 'remark-gfm'

const options = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [],
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), { enforce: 'pre', ...mdx(options) }],
  server: {
    host: '0.0.0.0',
  },
})
