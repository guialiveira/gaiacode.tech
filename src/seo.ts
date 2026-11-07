import { isEnglish, languagePath } from './language.ts'

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
  '/en': {
    title: 'Software development and IT support | gaiacode',
    description: 'Custom software development, IT support, infrastructure and computer maintenance. Explore gaiacode’s solutions for your business.',
    name: 'Home',
  },
  '/en/services': {
    title: 'Software, IT infrastructure and computer maintenance | gaiacode',
    description: 'Technical support, networks, Wi-Fi, backups, computer and laptop maintenance, custom software and automation for businesses. Talk to gaiacode.',
    name: 'Services',
  },
  '/en/projects': {
    title: 'Software development and integration projects | gaiacode',
    description: 'Explore gaiacode’s technical experience in enterprise systems, integrations and automation across insurance, energy and the public sector.',
    name: 'Projects',
  },
  '/en/contact': {
    title: 'Contact us for software development and IT support | gaiacode',
    description: 'Need custom software, IT support or computer maintenance? Email atendimento@gaiacode.tech or talk to a gaiacode consultant on WhatsApp.',
    name: 'Contact',
  },
}

export type SeoPath = keyof typeof seoPages

export function getSeo(path: string) {
  const normalized = path.replace(/\/+$/, '') || '/'
  const page = seoPages[normalized as SeoPath]
  const en = isEnglish(normalized)
  const lang = en ? 'en' : 'pt-BR'
  const alternates = [
    { lang: 'pt-BR', href: `${siteUrl}${languagePath(normalized, false)}` },
    { lang: 'en', href: `${siteUrl}${languagePath(normalized, true)}` },
    { lang: 'x-default', href: `${siteUrl}${languagePath(normalized, false)}` },
  ]
  if (!page) throw new Error(`Página sem configuração de SEO: ${path}`)
  const url = `${siteUrl}${normalized === '/' ? '/' : normalized}`
  const image = `${siteUrl}/assets/gaiacode-hero.png`
  const meta = [
    { key: 'description', content: page.description },
    { key: 'og:type', content: 'website' },
    { key: 'og:site_name', content: 'gaiacode' },
    { key: 'og:locale', content: en ? 'en_US' : 'pt_BR' },
    { key: 'og:title', content: page.title },
    { key: 'og:description', content: page.description },
    { key: 'og:url', content: url },
    { key: 'og:image', content: image },
    { key: 'og:image:alt', content: en ? 'gaiacode — software development and IT support' : 'gaiacode — desenvolvimento de sistemas e suporte de TI' },
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
        name: 'gaiacode', inLanguage: ['pt-BR', 'en'],
        publisher: { '@id': `${siteUrl}/#organization` },
      },
      {
        '@type': normalized === '/contato' || normalized === '/en/contact' ? 'ContactPage' : 'WebPage',
        '@id': `${url}#webpage`, url, name: page.title, description: page.description,
        inLanguage: lang, isPartOf: { '@id': `${siteUrl}/#website` },
      },
    ],
  }
  return { ...page, url, meta, schema, lang, alternates }
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
    ${seo.alternates.map(({ lang, href }) => `<link rel="alternate" hreflang="${lang}" href="${href}" />`).join('\n    ')}
    ${seo.meta.map(({ key, content }) => `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escapeHtml(content)}" />`).join('\n    ')}
    <script id="site-schema" type="application/ld+json">${JSON.stringify(seo.schema).replaceAll('<', '\\u003c')}</script>
    <!--seo:end-->`
}
