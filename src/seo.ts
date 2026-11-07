export const siteUrl = 'https://gaiacode.tech'

export const seoPages = {
  '/': {
    title: 'Desenvolvimento de sistemas e suporte de TI | gaiacode',
    description: 'Desenvolvimento de sistemas, suporte de TI, infraestrutura e manutenção de computadores. Conheça as soluções da gaiacode para sua empresa.',
    name: 'Início',
  },
  '/servicos': {
    title: 'Sistemas, infraestrutura e manutenção de computadores | gaiacode',
    description: 'Suporte técnico, redes e Wi-Fi, backup, manutenção de computadores e notebooks, sistemas sob medida e automações para empresas. Fale com a gaiacode.',
    name: 'Serviços',
  },
  '/cases': {
    title: 'Cases de desenvolvimento de sistemas e integrações | gaiacode',
    description: 'Conheça o repertório técnico da gaiacode em sistemas corporativos, integrações e automações nos setores de seguros, energia e setor público.',
    name: 'Cases',
  },
  '/contato': {
    title: 'Contato para sistemas e suporte de TI | gaiacode',
    description: 'Precisa de sistemas, suporte de TI ou manutenção de computadores? Fale com a gaiacode em atendimento@gaiacode.tech ou com um consultor pelo WhatsApp.',
    name: 'Contato',
  },
}

export type SeoPath = keyof typeof seoPages

export function getSeo(path: string) {
  const normalized = path.replace(/\/+$/, '') || '/'
  const page = seoPages[normalized as SeoPath]
  if (!page) throw new Error(`Página sem configuração de SEO: ${path}`)
  const url = `${siteUrl}${normalized === '/' ? '/' : normalized}`
  const image = `${siteUrl}/assets/gaiacode-hero.png`
  const meta = [
    { key: 'description', content: page.description },
    { key: 'og:type', content: 'website' },
    { key: 'og:site_name', content: 'gaiacode' },
    { key: 'og:locale', content: 'pt_BR' },
    { key: 'og:title', content: page.title },
    { key: 'og:description', content: page.description },
    { key: 'og:url', content: url },
    { key: 'og:image', content: image },
    { key: 'og:image:alt', content: 'gaiacode — desenvolvimento de sistemas e suporte de TI' },
    { key: 'twitter:card', content: 'summary_large_image' },
    { key: 'twitter:title', content: page.title },
    { key: 'twitter:description', content: page.description },
    { key: 'twitter:image', content: image },
  ]
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization', '@id': `${siteUrl}/#organization`,
        name: 'gaiacode', url: `${siteUrl}/`,
        email: 'atendimento@gaiacode.tech', telephone: '+55-62-99674-9356',
      },
      {
        '@type': 'WebSite', '@id': `${siteUrl}/#website`, url: `${siteUrl}/`,
        name: 'gaiacode', inLanguage: 'pt-BR',
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': normalized === '/contato' ? 'ContactPage' : 'WebPage',
        '@id': `${url}#webpage`, url, name: page.title, description: page.description,
        inLanguage: 'pt-BR', isPartOf: { '@id': `${siteUrl}/#website` },
      },
    ],
  }
  return { ...page, url, meta, schema }
}

function escapeHtml(value: string) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;').replaceAll('>', '&gt;')
}

export function renderSeoHead(path: string) {
  const seo = getSeo(path)
  return `<!--seo:start-->
    <title>${escapeHtml(seo.title)}</title>
    <link rel="canonical" href="${seo.url}" />
    ${seo.meta.map(({ key, content }) => `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escapeHtml(content)}" />`).join('\n    ')}
    <script id="site-schema" type="application/ld+json">${JSON.stringify(seo.schema).replaceAll('<', '\\u003c')}</script>
    <!--seo:end-->`
}
