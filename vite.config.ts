import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { renderSeoHead, seoPages } from './src/seo.ts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), {
    name: 'site-seo',
    transformIndexHtml(html, context) {
      const path = context.path.replace(/\/+$/, '') || '/'
      return html.replace('<!--seo-head-->', renderSeoHead(path in seoPages ? path : '/'))
    },
  }],
})
