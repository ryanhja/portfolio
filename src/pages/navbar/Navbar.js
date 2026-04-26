import React from "react";
import "./NavBar.css";
import About from "../about/About";
import Home from "../home/Home";
import Education from "../education/Education";
import Experience from "../experience/Experience";
import Project from "../project/Project";
import Contact from "../contact/Contact";
import { Link } from "react-scroll";

const NavBar = () => {
  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="site-header__inner">
          <div className="brand-mark">Rayan</div>
          <nav className="site-nav">
            <Link
              activeClass="active"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-90}
              className="site-nav__link"
            >
              Home
            </Link>
            <Link
              to="about"
              spy
              smooth
              duration={500}
              offset={-90}
              className="site-nav__link"
            >
              About
            </Link>
            <Link
              to="education"
              spy
              smooth
              duration={500}
              offset={-90}
              className="site-nav__link"
            >
              Education
            </Link>
            <Link
              to="experience"
              spy
              smooth
              duration={500}
              offset={-90}
              className="site-nav__link"
            >
              Experience
            </Link>
            <Link
              to="project"
              spy
              smooth
              duration={500}
              offset={-90}
              className="site-nav__link"
            >
              Projects
            </Link>
            <Link
              to="contact"
              spy
              smooth
              duration={500}
              offset={-90}
              className="site-nav__link site-nav__link--button"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>
      <main>
        <section id="home" className="page-section page-section--home">
          <Home />
        </section>
        <section id="about" className="page-section page-section--home">
          <About />
        </section>
        <section id="education" className="page-section page-section--light">
          <Education />
        </section>
        <section id="experience" className="page-section page-section--light">
          <Experience />
        </section>
        <section id="project" className="page-section page-section--light">
          <Project />
        </section>
        <section id="contact" className="page-section page-section--light">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default NavBar;
