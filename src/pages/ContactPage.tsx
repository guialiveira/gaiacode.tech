import { usePageMeta } from '../hooks/usePageMeta'
import { contactLinks, contactOptions, processSteps } from '../siteData'

const entryPoints = [
  'Novo produto ou MVP',
  'Sistema existente travando crescimento',
  'Automacao de processo manual',
  'Integracao entre ferramentas e dados',
  'Funcionalidade com IA aplicada',
]

export function ContactPage() {
  usePageMeta(
    'Contato | gaiacode',
    'Entre em contato com a gaiacode para conversar sobre software sob medida, automacoes, integracoes e IA aplicada.',
  )

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Contato</p>
        <h1>Conversa boa comeca com contexto claro, nao com formulario frio.</h1>
        <p className="page-lead">
          Esta pagina organiza os canais e mostra qual tipo de demanda faz sentido para a
          gaiacode. O objetivo e encurtar a distancia entre necessidade e execucao.
        </p>
      </section>

      <section className="section dual-section">
        <div className="dual-card dual-card-highlight">
          <p className="eyebrow">Canais</p>
          <h2>Escolha o ponto de entrada mais pratico.</h2>
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

        <div className="dual-card">
          <p className="eyebrow">Demandas que fazem sentido</p>
          <h2>Boa conversa comercial depende de problema bem colocado.</h2>
          <ul className="simple-list">
            {entryPoints.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Como a conversa tende a andar</p>
          <h2>Sem teatro de agencia. O processo e direto.</h2>
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
            <p className="eyebrow">Acesso rapido</p>
            <h2>Se ja existe urgencia, va direto para o WhatsApp.</h2>
            <p>
              Quando o caso exige diagnostico ou decisao rapida, o WhatsApp encurta a etapa de
              alinhamento. Se preferir, o email continua disponivel para contextos mais extensos.
            </p>
          </div>

          <div className="cta-actions">
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
            <a
              className="button button-ghost"
              href={contactLinks.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
