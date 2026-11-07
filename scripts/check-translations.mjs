import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import ts from 'typescript'
import { createServer } from 'vite'

const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' })
try {
  const { english } = await vite.ssrLoadModule('/src/english.ts')
  const { preferredLanguage, languagePath } = await vite.ssrLoadModule('/src/language.ts')
  for (const language of ['en', 'en-US', 'en-GB', 'en-AU', 'en-CA']) assert.equal(preferredLanguage(null, [language]), 'en')
  for (const language of ['pt-BR', 'pt-PT', 'fr-FR', 'es-ES']) assert.equal(preferredLanguage(null, [language, 'en']), 'pt-BR')
  assert.equal(preferredLanguage('pt-BR', ['en-US']), 'pt-BR')
  assert.equal(preferredLanguage('en', ['pt-BR']), 'en')
  assert.equal(preferredLanguage(null, []), 'pt-BR')
  assert.equal(languagePath('/en/services/', false), '/servicos')
  assert.equal(languagePath('/contato', true), '/en/contact')
  const data = await vite.ssrLoadModule('/src/siteData.ts')
  const allowed = new Set(['gaiacode', 'Home', 'gc', '.NET', 'ASP.NET Core', 'React', 'TypeScript', 'SQL Server', 'PostgreSQL', 'Docker', 'Azure DevOps', 'AWS', 'OpenAI API', 'Shell / Raizen', 'Caixa Seguradora', 'Auvo Tecnologia', 'TCE-GO', 'Capgemini', 'FIEB', 'Havaianas', 'ANTT'])
  const phrases = new Set()
  function collect(value) {
    if (typeof value === 'string') phrases.add(value)
    else if (Array.isArray(value)) value.forEach(collect)
    else if (value && typeof value === 'object') Object.values(value).forEach(collect)
  }
  Object.values(data).forEach(collect)
  for (const file of ['HomePage', 'ServicesPage', 'CasesPage', 'ContactPage', '../components/SiteLayout']) {
    const filename = `src/pages/${file}.tsx`
    const source = ts.createSourceFile(filename, await readFile(filename, 'utf8'), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX)
    function visit(node) {
      if (ts.isCallExpression(node) && node.expression.getText(source) === 't' && node.arguments[0] && ts.isStringLiteral(node.arguments[0])) collect(node.arguments[0].text)
      if (ts.isVariableDeclaration(node) && ['formats', 'messageChecklist'].includes(node.name.getText(source))) {
        function values(child) { if (ts.isStringLiteral(child)) collect(child.text); ts.forEachChild(child, values) }
        if (node.initializer) values(node.initializer)
      }
      ts.forEachChild(node, visit)
    }
    visit(source)
  }
  const missing = [...phrases].filter((text) => /[a-zA-Z]/.test(text) && !allowed.has(text) && !text.includes('@') && !text.startsWith('https:') && !english[text])
  assert.deepEqual(missing, [], 'Todas as frases públicas precisam de tradução ou exceção explícita')
  console.log(`Catálogo de tradução OK: ${phrases.size} frases verificadas`)
} finally {
  await vite.close()
}
