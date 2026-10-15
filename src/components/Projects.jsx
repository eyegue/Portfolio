import { useState } from "react";
import { projects } from "../data/projects";
import SectionHeading from "./SectionHeading";

const filters = ["Tous", ...new Set(projects.map((project) => project.filter))];

function ProjectVisual({ project }) {
  if (project.image)
    return (
      <img
        src={project.image}
        alt={`Aperçu du projet ${project.title}`}
        loading="lazy"
        width="1440"
        height="900"
      />
    );
  return (
    <div className={`project-illustration ${project.id}`}>
      {project.id === "jobtrack" ? (
        <div className="mini-board">
          <div className="board-title">
            JobTrack<span>MON ESPACE CANDIDATURES</span>
          </div>
          <div className="board-columns">
            {["À envoyer", "En cours", "Entretien"].map((label, index) => (
              <div key={label}>
                <span>{label}</span>
                <div className="mini-task">
                  <i />
                  <b />
                  <small />
                </div>
                {index !== 2 ? (
                  <div className="mini-task">
                    <i />
                    <b />
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      ) : project.id === "security" ? (
        <>
          <div className="shield-art">
            <svg
              width="66"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth=".8"
              aria-hidden="true"
            >
              <path d="M12 3 4 6v6c0 5 8 9 8 9s8-4 8-9V6ZM8 12l3 3 5-6" />
            </svg>
          </div>
          <div className="security-tags">
            <span>SQL</span>
            <span>Analyse</span>
            <span>XSS</span>
          </div>
        </>
      ) : (
        <>
          <div className="cube-art">
            <div />
            <div />
            <div />
          </div>
          <span className="unity-label">EXPLORER UNE AUTRE DIMENSION</span>
        </>
      )}
      <span className="illustration-label">Illustration du projet</span>
    </div>
  );
}
export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const visible = projects.filter(
    (project) => filter === "Tous" || project.filter === filter,
  );
  return (
    <section id="projets" className="section container">
      <div className="projects-header">
        <SectionHeading number="03" label="Mes réalisations">
          Des idées qui prennent <span>forme.</span>
        </SectionHeading>
        <p>
          Des projets de formation et personnels.
          <br />À chaque réalisation, une nouvelle étape.
        </p>
      </div>
      <div className="project-toolbar">
        <div className="project-filters" aria-label="Filtrer les projets">
          {filters.map((item) => (
            <button
              key={item}
              aria-pressed={filter === item}
              onClick={() => setFilter(item)}
            >
              {item}
              {item === "Tous" ? (
                <span>{String(projects.length).padStart(2, "0")}</span>
              ) : null}
            </button>
          ))}
        </div>
        <span className="project-count" aria-live="polite">
          {visible.length} projet{visible.length > 1 ? "s" : ""} à découvrir
        </span>
      </div>
      <div className="projects-grid">
        {visible.map((project) => (
          <article
            className={`project-card ${project.featured ? "featured" : ""}`}
            key={project.id}
          >
            <div className="project-cover">
              <ProjectVisual project={project} />
              <span className="project-number">
                {String(projects.indexOf(project) + 1).padStart(2, "0")}
              </span>
              {project.featured ? (
                <span className="cover-label">Projet à la une</span>
              ) : null}
            </div>
            <div className="project-copy">
              <p
                className={`eyebrow ${project.id === "jobtrack" ? "in-progress" : ""}`}
              >
                {project.id === "jobtrack" ? "● " : ""}
                {project.category}
              </p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tags">
                {project.stack.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-learning">
                <span>
                  {project.id === "jobtrack"
                    ? "CE QUE JE SOUHAITE CONSTRUIRE"
                    : "CE QUE CE PROJET DÉMONTRE"}
                </span>
                <p>{project.demonstrates}</p>
              </div>
              {project.github || project.demo ? (
                <div className="project-links">
                  {project.github ? (
                    <a href={project.github} target="_blank" rel="noreferrer">
                      Code GitHub ↗
                    </a>
                  ) : null}
                  {project.demo ? (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      Voir la démo ↗
                    </a>
                  ) : null}
                </div>
              ) : (
                <span className="project-pending">
                  {project.note || "Code & démo · Liens à venir"}
                </span>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
