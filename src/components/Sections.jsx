import { experience, profile, skills } from "../data/portfolio";
import { SocialLinks } from "./Hero";
import SectionHeading from "./SectionHeading";
export function About() {
  return (
    <section id="a-propos" className="section container about-section">
      <div>
        <SectionHeading number="01" label="À propos de moi">
          Comprendre.
          <br />
          Construire.
          <br />
          <span>Aller plus loin.</span>
        </SectionHeading>
        <div className="about-note">
          <span className="mini-monogram">ec.</span>
          <p>
            Une approche concrète,
            <br />
            un regard curieux.
          </p>
        </div>
      </div>
      <div className="about-copy">
        <p className="lead">
          J’aime transformer des idées en applications que l’on a envie
          d’utiliser.
        </p>
        <p>
          Étudiante en Bachelor Informatique à l’IPSSI Paris, je me spécialise
          dans le développement web Full Stack. Je m’intéresse autant à ce que
          l’on voit à l’écran qu’à la logique qui fait fonctionner une
          application.
        </p>
        <p>
          Ma formation et mes projets me permettent d’explorer le front-end et
          le back-end, de développer ma logique et de gagner en autonomie face
          aux problèmes techniques.
        </p>
        <p>
          Mon prochain cap : une troisième année en alternance pour apprendre au
          sein d’une équipe et contribuer à des projets mêlant développement
          web, innovation et technologies modernes.
        </p>
        <div className="qualities">
          {[
            "Autonomie",
            "Curiosité",
            "Adaptabilité",
            "Esprit logique",
            "Créativité",
          ].map((quality) => (
            <span key={quality}>· {quality}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
export function Skills() {
  return (
    <section id="competences" className="section section-tinted">
      <div className="container">
        <SectionHeading number="02" label="Ma boîte à outils">
          De l’interface <span>aux données.</span>
        </SectionHeading>
        <p className="section-intro">
          Un socle web que je consolide en construisant, et des notions
          complémentaires pour comprendre l’ensemble d’un projet.
        </p>
        <div className="skills-grid">
          {skills.map((group, index) => (
            <article
              key={group.title}
              className={`skill-card ${index < 2 ? "skill-primary" : ""}`}
            >
              <div className="skill-top">
                <span className="icon-box" aria-hidden="true">
                  {group.icon}
                </span>
                <span className="skill-index">0{index + 1}</span>
              </div>
              <p className="skill-caption">{group.caption}</p>
              <h3>{group.title}</h3>
              {group.description ? <p>{group.description}</p> : null}
              <div className="skill-items">
                {group.items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <p className="skills-note">
          ● Des technologies pratiquées en formation et dans mes projets, que je
          continue à approfondir.
        </p>
      </div>
    </section>
  );
}
export function Education() {
  return (
    <section id="parcours" className="section container education-section">
      <div>
        <SectionHeading number="04" label="Parcours & formation">
          Apprendre aujourd’hui.
          <br />
          <span>Construire la suite.</span>
        </SectionHeading>
        <p className="section-intro">
          Une formation généraliste, une direction de plus en plus claire : le
          développement Full Stack.
        </p>
      </div>
      <div className="timeline">
        <article>
          <span className="timeline-dot" />
          <p className="eyebrow">2024 — Aujourd’hui</p>
          <h3>Bachelor Informatique</h3>
          <p className="school">IPSSI Paris</p>
          <p>
            Développement web, systèmes, bases de données, sécurité et gestion
            de projets informatiques.
          </p>
          <span className="timeline-status">Formation en cours</span>
        </article>
        <article>
          <span className="timeline-dot future" />
          <p className="eyebrow">Objectif 2026 — 2027</p>
          <h3>Une troisième année en alternance</h3>
          <p>
            Rejoindre une équipe, contribuer à des applications concrètes et
            approfondir le développement Full Stack.
          </p>
          <span className="timeline-status future-status">Prochaine étape</span>
        </article>
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="experiences" className="section container">
      <SectionHeading number="05" label="Expériences">
        L’apprentissage, <span>sur le terrain.</span>
      </SectionHeading>
      <article className="experience-card">
        <div>
          <span className="outline-label">Stage Informatique</span>
          <h3>Stagiaire UX/UI & Front-end</h3>
          <p className="experience-period">{experience.period}</p>
          <p>
            Entreprise :{" "}
            <span className="placeholder-text">{experience.company}</span>
          </p>
        </div>
        <div>
          <h4>Missions</h4>
          <ul>
            {experience.missions.map((mission, index) => (
              <li key={index}>{mission}</li>
            ))}
          </ul>
          <p className="experience-tech">
            Technologies :{" "}
            <span className="placeholder-text">{experience.technologies}</span>
          </p>
        </div>
      </article>
    </section>
  );
}
export function Interests() {
  const items = [
    {
      icon: "◈",
      title: "Applications Full Stack",
      text: "Relier chaque partie pour donner vie à une idée.",
    },
    {
      icon: "</>",
      title: "Interfaces modernes",
      text: "Trouver l’équilibre entre caractère visuel et lisibilité.",
    },
    {
      icon: "✧",
      title: "Expériences simples",
      text: "Rendre les parcours intuitifs, jusque dans les détails.",
    },
    {
      icon: ">_",
      title: "Outils utiles",
      text: "Automatiser les petites tâches qui prennent du temps.",
    },
  ];
  return (
    <section className="section container interests-section">
      <SectionHeading number="06" label="Ce qui me motive">
        Ce que j’aime <span>construire.</span>
      </SectionHeading>
      <div className="interests-grid">
        {items.map((item) => (
          <article key={item.title}>
            <span className="interest-icon" aria-hidden="true">
              {item.icon}
            </span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function Contact() {
  return (
    <section id="contact" className="section container">
      <div className="contact-panel">
        <div className="contact-orbit" aria-hidden="true" />
        <div className="contact-copy">
          <p className="eyebrow">07 / Et si on échangeait ?</p>
          <h2>
            Une idée, une équipe,
            <br />
            <span>une prochaine étape.</span>
          </h2>
          <p>
            Vous avez un projet, une opportunité d’alternance ou souhaitez
            simplement échanger ? N’hésitez pas à me contacter.
          </p>
          {profile.email ? (
            <a className="button primary" href={`mailto:${profile.email}`}>
              Écrivez-moi ↗
            </a>
          ) : (
            <button className="button secondary" disabled>
              Email à compléter ↗
            </button>
          )}
        </div>
        <div className="contact-details">
          <div>
            <span className="eyebrow">Email</span>
            {profile.email ? (
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            ) : (
              <p className="placeholder-text">Adresse à compléter</p>
            )}
          </div>
          <div>
            <span className="eyebrow">Retrouvons-nous</span>
            <SocialLinks />
          </div>
          <div className="contact-location">Paris / Île-de-France</div>
          <p className="contact-availability">
            ● À la recherche d’une alternance Full Stack
          </p>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="container footer">
      <a className="logo" href="#accueil">
        Cristina<span>.dev</span>
      </a>
      <p>
        © {new Date().getFullYear()} · Conçu et développé par {profile.name}
      </p>
      <a className="back-top" href="#accueil">
        Retour en haut ↑
      </a>
    </footer>
  );
}
