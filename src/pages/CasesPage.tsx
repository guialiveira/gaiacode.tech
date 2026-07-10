import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { backgroundRefs, caseStudies, contactLinks, sectors } from '../siteData'

export function CasesPage() {
  usePageMeta(
    'Cases | gaiacode',
    'Historico de experiencia e contextos de entrega usados como base para o posicionamento institucional da gaiacode.',
  )

  return (
    <main>
      <section className="page-hero">
        <p className="eyebrow">Cases e repertorio</p>
        <h1>Experiencia aplicada a problemas reais, reorganizada como marca de empresa.</h1>
        <p className="page-lead">
          Esta pagina nao vende volume ficticio. Ela mostra o tipo de contexto onde a base tecnica
          ja foi testada e o que isso permite entregar agora sob a marca gaiacode.
        </p>
      </section>

      <section className="trust-strip" aria-label="Historico de contexto">
        <p>Ambientes, marcas e operacoes que ajudam a formar esse repertorio:</p>
        <div className="trust-list">
          {backgroundRefs.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Leituras de caso</p>
          <h2>Recortes de experiencia que sustentam o novo posicionamento.</h2>
        </div>

        <div className="case-grid">
          {caseStudies.map((study) => (
            <article className="case-card" key={study.title}>
              <p className="case-label">{study.clientLine}</p>
              <h3>{study.title}</h3>
              <p>{study.summary}</p>
              <ul>
                {study.outcomes.map((outcome) => (
                  <li key={outcome}>{outcome}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-heading">
          <p className="eyebrow">Setores onde isso conversa bem</p>
          <h2>Operacoes com regra de negocio, dados dispersos e demanda por clareza tecnica.</h2>
        </div>

        <div className="sector-list">
          {sectors.map((sector) => (
            <span key={sector}>{sector}</span>
          ))}
        </div>
      </section>

      <section className="section cta-section">
        <div className="cta-card">
          <div>
            <p className="eyebrow">Proximo movimento</p>
            <h2>Se o seu contexto parece com algum desses cenarios, o site ja cumpriu o papel.</h2>
            <p>
              A proposta da pagina de cases e reduzir duvida de capacidade. A partir daqui, a
              conversa precisa sair do geral e entrar no seu problema especifico.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="button button-primary"
              href={contactLinks.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              Conversar sobre contexto
            </a>
            <Link className="button button-secondary" to="/contato">
              Ir para contato
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
