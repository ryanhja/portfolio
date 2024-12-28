import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <h1 className="hello">Bonjour !</h1>
        <h1 className="name">
          It's <span>Rayan HAJANANTENAINA</span>
        </h1>
        <h1 className="poste">Engineer BigData / Developper Python</h1>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Home;
