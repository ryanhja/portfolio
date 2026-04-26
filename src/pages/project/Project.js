import React from "react";
import "./Project.css";

const projects = [
  {
    title: "Data Quality Monitoring",
    description:
      "Tableaux de bord et alerting pour suivre la sante des donnees et anticiper les anomalies sur un environnement data warehouse.",
    tags: ["DBT", "Airflow", "Power BI"]
  },
  {
    title: "ETL Modernization",
    description:
      "Refonte de pipelines de transformation avec une logique plus rapide, plus lisible et mieux orchestree pour les equipes data.",
    tags: ["DuckDB", "PostgreSQL", "Docker"]
  },
  {
    title: "OCR & NLP Platform",
    description:
      "Automatisation de l'extraction d'informations depuis des PDF avec une interface web orientee productivite et validation.",
    tags: ["Flask", "spaCy", "React"]
  }
];

const Project = () => {
  return (
    <div className="section-inner project">
      <div className="section-heading">
        <span>Projects</span>
        <h2>Quelques projets qui racontent ma facon de construire.</h2>
        <p>
          Des solutions sobres, utiles et lisibles, avec un equilibre entre
          rigueur technique et experience utilisateur.
        </p>
      </div>
      <div className="project__grid">
        {projects.map((project) => (
          <article key={project.title} className="project__card surface-card">
            <div className="project__top">
              <span>Case study</span>
              <h3>{project.title}</h3>
            </div>
            <p>{project.description}</p>
            <div className="project__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Project;
