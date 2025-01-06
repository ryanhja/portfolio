import React, { useState } from "react";
import "./NavBar.css";
import logo from "./../../Logo.png";
import icon from "../../blanc.png";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

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
    <>
      <div className="navbar">
        <img src={icon} className="logo" alt="logo" />
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
          <button className="rounded p-1" onClick={handleTheme}>
            {theme === "light" ? "Dark" : "Light"}
          </button>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
