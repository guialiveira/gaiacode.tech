import { readFile, writeFile } from 'node:fs/promises'
import { createServer } from 'vite'

// Reuse Vite's TSX transforms without a runtime server or new dependencies.
const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { renderPage, renderSeoHead, seoPages, siteUrl } = await vite.ssrLoadModule('/src/entry-server.tsx')
  const template = await readFile('dist/index.html', 'utf8')
  for (const path of Object.keys(seoPages)) {
    const html = template
      .replace(/<!--seo:start-->[\s\S]*?<!--seo:end-->/, () => renderSeoHead(path))
      .replace('<div id="root"></div>', () => `<div id="root">${renderPage(path)}</div>`)
    await writeFile(`dist/${path === '/' ? 'index' : path.slice(1)}.html`, html)
    console.log(`HTML pré-renderizado: ${path}`)
  }
  const urls = Object.keys(seoPages).map((path) => `<url><loc>${siteUrl}${path}</loc></url>`)
  await writeFile('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.join('')}</urlset>\n`)
  await writeFile('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
} finally {
  await vite.close()
}
