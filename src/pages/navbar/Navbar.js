import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";
import noire from "./../../noir.png";
import blanc from "../../blanc.png";
import Home from "../home/Home";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import { Link } from "react-scroll";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    const element = document.querySelector(".theme");
    if (theme === "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      element.classList.replace("theme_light", "theme_dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      element.classList.replace("theme_dark", "theme_light");
      setTheme("light");
    }
  };

  return (
    <div className="main">
      <div
        className={`navbar ${
          theme === "light" ? "navbar-light" : "navbar-dark"
        }`}
      >
        <img
          src={theme === "light" ? blanc : noire}
          className="logo"
          alt="logo"
        />
        <div className="nav">
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
            className="list-menu"
          >
            Home
          </Link>
          <Link
            to="education"
            spy
            smooth
            duration={500}
            offset={-70}
            className="list-menu"
          >
            Education
          </Link>
          <Link
            to="experience"
            spy
            smooth
            duration={500}
            offset={-70}
            className="list-menu"
          >
            Experience
          </Link>
          <Link
            to="project"
            spy
            smooth
            duration={500}
            offset={-70}
            className="list-menu"
          >
            Projects
          </Link>
          <Link
            to="contact"
            spy
            smooth
            duration={500}
            offset={-70}
            className="list-menu"
          >
            Contact Me
          </Link>
          <i className="bi bi-sun-fill" onClick={handleTheme}></i>
        </div>
      </div>
      <div className="body">
        <section id="home" className="home-page">
          <Home />
        </section>
        <section id="education" className="education-page">
          <Education />
        </section>
        <section id="experience" className="experience-page">
          <Experience />
        </section>
        <section id="project" className="projet-page">
          <Project />
        </section>
        <section id="contact" className="contact-page">
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default NavBar;
