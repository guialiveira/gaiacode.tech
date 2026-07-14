import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { backgroundRefs, caseStudies, contactLinks, sectors, stats } from '../siteData'

export function CasesPage() {
  usePageMeta(
    'Cases | gaiacode',
    'Repertorio da gaiacode em sistemas corporativos, setor publico, energia, seguros, operacoes de campo e IA aplicada.',
  )

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Cases e repertorio</p>
        <h1>Experiencia real em operacoes que nao podem depender de improviso.</h1>
        <p className="page-lead">
          A gaiacode organiza como empresa uma base tecnica formada em produtos, sistemas internos,
          APIs, automacoes, dados e projetos corporativos no Brasil e no exterior.
        </p>
      </section>

      <section className="stats-band" aria-label="Indicadores de experiencia">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="trust-band" aria-label="Empresas e contextos">
        <p>Repertorio construido em ambientes como</p>
        <div className="trust-list">
          {backgroundRefs.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Recortes de experiencia</p>
          <h2>Problemas de negocio traduzidos em software, integracao e evolucao tecnica.</h2>
        </div>

        <div className="case-list">
          {caseStudies.map((study, index) => (
            <article className="case-row" key={study.title}>
              <span className="case-index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="case-label">{study.clientLine}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <ul>
                  {study.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Setores</p>
          <h2>Contextos onde experiencia tecnica precisa conversar com operacao.</h2>
        </div>

        <div className="sector-list">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-band">
          <p className="eyebrow">Conversa comercial</p>
          <h2>O melhor case para avaliar agora e o problema que a sua empresa precisa resolver.</h2>
          <div className="cta-actions-inline">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre contexto
            </a>
            <Link className="button button-secondary" to="/contato">
              Ir para contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
