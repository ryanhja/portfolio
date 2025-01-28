import React from "react";
import "./Home.css";
import picture from "../../pdp.png";
import Typewriter from "../../components/Typewriter";
const Home = () => {
  return (
    <div className="container_home">
      <div className="container_first_content">
        <div className="container_text">
          <div className="container_hello">
            <span className="hello">Hello</span>
          </div>
          <div className="container_bio">
            I'm{" "}
            <span className="container_name">
              Rayan Stive <br />
              HAJANANTENAINA
            </span>
          </div>
          <div className="container_poste">
            <h1>
              A{" "}
              <span className="poste">
                <Typewriter />
              </span>
            </h1>
          </div>
        </div>
        <div className="container_pdp">
          <img src={picture} alt="avatar" className="avatar" />
        </div>
      </div>
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
    </div>
  );
};

export default Home;
