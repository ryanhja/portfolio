import React from "react";
import "./NavBar.css";
import logo from "./../../Logo.png";
import icon from "../../noir.png";
import { NavLink, Outlet } from "react-router-dom";

const NavBar = () => {
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
          <p>Nigth/Light</p>
        </div>
      </div>
      <div className="content">
        <Outlet />
      </div>
    </>
  );
};

export default NavBar;
