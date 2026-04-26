import React from "react";
import "./Education.css";

const educationList = [
  {
    period: "2021 - 2023",
    degree: "Master in Computer Modeling and Engineering",
    school: "EMIT Fianarantsoa, Madagascar",
    details:
      "Probability, statistics, machine learning, deep learning, data analysis and decision support systems."
  },
  {
    period: "2017 - 2020",
    degree: "Bachelor in Internet and Intranet Application Development",
    school: "EMIT Fianarantsoa, Madagascar",
    details:
      "Algorithms, object-oriented programming, applied mathematics and web application development."
  }
];

const Education = () => {
  return (
    <div className="section-inner education">
      <div className="section-heading">
        <span>Education</span>
        <h2>Une base solide en ingenierie et en intelligence artificielle.</h2>
        <p>
          Un parcours construit autour de l&apos;informatique, de la modelisation
          et de l&apos;analyse de donnees, avec une orientation tres pratique.
        </p>
      </div>
      <div className="education__grid">
        {educationList.map((item) => (
          <article key={item.period} className="education__card surface-card">
            <span className="education__period">{item.period}</span>
            <h3>{item.degree}</h3>
            <strong>{item.school}</strong>
            <p>{item.details}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Education;
