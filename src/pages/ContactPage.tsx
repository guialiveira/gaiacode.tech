import { usePageMeta } from '../hooks/usePageMeta'
import { contactLinks, contactOptions, processSteps } from '../siteData'

const entryPoints = [
  'Criar um MVP ou produto digital',
  'Modernizar um sistema existente',
  'Automatizar um processo manual',
  'Integrar ferramentas, APIs e dados',
  'Aplicar IA em um fluxo real de trabalho',
]

export function ContactPage() {
  usePageMeta(
    'Contato | gaiacode',
    'Fale com a gaiacode para conversar sobre software sob medida, automacoes, integracoes e IA aplicada.',
  )

  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Contato</p>
        <h1>Vamos transformar uma demanda em plano de execucao.</h1>
        <p className="page-lead">
          Envie o contexto do projeto, processo ou sistema. A primeira conversa serve para entender
          objetivo, restricoes, urgencia e o melhor caminho tecnico para sair do ponto atual.
        </p>
      </section>

      <section className="section dual-section">
        <div className="dual-block dual-block-accent">
          <p className="eyebrow">Canais</p>
          <h2>Comece pelo canal mais pratico.</h2>
          <div className="contact-grid">
            {contactOptions.map((option) => (
              <a
                className="contact-card"
                key={option.label}
                href={option.href}
                target={option.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={option.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                <span className="contact-label">{option.label}</span>
                <strong>{option.value}</strong>
                <p>{option.note}</p>
              </a>
            ))}
          </div>
        </div>

        <div className="dual-block">
          <p className="eyebrow">Boas entradas</p>
          <h2>Demandas onde a gaiacode tende a gerar mais valor.</h2>
          <ul className="simple-list">
            {entryPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Proximos passos</p>
          <h2>Da conversa inicial ao primeiro ciclo de entrega.</h2>
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
          <p className="eyebrow">Acesso rapido</p>
          <h2>Quando a demanda ja existe, o WhatsApp acelera o alinhamento.</h2>
          <div className="cta-actions-inline">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Abrir WhatsApp
            </a>
            <a className="button button-secondary" href={contactLinks.email}>
              Enviar email
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
