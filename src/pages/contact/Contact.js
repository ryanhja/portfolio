import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="section-inner contact">
      <div className="contact__card surface-card">
        <div className="contact__copy">
          <span>Contact</span>
          <h2>Discutons de votre prochain projet data ou produit web.</h2>
          <p>
            Disponible pour echanger sur des besoins en data engineering,
            analyse, dashboards, automatisation et experiences web modernes.
          </p>
        </div>
        <div className="contact__links">
          <a href="mailto:rayan@example.com" className="contact__link">
            rayan@example.com
          </a>
          <a href="https://www.linkedin.com" className="contact__link">
            LinkedIn
          </a>
          <a href="https://github.com" className="contact__link">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
