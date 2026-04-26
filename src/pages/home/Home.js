import React from "react";
import "./Home.css";
import picture from "../../assets/hero.png";
import resumeFile from "../../assets/CV_Rayan_HAJANANTENAINA.pdf";
import Typewriter from "../../components/Typewriter";
import { Link } from "react-scroll";

const tools = [
  "DBT",
  "Python",
  "Pandas",
  "PostgreSQL",
  "React",
  "Git",
  "Github",
];

const Home = () => {
  return (
    <div className="home">
      <div className="section-inner home__inner">
        <div className="home__hero">
          <div className="home__copy">
            <p className="home__eyebrow">Hello</p>
            <p className="home__name">I&apos;m Rayan</p>
            <h1 className="home__role">
              <span className="home__type">
                <Typewriter />
              </span>
            </h1>
            <p className="home__description">
              Je conçois des pipelines fiables, des dashboards utiles et des
              interfaces web propres qui aident les equipes a mieux decider.
            </p>
            <div className="home__actions">
              <Link
                to="contact"
                spy
                smooth
                duration={500}
                offset={-90}
                className="home__button home__button--ghost"
              >
                Contact Me
              </Link>
              <a
                href={resumeFile}
                download="CV_Rayan_HAJANANTENAINA.pdf"
                className="home__button home__button--primary"
              >
                Get Resume
              </a>
            </div>
          </div>
          <div className="home__visual">
            <span className="home__shape home__shape--left" aria-hidden="true">
              {"<"}
            </span>
            <div className="home__ring" aria-hidden="true"></div>
            <div className="home__portrait-wrap">
              <img src={picture} alt="avatar" className="home__avatar" />
            </div>
            <span className="home__shape home__shape--right" aria-hidden="true">
              {">"}
            </span>
          </div>
        </div>
        <div className="home__stack">
          {tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
