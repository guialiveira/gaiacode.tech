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
npm run lint
```

## Deploy

O projeto inclui `vercel.json` para suportar rotas do frontend no deploy.

### Dokploy

Este projeto deve ser publicado como `Static` no Dokploy.

- Build type: `Static`
- SPA: habilitado
- Build Path: raiz do repositório, nunca `./Dockerfile`
- Public directory / output: `dist`
