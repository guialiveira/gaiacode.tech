import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

const paths = ['/', '/servicos', '/cases', '/contato', '/en', '/en/services', '/en/projects', '/en/contact']
const titles = new Set()
const descriptions = new Set()
const sitemap = await readFile('dist/sitemap.xml', 'utf8')
const robots = await readFile('dist/robots.txt', 'utf8')
assert.ok(robots.includes('Sitemap: https://gaiacode.tech/sitemap.xml'))

for (const path of paths) {
  const html = await readFile(`dist/${path === '/' ? 'index' : path.slice(1)}.html`, 'utf8')
  const title = html.match(/<title>([^<]+)<\/title>/)?.[1]
  const description = html.match(/name="description" content="([^"]+)"/)?.[1]
  assert.ok(title && description, `${path}: título e descrição obrigatórios`)
  assert.equal((html.match(/<title>/g) || []).length, 1)
  assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${path}: um único H1`)
  assert.ok(!titles.has(title), `${path}: título exclusivo`)
  assert.ok(!descriptions.has(description), `${path}: descrição exclusiva`)
  titles.add(title)
  descriptions.add(description)
  assert.ok(html.includes(`<link rel="canonical" href="https://gaiacode.tech${path}"`))
  assert.ok(html.includes(`property="og:url" content="https://gaiacode.tech${path}"`))
  assert.ok(html.includes('name="twitter:card" content="summary_large_image"'))
  assert.ok(sitemap.includes(`<loc>https://gaiacode.tech${path}</loc>`))
  const schema = JSON.parse(html.match(/<script id="site-schema" type="application\/ld\+json">([\s\S]*?)<\/script>/)[1])
  assert.ok(schema['@graph'].some((item) => item.url === `https://gaiacode.tech${path}`))
  assert.ok(html.includes('<main>'), `${path}: conteúdo disponível sem JavaScript`)
  assert.ok(html.includes(`<html lang="${path.startsWith('/en') ? 'en' : 'pt-BR'}">`))
  for (const lang of ['pt-BR', 'en', 'x-default']) {
    assert.ok(html.includes(`rel="alternate" hreflang="${lang}"`), `${path}: alternate ${lang}`)
  }
  if (path === '/en') assert.ok(html.includes('<h1>Software development and IT support</h1>'))
  if (path.startsWith('/en')) {
    for (const text of ['Fale conosco', 'Manutenção de computadores', 'Falar com um consultor', 'Próximos passos']) {
      assert.ok(!html.includes(`>${text}<`), `${path}: texto sem tradução: ${text}`)
    }
    assert.ok(html.includes('href="/en/contact"'))
  }
  if (path === '/') assert.ok(html.includes('<h1>Desenvolvimento de sistemas e suporte de TI</h1>'))
  if (path === '/servicos') {
    for (const text of ['Suporte técnico de TI', 'Infraestrutura de TI e redes', 'Manutenção de computadores e notebooks', 'Backup e proteção de dados', 'Computador lento ou travando?']) {
      assert.ok(html.includes(text), `Serviço ausente no HTML: ${text}`)
    }
  }
  console.log(`SEO e conteúdo estático OK: ${path}`)
}
