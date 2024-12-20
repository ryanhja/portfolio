import React from "react";
import "./Accueil.css";

const Accueil = () => {
  return (
    <div className="accueil">
      <div className="left">
        <h1 className="hello">Hello! Me,</h1>
        <h1 className="name">
          It's <span>Rayan HAJANANTENAINA</span>
        </h1>
        <h1 className="poste">Engineer BigData / Developper Python</h1>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Accueil;
