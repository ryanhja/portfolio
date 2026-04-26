import React from "react";
import "./About.css";

const services = [
  "Data Engineering",
  "Dashboard & BI",
  "Fullstack Development"
];

const stats = [
  { value: "120+", label: "completed data and web deliverables" },
  { value: "95%", label: "client and stakeholder satisfaction" },
  { value: "4+", label: "years building practical solutions" }
];

const About = () => {
  return (
    <div className="section-inner about-page">
      <div className="about-page__grid">
        <div className="about-page__services">
          {services.map((service, index) => (
            <div key={service} className="about-page__service">
              <span className="about-page__line" aria-hidden="true"></span>
              <div>
                <strong>{service}</strong>
                <p>
                  Solutions pensees pour etre lisibles, robustes et agreables a
                  utiliser au quotidien.
                </p>
              </div>
              {index < services.length - 1 ? (
                <span className="about-page__dot" aria-hidden="true"></span>
              ) : null}
            </div>
          ))}
        </div>
        <div className="about-page__content">
          <div className="section-heading about-page__heading">
            <span>WHO I AM?</span>
            <h2>Je construis des experiences data claires et utiles.</h2>
            <p>
              Mon parcours vient de l&apos;ingenierie logicielle et de la data.
              Aujourd&apos;hui, je travaille sur des pipelines ETL, la qualite
              des donnees, l&apos;analyse et les applications web qui rendent
              ces systemes simples a comprendre pour les equipes.
            </p>
          </div>
          <div className="about-page__stats">
            {stats.map((item) => (
              <div key={item.value} className="about-page__stat">
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
