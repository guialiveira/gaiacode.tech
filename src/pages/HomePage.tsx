import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import {
  backgroundRefs,
  contactLinks,
  credibilityPillars,
  painPoints,
  processSteps,
  services,
} from '../siteData'

export function HomePage() {
  usePageMeta(
    'gaiacode | software, automacao e IA',
    'Empresa de tecnologia para software sob medida, automacoes, integracoes e IA aplicada.',
  )

  return (
    <main>
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Empresa de tecnologia para software sob medida, automacoes e IA aplicada</p>
          <h1>Software que organiza a operacao, acelera decisoes e sustenta crescimento.</h1>
          <p className="hero-text">
            A <strong>gaiacode</strong> nasce para posicionar uma operacao tecnica com visao de
            empresa: menos freelancer isolado, mais parceiro de tecnologia para construir,
            integrar e evoluir sistemas com clareza.
          </p>

          <div className="hero-actions">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Conversar no WhatsApp
            </a>
            <Link className="button button-secondary" to="/servicos">
              Ver servicos
            </Link>
          </div>

          <ul className="hero-metrics" aria-label="Pilares de credibilidade">
            {credibilityPillars.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="hero-panel" aria-hidden="true">
          <div className="panel-grid" />
          <div className="signal-card signal-card-main">
            <span className="signal-label">Foco da operacao</span>
            <strong>Produtos, integracoes e automacoes para cenarios reais.</strong>
            <p>Software util, arquitetura objetiva e entregas com contexto de negocio.</p>
          </div>

          <div className="signal-stack">
            <div className="signal-card">
              <span className="signal-number">01</span>
              <p>Diagnostico rapido e proposta tecnica sem ruido.</p>
            </div>
            <div className="signal-card">
              <span className="signal-number">02</span>
              <p>Implementacao com prioridade em impacto operacional.</p>
            </div>
            <div className="signal-card">
              <span className="signal-number">03</span>
              <p>Evolucao continua sem depender de improviso.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip" aria-label="Historico de experiencia">
        <p>Experiencia construida em projetos e operacoes envolvendo:</p>
        <div className="trust-list">
          {backgroundRefs.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Onde a gaiacode entra</p>
          <h2>Uma estrutura enxuta para problemas que precisam virar entrega.</h2>
          <p>
            O posicionamento muda de profissional para empresa, mas a vantagem continua a mesma:
            profundidade tecnica, proximidade com o problema e execucao sem enfeite.
          </p>
        </div>

        <div className="pain-grid">
          {painPoints.map((item) => (
            <article className="pain-card" key={item.title}>
              <span>{item.index}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Entregas principais</p>
          <h2>Servicos pensados para operacao, nao para parecer portfolio.</h2>
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

        <div className="inline-actions">
          <Link className="text-link text-link-strong" to="/servicos">
            Abrir pagina completa de servicos
          </Link>
        </div>
      </section>

      <section className="section method-section">
        <div className="section-heading">
          <p className="eyebrow">Metodo de trabalho</p>
          <h2>Diagnosticar, construir e evoluir com logica de parceria.</h2>
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

      <section className="section cta-section">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Proximo passo</p>
            <h2>Se existe uma operacao travada ou um produto parado, ja existe ponto de entrada.</h2>
            <p>
              O proximo passo pode ser um diagnostico, um MVP, uma integracao critica ou a
              evolucao de um sistema existente. O importante e sair da intencao e entrar em
              execucao.
            </p>
          </div>

          <div className="cta-actions">
            <Link className="button button-secondary" to="/cases">
              Ver cases
            </Link>
            <Link className="button button-secondary" to="/contato">
              Ir para contato
            </Link>
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Abrir conversa no WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
