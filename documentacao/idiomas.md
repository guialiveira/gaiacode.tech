# Português e inglês

## Comportamento

O seletor fica na mesma linha de Contato/Contact no rodapé, com bandeiras SVG de 16 × 11 px e área clicável de 24 × 24 px. Sem nomes visíveis, fundo ou borda permanente; o idioma atual tem opacidade integral e o foco de teclado tem contorno. Rótulos acessíveis identificam os idiomas. Referências: [Weglot](https://www.weglot.com/guides/wordpress-language-switcher) e [TranslatePress](https://translatepress.com/docs/settings/language-switcher/), consultadas em 07/11/2026.

- Português mantém `/`, `/servicos`, `/cases` e `/contato`.
- Inglês usa `/en`, `/en/services`, `/en/projects` e `/en/contact`.
- Só na entrada `/`, a preferência manual salva ou o idioma principal do navegador `en`/`en-*` direciona para `/en`. Português e outros idiomas permanecem em português. Não há consulta de IP ou serviço externo de geolocalização: idioma do navegador é uma preferência, não uma prova do país do visitante.
- Links diretos preservam o idioma da URL, inclusive para visitantes com navegador em outro idioma. A troca manual mantém a página equivalente, query e fragmento; salva apenas `pt-BR` ou `en` no localStorage. Com armazenamento bloqueado, os links continuam funcionando, sem persistência.
- Navegação, conteúdo, rótulos acessíveis e mensagem inicial de WhatsApp estão traduzidos. Marca, tecnologias, nomes de clientes, e-mail e número de telefone são preservados. Nenhuma cobertura internacional presencial ou condição comercial adicional é prometida.

## Manutenção e SEO

`src/english.ts` contém o catálogo; os componentes usam `useLanguage()` e mantêm um único layout para os dois idiomas. Novas frases devem ganhar uma entrada em inglês. `npm run check:translations` identifica lacunas nos textos e dados públicos.

O build pré-renderiza as oito páginas, define `html lang`, metadados, JSON-LD e canonical por versão. Links alternativos recíprocos `pt-BR`, `en` e `x-default` apontam às páginas equivalentes. O sitemap inclui os oito endereços. A metatag de verificação do Search Console continua no HTML.

Fonte: [Google — sites multilíngues](https://developers.google.com/search/docs/specialty/international/managing-multi-regional-sites), consultada em 07/11/2026. O Google recomenda URLs separadas, links de troca e hreflang e desaconselha redirecionamentos que impeçam acesso às versões. A detecção aqui é limitada à Home; páginas específicas e escolhas explícitas são respeitadas.

## Validação

Executar `npm run build`, `npm run check:seo`, `npm run check:translations` e `npm run lint`. Conferir navegação, troca de idiomas, contatos e tamanhos 320/768/1024/1440 px. O preview deve servir também `/en.html` e `/en/services.html` etc.; Nginx usa `$uri.html` e Vercel tem rewrites explícitos.

Não há novas dependências ou custos de API. Após publicação, o Google poderá redescobrir as versões inglesas pelo sitemap já enviado. A decisão de mostrar inglês usa idioma, não país; detecção geográfica exigiria uma regra diferente e não foi implementada.

Validação realizada: build, checks de SEO nas oito páginas, catálogo de 215 frases, testes de seleção de idioma e lint passaram. No navegador, foram conferidos redirecionamento pela preferência salva, troca Serviços/Services, navegação até Contact, lang/canonical, mensagem de WhatsApp e ausência de erros no console. A página Projects foi conferida em 320/768/1024/1440 px; títulos ajustados para inglês em telas pequenas.

## Arquivos afetados

- Traduções e regras: `src/english.ts`, `src/language.ts` e `src/components/LanguageChoice.tsx`.
- Templates compartilhados: `src/components/SiteLayout.tsx`, as quatro páginas em `src/pages/`, `src/App.tsx` e `src/App.css`.
- SEO e build: `src/seo.ts`, `src/hooks/usePageMeta.ts`, `scripts/prerender.mjs`, `vite.config.ts` e `vercel.json`.
- Verificação: `scripts/check-translations.mjs`, `scripts/check-seo.mjs` e `package.json`.
- Documentação: `README.md`, o índice e os registros de idiomas/SEO em `documentacao/`.
