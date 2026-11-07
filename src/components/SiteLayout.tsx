import { useLanguage } from '../language'
import { NavLink, Outlet } from 'react-router-dom'
import { contactLinks } from '../siteData'
import { LanguageChoice } from './LanguageChoice'

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/servicos', label: 'Servicos' },
  { to: '/cases', label: 'Cases' },
  { to: '/contato', label: 'Contato' },
]

export function SiteLayout() {
  const { t, localPath } = useLanguage()
  return (
    <div className="site-shell">
      <header className="topbar">
        <NavLink className="brand" to={localPath("/")} end aria-label={t("gaiacode")}>
          <span className="brand-mark" aria-hidden="true">
            gc
          </span>
          <span className="brand-text">
            <strong>gaiacode</strong>
            <span>{t("tecnologia que vira operacao")}</span>
          </span>
        </NavLink>

        <nav className="nav" aria-label={t("Principal")}>
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={localPath(item.to)}
              end={item.end}
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
            >
              {t(item.label)}
            </NavLink>
          ))}
        </nav>

        <NavLink className="button button-nav" to={localPath("/contato")}>{t("Fale conosco")}</NavLink>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-brand">
          <strong>gaiacode</strong>
          <p>{t("Desenvolvimento de sistemas, suporte de TI, infraestrutura e manutenção de computadores.")}</p>
        </div>

        <p className="footer-note">
          <span>{t("Atendimento")}</span>
          <a href={t(contactLinks.email)}>atendimento@gaiacode.tech</a>
          <a href={t(contactLinks.whatsapp)} target="_blank" rel="noreferrer">{t("Falar com um consultor no WhatsApp")}</a>
        </p>

        <div className="footer-links">
          <NavLink to={localPath("/servicos")}>{t("Servicos")}</NavLink>
          <NavLink to={localPath("/cases")}>{t("Cases")}</NavLink>
          <div className="footer-contact">
            <NavLink to={localPath("/contato")}>{t("Contato")}</NavLink>
            <LanguageChoice />
          </div>
        </div>
      </footer>
    </div>
  )
}
