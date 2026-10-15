import { profile } from "../data/portfolio";
export function SocialLinks() {
  return (
    <div className="social-links">
      {["github", "linkedin"].map((network) =>
        profile[network] ? (
          <a
            key={network}
            href={profile[network]}
            target="_blank"
            rel="noreferrer"
          >
            {network === "github" ? "GitHub" : "LinkedIn"} ↗
          </a>
        ) : (
          <span key={network} title="Lien à compléter">
            {network === "github" ? "GitHub" : "LinkedIn"}{" "}
            <small>À compléter</small>
          </span>
        ),
      )}
    </div>
  );
}
export default function Hero() {
  return (
    <section id="accueil" className="hero container">
      <div className="hero-copy">
        <div className="availability">
          <i />
          Disponible pour une alternance
        </div>
        <p className="hero-name">Bonjour, je suis Eulalia Cristina Eyegue.</p>
        <h1>
          Développeuse
          <br />
          <span>Full Stack</span>
          <b>.</b>
        </h1>
        <p className="hero-description">
          Étudiante en Bachelor Informatique, je conçois des applications web
          modernes, fonctionnelles et centrées sur l’expérience utilisateur.
        </p>
        <div className="hero-actions">
          <a className="button primary" href="#projets">
            Voir mes projets <span>↗</span>
          </a>
          {profile.cv ? (
            <a className="button secondary" href={profile.cv} download>
              Télécharger mon CV ↓
            </a>
          ) : (
            <button
              className="button secondary"
              disabled
              title="Le CV sera disponible prochainement"
            >
              CV à venir ↓
            </button>
          )}
        </div>
        <div className="hero-bottom">
          <a className="text-link" href="#contact">
            Me contacter ↗
          </a>
          <SocialLinks />
        </div>
      </div>
      <div
        className="developer-art"
        aria-label="Illustration : de l’idée à l’interface et aux données"
      >
        <div className="art-orbit" />
        <div className="art-orbit orbit-two" />
        <span className="art-star">✧</span>
        <div className="code-window">
          <div className="window-bar">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>cristina / profil.js</span>
            <span>&lt;/&gt;</span>
          </div>
          <div className="code-body">
            <span className="code-comment">
              // Une idée. Du code. Une expérience.
            </span>
            <p>
              <b>const</b> développeuse = {"{"}
            </p>
            <p className="indent">
              prénom: <em>'Cristina'</em>,
            </p>
            <p className="indent">
              formation: <em>'Bachelor Informatique'</em>,
            </p>
            <p className="indent">
              spécialité: <em>'Full Stack'</em>,
            </p>
            <p className="indent">approche: [</p>
            <p className="double">
              <em>'comprendre'</em>,
            </p>
            <p className="double">
              <em>'construire'</em>,
            </p>
            <p className="double">
              <em>'progresser'</em>
            </p>
            <p className="indent">],</p>
            <p>{"}"};</p>
            <p className="code-last">
              <b>transformer</b>(idée, <em>application</em>);
              <span className="cursor" />
            </p>
          </div>
          <div className="window-footer">
            <span>● Toujours en apprentissage</span>
            <span>JavaScript</span>
          </div>
        </div>
        <div className="art-chip chip-react">
          <span className="react-symbol" aria-hidden="true">
            ⚛
          </span>
          <div>
            React<small>Créer l’interface</small>
          </div>
        </div>
        <div className="art-chip chip-api">
          <span className="chip-icon" aria-hidden="true">
            ◈
          </span>
          <div>
            De l’idée au produit<small>Interface → API → Données</small>
          </div>
          <span className="chip-check">✓</span>
        </div>
        <span className="art-caption">CURIOSITÉ + LOGIQUE + CRÉATIVITÉ</span>
      </div>
      <div className="hero-meta">
        <span>
          Bachelor Informatique <b>IPSSI Paris</b>
        </span>
        <span>
          Développement <b>Full Stack</b>
        </span>
        <span>
          Basée à <b>Paris / Île-de-France</b>
        </span>
        <a href="#a-propos">
          Découvrir <span>↓</span>
        </a>
      </div>
    </section>
  );
}
