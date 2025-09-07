import React from "react";
import "./Home.css";
import picture from "../../pdp.png";
import Typewriter from "../../components/Typewriter";

const Home = () => {
  return (
    <div className="container main-content">
      <div className="top-content">
        <div className="left-content">
          <div className="introduction">Hello,</div>
          <div className="container_poste">
            <h1>
              I am{" "}
              <span className="poste">
                <Typewriter />
              </span>
            </h1>
          </div>
          <div className="resume-profile">
            A Big Data Engineer with solid expertise in data integration (ETL),
            processing, data quality, data analysis, BI solution design, and the
            development of interactive dashboards to support decision-making.
          </div>
          <div>
            • Technical skills : Python, DBT, Apache Spark, DuckDB, PostgreSQL,
            SQL Server, SQL Server Intégration Service (SSIS), Talend Open
            Studio, Apache NiFi, Docker, Kubernetes, Apache Airflow, Flask,
            Django, OCR, NLP, SpaCy, Metabase, PowerBI, Agile.
            <br />• Soft Skills : Adaptability, Team spirit, Communication, Work
            under pressure, Problem-solving.
          </div>
          <br />
          <div className="container_cv">
            <button className="btn btn-primary">Download CV</button>
          </div>
        </div>
        <div className="right-content">
          <img
            src={picture}
            alt="avatar"
            className="rounded-circle avatar bordered"
          />
        </div>
      </div>
      {/* <div className="bottom-content">
        <div className="container_social_media">
          <a href="#">
            <i className="bi bi-github"></i>
          </a>
          <a href="#">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
