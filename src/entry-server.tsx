import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { SiteRoutes } from './App'
export { renderSeoHead, seoPages, siteUrl } from './seo'

export function renderPage(path: string) {
  return renderToString(<StaticRouter location={path}><SiteRoutes /></StaticRouter>)
}
