import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./NavBar.css";
import logo from "../../logo.png";
import Home from "../home/Home";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="main">
      <div className="navbar navbar-light">
        <img src={logo} className="logo" alt="logo" />
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
