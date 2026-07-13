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

Para subir como `Application`, use o `Dockerfile` na raiz do projeto. A imagem compila o Vite e serve o `dist/` com Nginx.

- Build type: `Application`
- Build command: `npm run build` se o painel pedir comando manual
- Porta: `80`
- Root/publish: usar o `Dockerfile` da raiz
