import React from "react";
import "./NavBar.css";
import logo from "./../../Logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="logo" />
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Education</a>
        </li>
        <li>
          <a href="#">Experience</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contact Me</a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
