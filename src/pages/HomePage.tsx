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
  usePageMeta(
    'gaiacode | tecnologia, software e IA aplicada',
    'gaiacode cria software sob medida, automacoes, integracoes e IA aplicada para empresas que precisam transformar operacao em vantagem.',
  )

  return (
    <main>
      <section className="hero-section hero-home">
        <div className="hero-media" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">Tecnologia, software e IA aplicada</p>
          <h1>gaiacode</h1>
          <p className="hero-statement">
            Construimos sistemas, automacoes e produtos digitais para empresas que precisam tirar
            projetos do papel, modernizar operacoes ou escalar solucoes existentes.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Falar com a gaiacode
            </a>
            <Link className="button button-secondary" to="/servicos">
              Conhecer solucoes
            </Link>
          </div>
        </div>
      </section>

      <section className="stats-band" aria-label="Indicadores da gaiacode">
        {stats.map((item) => (
          <article key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </article>
        ))}
      </section>

      <section className="section intro-section">
        <div className="split-heading">
          <p className="eyebrow">Onde inovacao encontra execucao</p>
          <h2>Uma empresa enxuta para transformar tecnologia em resultado concreto.</h2>
        </div>
        <p className="large-copy">
          A gaiacode nasce da experiencia de mais de uma decada construindo software em operacoes
          reais. O foco e combinar engenharia, produto e automacao para criar solucoes que entram
          no fluxo do negocio e continuam evoluindo depois do primeiro deploy.
        </p>
      </section>

      <section className="section section-alt">
        <div className="section-heading section-heading-row">
          <div>
            <p className="eyebrow">Solucoes</p>
            <h2>Tecnologia para operacoes que precisam sair do improviso.</h2>
          </div>
          <Link className="text-link text-link-strong" to="/servicos">
            Ver servicos
          </Link>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul>
                {service.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="belief-grid">
          <div className="belief-lead">
            <p className="eyebrow">Nosso jeito de pensar</p>
            <h2>Software bom precisa ser util, sustentavel e simples de evoluir.</h2>
          </div>
          {beliefCards.map((item) => (
            <article className="belief-card" key={item.title}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust-band" aria-label="Historico e repertorio">
        <p>Repertorio construido em projetos e operacoes envolvendo</p>
        <div className="trust-list">
          {backgroundRefs.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Cases e repertorio</p>
          <h2>Experiencia aplicada em cenarios com regra, escala e responsabilidade.</h2>
        </div>

        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.title}>
              <p className="case-label">{study.clientLine}</p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
            </article>
          ))}
        </div>

        <div className="inline-actions">
          <Link className="button button-secondary" to="/cases">
            Ver cases completos
          </Link>
        </div>
      </section>

      <section className="section dual-section">
        <div className="dual-block">
          <p className="eyebrow">Atuacao</p>
          <h2>Setores onde a gaiacode consegue gerar impacto rapido.</h2>
          <div className="sector-list">
            {sectors.map((sector) => (
              <span key={sector}>{sector}</span>
            ))}
          </div>
        </div>

        <div className="dual-block dual-block-accent">
          <p className="eyebrow">Stack e base tecnica</p>
          <h2>Da arquitetura ao deploy, com foco em manutencao.</h2>
          <div className="stack-list">
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Processo</p>
          <h2>Diagnostico, entrega e evolucao em ciclos curtos.</h2>
        </div>

        <div className="process-grid">
          {processSteps.map((step, index) => (
            <article className="process-card" key={step.title}>
              <span className="process-index">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-band">
          <p className="eyebrow">Vamos construir</p>
          <h2>Tem uma operacao, ideia ou sistema que precisa virar solucao de verdade?</h2>
          <div className="cta-actions-inline">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Chamar no WhatsApp
            </a>
            <Link className="button button-secondary" to="/contato">
              Outros canais
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
