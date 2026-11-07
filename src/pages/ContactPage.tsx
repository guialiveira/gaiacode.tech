import { useLanguage } from '../language'
import { usePageMeta } from '../hooks/usePageMeta'
import { contactLinks, contactOptions, processSteps } from '../siteData'

const messageChecklist = [
  'Seu nome, empresa e a melhor forma de retornar o contato.',
  'O desafio que você quer resolver e o resultado esperado.',
  'Os sistemas ou processos envolvidos, se houver.',
  'Prazos, prioridades e materiais que ajudem a entender a demanda.',
]

export function ContactPage() {
  const { t } = useLanguage()
  usePageMeta()

  return (
    <main>
      <section className="page-hero contact-hero">
        <p className="eyebrow">{t("Fale com a gaiacode")}</p>
        <h1>{t("Uma boa solução começa com uma conversa.")}</h1>
        <p className="page-lead">{t("Conte o que sua empresa precisa. Fale com nossa equipe por e-mail ou converse com um consultor pelo WhatsApp para entender o melhor caminho para o seu projeto.")}</p>
      </section>

      <section className="section contact-channels" aria-labelledby="contact-channels-title">
        <div className="section-heading">
          <p className="eyebrow">{t("Canais de atendimento")}</p>
          <h2 id="contact-channels-title">{t("Como prefere falar com a gente?")}</h2>
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
              <h3>{t(option.label)}</h3>
              <p className="contact-value">{t(option.value)}</p>
              <p className="contact-description">{t(option.note)}</p>
              <a
                className={`button ${option.href.startsWith('mailto:') ? 'button-primary' : 'button-secondary'}`}
                href={t(option.href)}
                target={option.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={option.href.startsWith('mailto:') ? undefined : 'noreferrer'}
              >
                {t(option.action)}
                <span aria-hidden="true">↗</span>
              </a>
              {option.detail && <p className="contact-detail">{t(option.detail)}</p>}
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt dual-section" aria-labelledby="contact-brief-title">
        <div>
          <p className="eyebrow">{t("Prepare sua mensagem")}</p>
          <h2 id="contact-brief-title">{t("Conte um pouco sobre o seu desafio.")}</h2>
          <p>{t("Não precisa ter um escopo fechado. Um breve contexto já ajuda a começar.")}</p>
        </div>
        <div>
          <ul className="simple-list">
            {messageChecklist.map((item) => (
              <li key={item}>{t(item)}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">{t("Próximos passos")}</p>
          <h2>{t("Da primeira conversa ao plano de execução.")}</h2>
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
          <p className="eyebrow">{t("Vamos conversar")}</p>
          <h2>{t("Seu próximo projeto começa aqui.")}</h2>
          <div className="cta-actions-inline">
            <a className="button button-primary" href={t(contactLinks.email)}>{t("Enviar e-mail")}</a>
            <a
              className="button button-secondary"
              href={t(contactLinks.whatsapp)}
              target="_blank"
              rel="noreferrer"
            >{t("Falar com um consultor")}</a>
          </div>
        </div>
      </section>
    </main>
  )
}
