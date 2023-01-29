import React from "react";
import "../styles/navbar.css";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { useContext } from "react";
import { NavContext } from "../context/NavContext";
const MobileNavBar = () => {
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

  const { setIsNavOpen } = useContext(NavContext);

  return (
    <nav className="nav-mobile-wrapper">
      <ul className="nav-items--mobile">
        <li
          onClick={() => setIsNavOpen(false)}
          className="nav-item nav-item--mobile"
        >
          <a className="nav-link  nav-link--mobile" href="#timur">
            Timur
          </a>
        </li>
        <li
          onClick={() => setIsNavOpen(false)}
          className="nav-item nav-item--mobile"
        >
          <a className="nav-link nav-link--mobile" href="#work">
            Work
          </a>
        </li>
        <li
          onClick={() => setIsNavOpen(false)}
          className="nav-item nav-item--mobile"
        >
          <a className="nav-link nav-link--mobile" href="#about">
            About
          </a>
        </li>
        <li
          onClick={() => setIsNavOpen(false)}
          className="nav-item nav-item--mobile"
        >
          <a className="nav-link nav-link--mobile contact-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>

      <ul className="social-media-links social-media-links--mobile">
        <li
          onClick={() => setIsNavOpen(false)}
          className="nav-item nav-item--social-mobile"
        >
          <a
            className="nav-link nav-link--mobile "
            href="https://www.facebook.com/timursultanov77777"
            target="_blank"
          >
            <FaFacebook className="icon icon-nav--mobile" />
          </a>
        </li>
        <li
          onClick={() => setIsNavOpen(false)}
          className="nav-item nav-item--social-mobile"
        >
          <a
            className="nav-link nav-link--mobile"
            href="https://www.linkedin.com/in/timursultanov7/"
            target="_blank"
          >
            <FaLinkedin className="icon icon-nav--mobile" />
          </a>
        </li>
        <li
          onClick={() => setIsNavOpen(false)}
          className="nav-item nav-item--social-mobile"
        >
          <a
            className="nav-link nav-link--mobile"
            href="https://github.com/timursultanov7"
            target="_blank"
          >
            <FaGithub className="icon icon-nav--mobile" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavBar;
