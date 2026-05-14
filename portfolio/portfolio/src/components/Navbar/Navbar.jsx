import React from "react";
import { Link } from "react-scroll";
import "../Navbar/Navbar.css";

export default function Navbar() {
  return (
    <div className="nav-body">
      <nav className="navbar">
        

        <div className="logo">MyPortfolio</div>
        <ul>
          <li>
            <Link to="hero">Home</Link>
          </li>
          <li>
            <Link to="about">About</Link>
          </li>
          <li>
            <Link to="skills">Skills</Link>
          </li>
          <li>
            <Link to="projects">Projects</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
