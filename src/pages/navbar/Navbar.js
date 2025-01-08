import React, { useState } from "react";
import "./NavBar.css";
import noire from "./../../noir.png";
import blanc from "../../blanc.png";
import { NavLink, Outlet } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";

const NavBar = () => {
  const [theme, setTheme] = useState("dark");

  const handleTheme = () => {
    if (theme === "light") {
      document.documentElement.setAttribute("data-bs-theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.setAttribute("data-bs-theme", "light");
      setTheme("light");
    }
  };

  return (
    <div className="container">
      <div className="header">
        {theme === "light" ? (
          <div className="navbar navbar-light">
            <img src={blanc} className="logo" alt="logo" />
            <div className="nav">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "list-menu active" : "list-menu"
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "list-menu active" : "list-menu"
                }
              >
                Education
              </NavLink>
              <NavLink
                to="/experience"
                className={({ isActive }) =>
                  isActive ? "list-menu active" : "list-menu"
                }
              >
                Experience
              </NavLink>
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  isActive ? "list-menu active" : "list-menu"
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "list-menu active" : "list-menu"
                }
              >
                Contact Me
              </NavLink>
              <i className="bi bi-moon-fill" onClick={handleTheme}></i>
            </div>
          </div>
        ) : (
          <div className="navbar navbar-dark">
            <img src={noire} className="logo" alt="logo" />
            <div className="nav">
              <NavLink to="/" className="list-menu">
                Home
              </NavLink>
              <NavLink to="/education" className="list-menu">
                Education
              </NavLink>
              <NavLink to="/experience" className="list-menu">
                Experience
              </NavLink>
              <NavLink to="/project" className="list-menu">
                Projects
              </NavLink>
              <NavLink to="/contact" className="list-menu">
                Contact Me
              </NavLink>
              <i className="bi bi-sun-fill" onClick={handleTheme}></i>
            </div>
          </div>
        )}
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default NavBar;
