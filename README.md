# gaiacode.tech

Site institucional da `gaiacode`, construido em React + TypeScript + Vite.

## Estrutura

- Home institucional
- Pagina de servicos
- Pagina de cases
- Pagina de contato

## Scripts

```bash
npm install
npm run dev
npm run build
npm run check:seo
npm run check:translations
npm run lint
```

## Deploy

O build pré-renderiza oito páginas (português e inglês) e gera sitemap.xml e robots.txt em `dist/`.
Metadados ficam em `src/seo.ts`. Veja [SEO e serviços](documentacao/seo-e-servicos.md)
para fontes, decisões e passos após a publicação.

A versão inglesa começa em `/en`. Veja [Idiomas](documentacao/idiomas.md)
para detecção de preferência, manutenção das traduções e SEO internacional.

O projeto inclui `vercel.json` para suportar rotas do frontend no deploy.

### Dokploy

Para publicar via Docker no Dokploy:

- Build type: `Dockerfile`
- Dockerfile path: `Dockerfile`
- Docker context: raiz do repositório
- Porta interna: `3000`
- Domínio/porta no Dokploy: apontar para `3000`
