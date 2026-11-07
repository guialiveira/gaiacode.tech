import { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { isEnglish, languagePath, preferredLanguage } from '../language'

const preferenceKey = 'gaiacode-language'

export function LanguageChoice() {
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()
  const en = isEnglish(pathname)
  useEffect(() => {
    // Only the neutral entry point detects language. Deep links always keep their locale.
    if (pathname !== '/') return
    let preferred: string | null = null
    try { preferred = localStorage.getItem(preferenceKey) } catch { /* Storage may be blocked. */ }
    const language = preferredLanguage(preferred, navigator.languages?.length ? navigator.languages : [navigator.language])
    if (language === 'en') navigate('/en' + search + hash, { replace: true })
  }, [pathname, search, hash, navigate])

  function remember(language: string) {
    try { localStorage.setItem(preferenceKey, language) } catch { /* Links work without storage. */ }
  }
  return (
    <nav className="language-choice" aria-label={en ? 'Language' : 'Idioma'}>
      <Link lang="pt-BR" hrefLang="pt-BR" to={languagePath(pathname, false) + search + hash}
        aria-label="Português" aria-current={!en ? 'page' : undefined} onClick={() => remember('pt-BR')}>
        <img src="/flags/br.svg" width="16" height="11" alt="" />
      </Link>
      <Link lang="en" hrefLang="en" to={languagePath(pathname, true) + search + hash}
        aria-label="English" aria-current={en ? 'page' : undefined} onClick={() => remember('en')}>
        <img src="/flags/us.svg" width="16" height="11" alt="" />
      </Link>
    </nav>
  )
}
