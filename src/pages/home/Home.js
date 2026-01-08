import React from "react";
import "./Home.css";
import picture from "../../avatar.jpg";
import Typewriter from "../../components/Typewriter";

const Home = () => {
  return (
    <div className="home ">
      <div className="row pt-4  d-flex align-items-center justify-content-center">
        <div className="col-sm-6 text-light hero-text">
          <h1 className="display-5 fw-bold">
            Hello <br /> I'm{" "}
            <span className="highlight">Rayan Hajanantenaina</span>
          </h1>
          <h1 className="poste">
            <span className="typewriter">
              <Typewriter />
            </span>
          </h1>
          <br />
          <div className="d-flex gap-3">
            <button className="btn btn-outline-info btn-lg">Contact Me</button>
            <button className="btn btn-outline-light btn-lg">Get Resume</button>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="code-header">
            <div class="tools">
              <div class="circle">
                <span class="red box"></span>
              </div>
              <div class="circle">
                <span class="yellow box"></span>
              </div>
              <div class="circle">
                <span class="green box"></span>
              </div>
            </div>
          </div>
          <div className="code-card">
            <pre className="code-content text-start">
              {`WITH profile AS (
  SELECT 
      'HAJANANTENAINA' AS first_name,
      'Miaritiana Rayan Stive' AS last_name,
      ARRAY['Big Data Fullstack Engineer', 'Data Engineer/Analyst'] AS title,
      ARRAY['DBT', 'PostgreSQL', 'Apache Airflow', 'Docker','PowerBI'] AS skills
)
SELECT 
  first_name, 
  last_name, 
  title, 
  skills   
FROM profile;
`}
            </pre>
          </div>
        </div>
      </div>
      <div id="about" className="about d-flex align-items-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8">
              <h5 className="text-success fw-bold mb-3">WHO I AM?</h5>
              <p className="about-text">
                My name is HAJANANTENAINA Miaritiana Rayan Stive, I'm a Big Data
                Engineer with solid expertise in data integration (ETL),
                processing, data quality, data analysis, BI solution design, and
                the development of interactive dashboards to support
                decision-making.
                <br />
                • Technical skills : Python, DBT, Apache Spark, DuckDB,
                PostgreSQL, SQL Server, SQL Server Intégration Service (SSIS),
                Talend Open Studio, Apache NiFi, Docker, Kubernetes, Apache
                Airflow, Flask, Django, OCR, NLP, SpaCy, Metabase, PowerBI,
                Agile.
                <br />• Soft Skills : Adaptability, Team spirit, Communication,
                Work under pressure, Problem-solving.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <img
                src={picture}
                alt="avatar"
                className="img-fluid rounded about-img"
              />
              <div className="about-label">ABOUT ME</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
