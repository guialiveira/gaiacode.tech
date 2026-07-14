import { NavLink, Outlet } from 'react-router-dom'
import { contactLinks } from '../siteData'

const navigation = [
  { to: '/', label: 'Home', end: true },
  { to: '/servicos', label: 'Servicos' },
  { to: '/cases', label: 'Cases' },
  { to: '/contato', label: 'Contato' },
]

export function SiteLayout() {
  return (
    <div className="site-shell">
      <header className="topbar">
        <NavLink className="brand" to="/" end aria-label="gaiacode">
          <span className="brand-mark" aria-hidden="true">
            gc
          </span>
          <span className="brand-text">
            <strong>gaiacode</strong>
            <span>tecnologia que vira operacao</span>
          </span>
        </NavLink>

        <nav className="nav" aria-label="Principal">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'nav-link nav-link-active' : 'nav-link')}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <a
          className="button button-nav"
          href={contactLinks.whatsapp}
          target="_blank"
          rel="noreferrer"
        >
          Fale conosco
        </a>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-brand">
          <strong>gaiacode</strong>
          <p>Software sob medida, automacoes, integracoes e IA aplicada para empresas.</p>
        </div>

        <p className="footer-note">
          Uma operacao de tecnologia focada em sistemas, automacoes, integracoes e IA aplicada
          para empresas que precisam evoluir com consistencia.
        </p>

        <div className="footer-links">
          <NavLink to="/servicos">Servicos</NavLink>
          <NavLink to="/cases">Cases</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </div>
      </footer>
    </div>
  )
}
