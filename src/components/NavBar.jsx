import React from "react";
import "../styles/navbar.css";

import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const NavBar = () => {
  function checkFlexGap() {
    const flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    const isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if (!isSupported) document.body.classList.add("no-flexbox-gap");
  }

  checkFlexGap();

  return (
    <nav className="nav-container sticky">
      <ul className="nav-items">
        <li className="nav-item nav-item nav-item--main">
          <a className="nav-link" href="#timur">
            Timur
          </a>
        </li>
        <li className="nav-item nav-item nav-item--main">
          <a className="nav-link" href="#work">
            Work
          </a>
        </li>
        <li className="nav-item nav-item--main">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item nav-item nav-item--main">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <ul className="social-media-links">
        <li className="nav-item nav-item nav-item--social">
          <a
            className="nav-link"
            href="https://www.facebook.com/timursultanov77777"
            target="_blank"
          >
            <FaFacebook className="icon" />
          </a>
        </li>
        <li className="nav-item nav-item--social">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/timursultanov7/"
            target="_blank"
          >
            <FaLinkedin className="icon" />
          </a>
        </li>
        <li className="nav-item nav-item--social">
          <a
            className="nav-link"
            href="https://github.com/timursultanov7"
            target="_blank"
          >
            <FaGithub className="icon" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
