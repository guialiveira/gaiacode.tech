import { useLanguage } from '../language'
import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { contactLinks, processSteps, services, stackItems, supportProblems } from '../siteData'

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
  const { t, localPath } = useLanguage()
  usePageMeta()

  return (
    <main>
      <section className="page-hero services-hero">
        <p className="eyebrow">{t("Servicos")}</p>
        <h1>{t("Sistemas, suporte e infraestrutura de TI para sua empresa.")}</h1>
        <p className="page-lead">{t("Do desenvolvimento de sistemas à manutenção de computadores e notebooks. A gaiacode conecta software, suporte técnico e infraestrutura para reduzir interrupções e simplificar o dia a dia da sua equipe.")}</p>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">{t("Nossos serviços")}</p>
          <h2>{t("Da máquina de trabalho ao sistema da empresa.")}</h2>
        </div>
        <div className="services-grid services-grid-large">
          {services.map((service) => (
            <article className="service-card service-card-featured" key={service.title}>
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

      <section className="section section-alt" aria-labelledby="support-problems-title">
        <div className="section-heading">
          <p className="eyebrow">{t("Como podemos ajudar")}</p>
          <h2 id="support-problems-title">{t("Problemas de TI que atrapalham sua rotina.")}</h2>
          <p>{t("Reconheceu alguma dessas situações? Conte o que está acontecendo para avaliarmos o próximo passo.")}</p>
        </div>
        <div className="process-grid">
          {supportProblems.map((problem) => (
            <article className="service-card" key={problem.title}>
              <h3>{t(problem.title)}</h3>
              <p>{t(problem.description)}</p>
            </article>
          ))}
        </div>
        <div className="inline-actions">
          <Link className="button button-primary" to={localPath("/contato")}>{t("Solicitar atendimento de TI")}</Link>
        </div>
        <p className="support-scope">{t("O escopo, os prazos e a necessidade de atendimento presencial são alinhados após entender a demanda. Peças, licenças e serviços são definidos na proposta.")}</p>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">{t("Formatos de entrada")}</p>
          <h2>{t("O projeto comeca pelo recorte certo.")}</h2>
        </div>

        <div className="process-grid">
          {formats.map((format, index) => (
            <article className="process-card" key={format.title}>
              <span className="process-index">0{index + 1}</span>
              <h3>{t(format.title)}</h3>
              <p>{t(format.description)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section dual-section">
        <div className="dual-block">
          <p className="eyebrow">{t("Como trabalhamos")}</p>
          <h2>{t("Clareza antes de codigo. Entrega antes de discurso.")}</h2>
          <div className="process-mini-list">
            {processSteps.map((step) => (
              <article key={step.title}>
                <h3>{t(step.title)}</h3>
                <p>{t(step.description)}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="dual-block dual-block-accent">
          <p className="eyebrow">{t("Base tecnica")}</p>
          <h2>{t("Stack moderna para produtos e sistemas corporativos.")}</h2>
          <div className="stack-list">
            {stackItems.map((item) => (
              <span key={item}>{t(item)}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-band">
          <p className="eyebrow">{t("Proximo passo")}</p>
          <h2>{t("Se a demanda ainda esta aberta, o primeiro servico pode ser estruturar o caminho.")}</h2>
          <div className="cta-actions-inline">
            <a
              className="button button-primary"
              href={t(contactLinks.whatsapp)}
              target="_blank"
              rel="noreferrer"
            >{t("Falar com um consultor")}</a>
            <Link className="button button-secondary" to={localPath("/cases")}>{t("Ver repertorio")}</Link>
          </div>
        </div>
      </section>
    </main>
  )
}
