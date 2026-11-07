import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getSeo } from '../seo'

export function usePageMeta() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = getSeo(pathname)
    document.title = seo.title
    for (const { key, content } of seo.meta) {
      const attribute = key.startsWith('og:') ? 'property' : 'name'
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute(attribute, key)
        document.head.append(tag)
      }
      tag.content = content
    }
    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = seo.url
    const schema = document.getElementById('site-schema')
    if (schema) schema.textContent = JSON.stringify(seo.schema)
  }, [pathname])
}
