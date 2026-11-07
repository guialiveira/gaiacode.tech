import { useLanguage } from '../language'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { backgroundRefs, caseStudies, contactLinks, sectors, stats } from '../siteData'

export function CasesPage() {
  const { t, localPath } = useLanguage()
  usePageMeta()

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">{t("Cases e repertorio")}</p>
        <h1>{t("Experiencia real em operacoes que nao podem depender de improviso.")}</h1>
        <p className="page-lead">{t("A gaiacode organiza como empresa uma base tecnica formada em produtos, sistemas internos, APIs, automacoes, dados e projetos corporativos no Brasil e no exterior.")}</p>
      </section>

      <section className="stats-band" aria-label={t("Indicadores de experiencia")}>
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{t(item.value)}</strong>
            <span>{t(item.label)}</span>
          </article>
        ))}
      </section>

      <section className="trust-band" aria-label={t("Empresas e contextos")}>
        <p>{t("Repertorio construido em ambientes como")}</p>
        <div className="trust-list">
          {backgroundRefs.map((item) => (
            <span key={item}>{t(item)}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{t("Recortes de experiencia")}</p>
          <h2>{t("Problemas de negocio traduzidos em software, integracao e evolucao tecnica.")}</h2>
        </div>

        <div className="case-list">
          {caseStudies.map((study, index) => (
            <article className="case-row" key={study.title}>
              <span className="case-index">{String(index + 1).padStart(2, '0')}</span>
              <div>
                <p className="case-label">{t(study.clientLine)}</p>
                <h3>{t(study.title)}</h3>
                <p>{t(study.summary)}</p>
                <ul>
                  {study.outcomes.map((outcome) => (
                    <li key={outcome}>{t(outcome)}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">{t("Setores")}</p>
          <h2>{t("Contextos onde experiencia tecnica precisa conversar com operacao.")}</h2>
        </div>

        <div className="sector-list">
          {sectors.map((sector) => (
            <span key={sector}>{t(sector)}</span>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-band">
          <p className="eyebrow">{t("Conversa comercial")}</p>
          <h2>{t("O melhor case para avaliar agora e o problema que a sua empresa precisa resolver.")}</h2>
          <div className="cta-actions-inline">
            <a
              className="button button-primary"
              href={t(contactLinks.whatsapp)}
              target="_blank"
              rel="noreferrer"
            >{t("Falar com um consultor")}</a>
            <Link className="button button-secondary" to={localPath("/contato")}>{t("Ir para contato")}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
