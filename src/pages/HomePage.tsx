import { useLanguage } from '../language'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  backgroundRefs,
  beliefCards,
  caseStudies,
  contactLinks,
  processSteps,
  sectors,
  services,
  stackItems,
  stats,
} from '../siteData'

export function HomePage() {
  const { t, localPath } = useLanguage()
  usePageMeta()

  return (
    <main>
      <section className="hero-section hero-home">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-copy">
          <h1>{t("Desenvolvimento de sistemas e suporte de TI")}</h1>
          <p className="hero-statement">{t("Criamos sistemas sob medida e cuidamos da sua TI: suporte técnico, infraestrutura, redes e manutenção de computadores para sua empresa trabalhar melhor.")}</p>
          <div className="hero-actions">
            <Link className="button button-primary" to={localPath("/contato")}>{t("Falar com a gaiacode")}</Link>
            <Link className="button button-secondary" to={localPath("/servicos")}>{t("Conhecer solucoes")}</Link>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label={t("Indicadores da gaiacode")}>
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{t(item.value)}</strong>
            <span>{t(item.label)}</span>
          </article>
        ))}
      </section>

      <section className="section intro-section">
        <div className="split-heading">
          <p className="eyebrow">{t("Onde inovacao encontra execucao")}</p>
          <h2>{t("Uma empresa enxuta para transformar tecnologia em resultado concreto.")}</h2>
        </div>
        <p className="large-copy">{t("A gaiacode nasce da experiencia de mais de uma decada construindo software em operacoes reais. O foco e combinar engenharia, produto e automacao para criar solucoes que entram no fluxo do negocio e continuam evoluindo depois do primeiro deploy.")}</p>
      </section>

      <section className="section section-alt">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">{t("Solucoes")}</p>
            <h2>{t("Tecnologia para operacoes que precisam sair do improviso.")}</h2>
          </div>
          <Link className="text-link text-link-strong" to={localPath("/servicos")}>{t("Ver servicos")}</Link>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{t(service.title)}</h3>
              <p>{t(service.description)}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{t(bullet)}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="belief-grid">
          <div className="belief-lead">
            <p className="eyebrow">{t("Nosso jeito de pensar")}</p>
            <h2>{t("Software bom precisa ser util, sustentavel e simples de evoluir.")}</h2>
          </div>
          {beliefCards.map((item) => (
            <article className="belief-card" key={item.title}>
              <span>{t(item.index)}</span>
              <h3>{t(item.title)}</h3>
              <p>{t(item.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-band" aria-label={t("Historico e repertorio")}>
        <p>{t("Repertorio construido em projetos e operacoes envolvendo")}</p>
        <div className="trust-list">
          {backgroundRefs.map((item) => (
            <span key={item}>{t(item)}</span>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">{t("Cases e repertorio")}</p>
          <h2>{t("Experiencia aplicada em cenarios com regra, escala e responsabilidade.")}</h2>
        </div>

        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.title}>
              <p className="case-label">{t(study.clientLine)}</p>
              <h3>{t(study.title)}</h3>
              <p>{t(study.summary)}</p>
            </article>
          ))}
        </div>

        <div className="inline-actions">
          <Link className="button button-secondary" to={localPath("/cases")}>{t("Ver cases completos")}</Link>
        </div>
      </section>

      <section className="section dual-section">
        <div className="dual-block">
          <p className="eyebrow">{t("Atuacao")}</p>
          <h2>{t("Setores onde a gaiacode consegue gerar impacto rapido.")}</h2>
          <div className="sector-list">
            {sectors.map((sector) => (
              <span key={sector}>{t(sector)}</span>
            ))}
          </div>
        </div>

        <div className="dual-block dual-block-accent">
          <p className="eyebrow">{t("Stack e base tecnica")}</p>
          <h2>{t("Da arquitetura ao deploy, com foco em manutencao.")}</h2>
          <div className="stack-list">
            {stackItems.map((item) => (
              <span key={item}>{t(item)}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{t("Processo")}</p>
          <h2>{t("Diagnostico, entrega e evolucao em ciclos curtos.")}</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-index">0{index + 1}</span>
              <h3>{t(step.title)}</h3>
              <p>{t(step.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-band">
          <p className="eyebrow">{t("Vamos construir")}</p>
          <h2>{t("Tem uma operacao, ideia ou sistema que precisa virar solucao de verdade?")}</h2>
          <div className="cta-actions-inline">
            <a
              className="button button-primary"
              href={t(contactLinks.whatsapp)}
              target="_blank"
              rel="noreferrer"
            >{t("Falar com um consultor")}</a>
            <Link className="button button-secondary" to={localPath("/contato")}>{t("Canais de atendimento")}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
