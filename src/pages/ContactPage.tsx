import { usePageMeta } from '../hooks/usePageMeta'
import { contactLinks, contactOptions, processSteps } from '../siteData'

const messageChecklist = [
  'Seu nome, empresa e a melhor forma de retornar o contato.',
  'O desafio que você quer resolver e o resultado esperado.',
  'Os sistemas ou processos envolvidos, se houver.',
  'Prazos, prioridades e materiais que ajudem a entender a demanda.',
]

export function ContactPage() {
  usePageMeta(
    'Contato | gaiacode',
    'Entre em contato com a gaiacode pelo atendimento@gaiacode.tech ou fale com um consultor pelo WhatsApp sobre seu projeto.',
  )

  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="eyebrow">Fale com a gaiacode</p>
        <h1>Uma boa solução começa com uma conversa.</h1>
        <p className="page-lead">
          Conte o que sua empresa precisa. Fale com nossa equipe por e-mail ou converse
          com um consultor pelo WhatsApp para entender o melhor caminho para o seu projeto.
        </p>
      </section>

      <section className="section contact-channels" aria-labelledby="contact-channels-title">
        <div className="section-heading">
          <p className="eyebrow">Canais de atendimento</p>
          <h2 id="contact-channels-title">Como prefere falar com a gente?</h2>
        </div>
        <div className="contact-grid">
          {contactOptions.map((option) => (
            <article className="contact-card" key={option.label}>
              <svg
                className="contact-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                aria-hidden="true"
              >
                {option.href.startsWith('mailto:') ? (
                  <>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="m3 6 9 7 9-7" />
                  </>
                ) : (
                  <path d="M21 11.5a9 9 0 0 1-9 9 10 10 0 0 1-4-.9L3 21l1.4-4.5a9 9 0 1 1 16.6-5Z" />
                )}
              </svg>
              <h3>{option.label}</h3>
              <p className="contact-value">{option.value}</p>
              <p className="contact-description">{option.note}</p>
              <a
                className={`button ${option.href.startsWith('mailto:') ? 'button-primary' : 'button-secondary'}`}
                href={option.href}
                target={option.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={option.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {option.action}
                <span aria-hidden="true">↗</span>
              </a>
              <p className="contact-detail">{option.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt dual-section" aria-labelledby="contact-brief-title">
        <div>
          <p className="eyebrow">Prepare sua mensagem</p>
          <h2 id="contact-brief-title">Conte um pouco sobre o seu desafio.</h2>
          <p>Não precisa ter um escopo fechado. Um breve contexto já ajuda a começar.</p>
        </div>
        <div>
          <ul className="simple-list">
            {messageChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Próximos passos</p>
          <h2>Da primeira conversa ao plano de execução.</h2>
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
          <p className="eyebrow">Vamos conversar</p>
          <h2>Seu próximo projeto começa aqui.</h2>
          <div className="cta-actions-inline">
            <a className="button button-primary" href={contactLinks.email}>
              Enviar e-mail
            </a>
            <a
              className="button button-secondary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Falar com um consultor
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
