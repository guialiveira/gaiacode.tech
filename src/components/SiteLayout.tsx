import { NavLink, Outlet } from 'react-router-dom'
import { contactLinks } from '../siteData'

const navigation = [
  { to: '/', label: 'Inicio', end: true },
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
            <span>software, automacao e IA</span>
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
          Falar sobre projeto
        </a>
      </header>

      <Outlet />

      <footer className="footer">
        <div className="footer-brand">
          <strong>gaiacode</strong>
          <p>Software sob medida, automacoes, integracoes e IA aplicada para operacoes reais.</p>
        </div>

        <div className="footer-links">
          <NavLink to="/servicos">Servicos</NavLink>
          <NavLink to="/cases">Cases</NavLink>
          <NavLink to="/contato">Contato</NavLink>
          <a href={contactLinks.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}
