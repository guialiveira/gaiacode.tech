import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { contactLinks, processSteps, services, stackItems } from '../siteData'

const formats = [
  {
    title: 'MVP e produto digital',
    description:
      'Para ideias que precisam sair do PowerPoint e virar uma primeira versao utilizavel, validavel e preparada para evoluir.',
  },
  {
    title: 'Sistema interno',
    description:
      'Para empresas que dependem de planilhas, controles manuais ou ferramentas desconectadas para manter a operacao rodando.',
  },
  {
    title: 'Evolucao tecnica',
    description:
      'Para sistemas que ja existem, mas precisam de arquitetura, performance, integracoes, testes ou organizacao de base.',
  },
]

export function ServicesPage() {
  usePageMeta(
    'Servicos | gaiacode',
    'Servicos da gaiacode em software sob medida, automacoes, integracoes, IA aplicada e evolucao de sistemas.',
  )

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Servicos</p>
        <h1>Solucoes digitais para empresas que precisam operar melhor.</h1>
        <p className="page-lead">
          A gaiacode combina software sob medida, automacao, integracao e IA aplicada para criar
          sistemas que reduzem retrabalho, conectam dados e sustentam crescimento.
        </p>
      </section>

      <section className="section">
        <div className="services-grid services-grid-large">
          {services.map((service) => (
            <article className="service-card service-card-featured" key={service.title}>
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

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Formatos de entrada</p>
          <h2>O projeto comeca pelo recorte certo.</h2>
        </div>

        <div className="process-grid">
          {formats.map((format, index) => (
            <article className="process-card" key={format.title}>
              <span className="process-index">0{index + 1}</span>
              <h3>{format.title}</h3>
              <p>{format.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dual-section">
        <div className="dual-block">
          <p className="eyebrow">Como trabalhamos</p>
          <h2>Clareza antes de codigo. Entrega antes de discurso.</h2>
          <div className="process-mini-list">
            {processSteps.map((step) => (
              <article key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="dual-block dual-block-accent">
          <p className="eyebrow">Base tecnica</p>
          <h2>Stack moderna para produtos e sistemas corporativos.</h2>
          <div className="stack-list">
            {stackItems.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-band">
          <p className="eyebrow">Proximo passo</p>
          <h2>Se a demanda ainda esta aberta, o primeiro servico pode ser estruturar o caminho.</h2>
          <div className="cta-actions-inline">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Falar sobre escopo
            </a>
            <Link className="button button-secondary" to="/cases">
              Ver repertorio
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
