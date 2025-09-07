import React from "react";

const Experience = () => {
  return (
    <div className="container experience">
      <h1>EXPERIENCES</h1>
      <div className="experience-list">
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>November 2024 – Present</p>
          <p>Engineer BigData & Fullstack</p>
          <p>Yas – Antananarivo, Madagascar</p>
          <p>
            • Initiated the implementation of a data governance and data quality
            framework for the Data Warehouse platform of Yas Madagascar and Yas
            Comores. Defined data management rules, automated data quality
            checks, built dashboards to monitor data health, and implemented an
            alert system for anomalies.
            <br />
            • Migrated jobs and data to the new server in order to identify and
            remove obsolete or redundant tables, and to adopt modern data
            processing tools and architectures to improve server performance.
            <br />
            • Migrated Business Objects dashboards to Power BI dashboards to
            improve user experience and eliminate email-based data sharing.
            <br />
            • Improved data pipeline performance by leveraging modern tools such
            as dbt and DuckDB for data transformation and optimization, and
            Apache Airflow for job orchestration and real-time notifications via
            email and Microsoft Teams.
            <br />• Shared knowledge with the team on modern data processing
            architecture, including the use of DBT for data transformation and
            data quality testing, performance optimization of ETL pipelines with
            DuckDB, and job orchestration using Apache Airflow.
          </p>
        </div>
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>August 2023 - October 2023</p>
          <p>Intern – Odoo Developer</p>
          <p>Ingenosya – Antananarivo, Madagascar</p>
          <p>
            • Contributed to the enhancement and customization of the company’s
            internal Odoo platform.
            <br />• Participated in multiple client projects, providing
            technical support and implementing tailored business solutions.
          </p>
        </div>
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>September 2022 - April 2023</p>
          <p>Intern – Fullstack Web Developer & Artificial Intelligence</p>
          <p>InnovAnalyse – Paris, France</p>
          <p>
            • Designed and developed a web platform for the automatic generation
            of financial calculations related to the Research Tax Credit (CIR).
            <br />• Built an automated system to extract information from PDF
            files by combining OCR and NLP
            <br />• Trained and deployed a custom NLP model to identify and
            extract domain-specific fields from textual data.
            <br />• Deployed the application on an Ubuntu server using a GitLab
            CI/CD pipeline.
          </p>
        </div>

        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>May 2021 - October 2021</p>
          <p>Intern – Fullstack Web Developer,</p>
          <p>Kairos – Fianarantsoa, Madagascar</p>
          <p>
            • Designed and developed a web application to manage restaurant's
            operations, including customer management, orders, inventory, and
            delivery.
            <br />• Deployed the application on a remote server for testing and
            project validation.
            <br />
            Skills : Python, Django, Angular, Bootstrap, PostgreSQL
          </p>
        </div>
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>December 2019 - March 2020</p>
          <p>Intern – Web Developer</p>
          <p>CENI – Antsirable, Madagascar </p>
          <p>
            • Designed and implemented a web application to manage and track
            materials accounting processes.
            <br />
            Skills : PHP, CodeIgniter, Bootstrap, MySQL
          </p>
        </div>
        <div className="mt-4 p-5 bg-secondary text-white rounded">
          <p>October 2018 - February 2019</p>
          <p>Intern – Software Developer</p>
          <p>Ministry of Finance and Budget – Fianarantsoa, Madagascar</p>
          <p>
            • Designed and implemented a desktop application to automate
            validation of precarious services.
            <br />
            Skills : Java, MySQL
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
