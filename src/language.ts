import { useLocation } from 'react-router-dom'
import { english } from './english.ts'

export const languageRoutes = [
  ['/', '/en'],
  ['/servicos', '/en/services'],
  ['/cases', '/en/projects'],
  ['/contato', '/en/contact'],
] as const

export function isEnglish(path: string) {
  return path === '/en' || path.startsWith('/en/')
}

export function preferredLanguage(saved: string | null, languages: readonly string[]) {
  const primary = saved === 'en' || saved === 'pt-BR' ? saved : languages[0] ?? 'pt-BR'
  return /^en(?:-|$)/i.test(primary) ? 'en' : 'pt-BR'
}

export function languagePath(path: string, en: boolean): string {
  const normalized = path.replace(/\/+$/, '') || '/'
  const pair = languageRoutes.find((pair) => pair.some((route) => route === normalized))
  return pair ? pair[en ? 1 : 0] : path
}

export function translate(value: string, en: boolean): string
export function translate(value: number, en: boolean): number
export function translate(value: string | number, en: boolean): string | number
export function translate(value: string | number, en: boolean) {
  if (!en || typeof value !== 'string') return value
  if (value.startsWith('https://wa.me/')) {
    return 'https://wa.me/5562996749356?text=' + encodeURIComponent('Hello, gaiacode team. I visited your website and would like to discuss a project or IT support.')
  }
  return english[value] ?? value
}

export function useLanguage() {
  const { pathname } = useLocation()
  const en = isEnglish(pathname)
  return {
    en,
    t: (value: string) => translate(value, en),
    localPath: (path: string) => languagePath(path, en),
  }
}
