import React from "react";
import "./Home.css";
import picture from "../../profil.png";
const Home = () => {
  return (
    <div className="home">
      <div className="left">
        <span className="hello">HELLO !</span>
        <h1 className="name">
          I'm{" "}
          <span className="my-name">
            Miaritiana Rayan Stive <br />
            HAJANANTENAINA
          </span>
        </h1>
        <h1 className="poste">A Enginner BigData / Developper Python </h1>
      </div>
      <div className="right">
        <img src={picture} alt="avatar" className="avatar" />
      </div>
    </div>
  );
};

export default Home;
