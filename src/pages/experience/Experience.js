import React from "react";
import "./Experience.css";

const experiences = [
  {
    period: "Nov 2024 - Present",
    role: "Engineer Big Data & Fullstack",
    company: "Yas, Antananarivo",
    summary:
      "Mise en place de cadres de gouvernance et de qualite de donnees, migration d'environnements, optimisation de pipelines ETL et modernisation des dashboards BI.",
    stack: "Python, DBT, DuckDB, PostgreSQL, Airflow, Docker, Power BI"
  },
  {
    period: "Aug 2023 - Oct 2023",
    role: "Intern - Odoo Developer",
    company: "Ingenosya, Antananarivo",
    summary:
      "Customisation de modules Odoo et support sur plusieurs projets clients avec une forte orientation metier.",
    stack: "Python, Odoo, PostgreSQL"
  },
  {
    period: "Sep 2022 - Apr 2023",
    role: "Intern - Fullstack Web Developer & AI",
    company: "InnovAnalyse, Paris",
    summary:
      "Conception d'une plateforme web, extraction automatisee d'informations PDF via OCR/NLP et deploiement CI/CD sur serveur Ubuntu.",
    stack: "Flask, React, PostgreSQL, OCR, spaCy"
  },
  {
    period: "May 2021 - Oct 2021",
    role: "Intern - Fullstack Web Developer",
    company: "Kairos, Fianarantsoa",
    summary:
      "Developpement d'une application de gestion pour restaurant avec deploiement distant et workflow complet de validation.",
    stack: "Django, Angular, PostgreSQL"
  }
];

const Experience = () => {
  return (
    <div className="section-inner experience">
      <div className="section-heading">
        <span>Experience</span>
        <h2>Des experiences centrees sur la performance et la clarte.</h2>
        <p>
          Une trajectoire qui melange architecture data, automatisation,
          intelligence artificielle et applications web orientees usage.
        </p>
      </div>
      <div className="experience__timeline">
        {experiences.map((item) => (
          <article key={`${item.period}-${item.role}`} className="experience__item">
            <div className="experience__meta">
              <span>{item.period}</span>
            </div>
            <div className="experience__card surface-card">
              <h3>{item.role}</h3>
              <strong>{item.company}</strong>
              <p>{item.summary}</p>
              <small>{item.stack}</small>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
