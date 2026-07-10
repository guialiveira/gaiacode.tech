import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { contactLinks, processSteps, services } from '../siteData'

const deliveryBlocks = [
  {
    title: 'Descoberta e escopo',
    description:
      'Levantamento de contexto, objetivos, restricoes tecnicas e definicao do recorte inicial que faz sentido para negocio e entrega.',
  },
  {
    title: 'Construcao e integracao',
    description:
      'Implementacao do produto ou fluxo com prioridade para operacao, manutencao e conexao com os sistemas que ja existem.',
  },
  {
    title: 'Evolucao e suporte',
    description:
      'Melhorias progressivas, ajuste de arquitetura, monitoramento do que trava a operacao e abertura de proximos ciclos.',
  },
]

export function ServicesPage() {
  usePageMeta(
    'Servicos | gaiacode',
    'Servicos da gaiacode em software sob medida, automacoes, integracoes, IA aplicada e evolucao de arquitetura.',
  )

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Servicos</p>
        <h1>Oferta clara para quem precisa transformar problema em sistema.</h1>
        <p className="page-lead">
          A gaiacode se posiciona como empresa para assumir escopo com mais clareza comercial e
          mais consistencia tecnica. Os servicos abaixo podem entrar em projetos novos, operacoes
          em crescimento ou sistemas que precisam ser reorganizados.
        </p>
      </section>

      <section className="section">
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

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Como esses servicos entram</p>
          <h2>Nem toda demanda precisa de projeto grande. Precisa de recorte correto.</h2>
        </div>

        <div className="process-grid">
          {deliveryBlocks.map((block, index) => (
            <article className="process-card" key={block.title}>
              <span className="process-index">0{index + 1}</span>
              <h3>{block.title}</h3>
              <p>{block.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Metodo</p>
          <h2>A forma de conduzir importa tanto quanto a stack.</h2>
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
            <p className="eyebrow">Conversa inicial</p>
            <h2>Se a demanda ainda esta nebulosa, a primeira entrega pode ser clareza.</h2>
            <p>
              A entrada pode comecar por diagnostico, escopo tecnico ou desenho do primeiro ciclo.
              Nao precisa chegar com tudo decidido para a conversa acontecer.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Falar sobre escopo
            </a>
            <Link className="button button-secondary" to="/contato">
              Ver canais de contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
