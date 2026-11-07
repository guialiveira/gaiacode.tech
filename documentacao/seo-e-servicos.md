# SEO e catálogo de serviços

Nota: a versão bilíngue amplia o build para oito páginas. Consulte [Idiomas](idiomas.md)
para URLs inglesas, detecção de preferência e hreflang. O registro abaixo descreve a implantação inicial de SEO.

Atualizado em 07/11/2026.

## Objetivo e escopo

Apresentar “Desenvolvimento de sistemas e suporte de TI” como H1 da Home, mantendo a identidade visual. Público do conteúdo: empresas que precisam de software e apoio à operação de TI. Incluídos suporte técnico, infraestrutura/redes, manutenção de computadores/notebooks e backup, conforme pedido do responsável pelo site. Serviços de software existentes preservados.

## Pesquisa e limitações

Pesquisa qualitativa em português, com contexto Brasil. Consulta direta ao Google: “manutenção de computadores problemas mais comuns”, em 07/11/2026. Resultados observados mencionam falhas de Wi-Fi, desligamento, problemas ao iniciar, aquecimento e manutenção preventiva. Isso é evidência de temas encontrados nos resultados, **não de volume ou ranking de procura**. Não houve acesso ao Planejador de Palavras-chave nem ao Search Console da empresa.

Referências comerciais encontradas na pesquisa complementar:

- [JE Tecnologia](https://jetechx.com.br/): formatação, limpeza, SSD/memória e remoção de programas indesejados.
- [Tecn72](https://tecn72.com.br/manutencao-computadores/): lentidão, diagnóstico, backup e manutenção de computadores/notebooks.
- [Innovatis](https://innovatis.com.br/): manutenção, Wi-Fi e upgrades. As localidades e condições comerciais dessas empresas não foram atribuídas à gaiacode.

Os temas foram agrupados editorialmente em desempenho, hardware, conectividade, reinstalação, periféricos/e-mail e proteção de arquivos. A priorização comercial permanece uma hipótese a validar com consultas e contatos reais. Não há alegação de “serviços mais buscados” no site.

Fontes oficiais consultadas:

- [Google: SEO para JavaScript](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics): conteúdo e metadados acessíveis no HTML.
- [Google: URLs canônicas](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls): uma URL de produção consistente por página.
- [Google: dados do Trends](https://support.google.com/trends/answer/4365533?hl=pt): dados normalizados, sem equivalência a volumes absolutos.
- [Vite: SSR e pré-renderização](https://vite.dev/guide/ssr.html): renderização da aplicação no build.

## Arquitetura e operação

- `src/seo.ts` centraliza títulos, descrições, canonical, Open Graph, Twitter Cards e JSON-LD de Organization/WebSite/WebPage.
- O build usa os componentes reais com StaticRouter e renderToString. Gera `dist/index.html`, `servicos.html`, `cases.html` e `contato.html` com conteúdo completo, além de robots.txt e sitemap.xml. Sem servidor Node em produção e sem dependências novas.
- O navegador hidrata o HTML publicado; a navegação interna atualiza os metadados pelo hook existente.
- Nginx e Vercel entregam os HTMLs específicos. O domínio canônico permanece `https://gaiacode.tech`.
- O e-mail e o número de WhatsApp existentes foram preservados.
- Sem preços ou compromissos inventados: prazo, cobertura presencial, peças e licenças dependem de proposta. Monetização existente: contratação dos serviços da agência; sem cobrança no site ou custo novo de IA/API.

## Verificação e próximos passos

Verificação realizada em 07/11/2026: build, `check:seo`, lint e `git diff --check` concluídos com sucesso. Home e Serviços conferidos no navegador em 320, 768, 1024 e 1440 px, sem rolagem lateral após os ajustes. Navegação atualizou título/canonical; recarregar Serviços manteve o conteúdo pré-renderizado e não gerou erros ou avisos no console. Configurações de Nginx/Vercel foram ajustadas, mas o deploy não foi executado.

Arquivos envolvidos:

- Conteúdo: `src/pages/HomePage.tsx`, `ServicesPage.tsx`, `CasesPage.tsx`, `ContactPage.tsx`, `src/siteData.ts` e `src/components/SiteLayout.tsx`.
- Visual: `src/App.css`.
- SEO e renderização: `src/seo.ts`, `src/hooks/usePageMeta.ts`, `src/entry-server.tsx`, `src/App.tsx`, `src/main.tsx` e `index.html`.
- Build, testes e entrega: `scripts/prerender.mjs`, `scripts/check-seo.mjs`, `package.json`, `vite.config.ts`, `nginx.conf` e `vercel.json`.
- Documentação: `README.md`, `documentacao/README.md` e este documento.

Executar `npm run build`, `npm run check:seo` e `npm run lint`. Conferir a Home em 320, 768, 1024 e 1440 px e a navegação entre páginas. `check:seo` inspeciona os artefatos reais: conteúdo sem JS, H1, metadados exclusivos, canonical, prévias sociais, JSON-LD e sitemap.

Após publicar, cadastrar/enviar o sitemap no Search Console e acompanhar consultas, impressões, cliques e contatos. Validar região atendida antes de criar páginas locais ou adicionar endereço/dados de negócio local. Validar demanda e disponibilidade operacional antes de prometer atendimento remoto, presencial ou SLA. Nenhuma posição no Google é garantida; a indexação depende de publicação e avaliação do buscador.
