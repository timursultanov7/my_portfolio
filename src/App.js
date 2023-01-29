import React from "react";

import "./App.css";
import "../src/styles/navbar.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MobileNavBar from "./components/MobileNavBar";
import { useContext } from "react";
import { NavContext } from "./context/NavContext";
import { Timur } from "./components/Timur";
import { Work } from "./components/Work";
import MyStack from "./components/MyStack";
import About from "./components/About";

function App() {
  const { isNavOpen, handleMobileNav } = useContext(NavContext);

  return (
    <div className="app-container">
      <div className="main-wrapper">
        {!isNavOpen ? (
          <a href="#timur">
            <div
              className="icon-div sticky--mobile-nav"
              onClick={handleMobileNav}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={isNavOpen ? "icon-nav black-color" : "icon-nav"}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </div>{" "}
          </a>
        ) : (
          <div className="icon-div" onClick={handleMobileNav}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={isNavOpen ? "icon-nav black-color" : "icon-nav"}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}

        {isNavOpen && <MobileNavBar />}
        <NavBar />

        <Timur />
        <Work />
        <MyStack />
        <About />
        <ContactForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
