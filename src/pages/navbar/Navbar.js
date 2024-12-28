import React from "react";
import "./NavBar.css";
import logo from "./../../Logo.png";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <img src={logo} className="logo" alt="logo" />
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/education">Education</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/project">Projects</NavLink>
          <NavLink to="/contact">Contact Me</NavLink>
        </nav>
      </header>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
