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

Para publicar via Docker no Dokploy:

- Build type: `Dockerfile`
- Dockerfile path: `Dockerfile`
- Docker context: raiz do repositório
- Porta interna: `3000`
- Domínio/porta no Dokploy: apontar para `3000`
