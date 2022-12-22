import React from "react";
import "../styles/navbar.css";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="nav-container sticky">
      <ul className="nav-items">
        <li className="nav-item">
          <a className="nav-link" href="#timur">
            Timur
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#work">
            Work
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link contact-link" href="#contact">
            Contact
          </a>
        </li>

        <div>
          <ul className="social-media-links">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.facebook.com/timursultanov77777"
                target="_blank"
              >
                <FaFacebook className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/timursultanov7/"
                target="_blank"
              >
                <FaLinkedin className="icon" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://github.com/timursultanov7"
                target="_blank"
              >
                <FaGithub className="icon" />
              </a>
            </li>
          </ul>
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
