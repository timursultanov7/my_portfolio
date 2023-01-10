import React, { useState } from "react";
import "./App.css";
import "../src/styles/navbar.css";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import MobileNavBar from "./components/MobileNavBar";
import { useContext } from "react";
import { NavContext } from "./context/NavContext";

function App() {
  const { isNavOpen, handleMobileNav } = useContext(NavContext);

  return (
    <div className="app-container">
      <div className="main-wrapper">
        {!isNavOpen ? (
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
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

        {isNavOpen ? <MobileNavBar /> : ""}
        <NavBar />
        <section id="timur" className="timur grid">
          <div className="left-side">
            <h1 className="timur-title">
              <span className="shadowed-text">Hi there, I'm</span> Timur
              Sultanov <span className="shadowed-text">Frontend Web</span>{" "}
              Developer
            </h1>
            <p className="title-paragraph">
              I am passionate about solving <br></br> business problems through
              <br></br>
              human-centered design. <br></br> Curious by nature and<br></br>
              business-minded.
            </p>
          </div>

          <div className="right-side">
            <div className="see-my-work-container">
              <img
                className="see-my-work-img"
                src="https://live.staticflickr.com/65535/52589510439_5473ccdb11_n.jpg"
                width="240"
                height="240"
                alt="42A95DAD-D947-4AAF-BFEB-A7F8D6682CAC-removebg-preview (1)"
              />

              <a href="#work" className="btn btn-work">
                See My Work
              </a>
            </div>
          </div>
        </section>
        <section id="work" className="work grid">
          <div className="left-side">
            <h2 className="section-title">My Work</h2>

            <div className="project-item-left--1">
              <div className="num-and-title-wrap">
                <span className="title-numer">01.</span>{" "}
                <h3> E-commerce fullstack website 'Shopy'</h3>
              </div>

              <div className="lines">
                <div className="vertical-line"></div>
                <div className="grid-line-item-1">
                  <p className="work-desc-p">
                    E-commerce shop for buying goods. Application that helps
                    people to find and buy healthy products.
                  </p>
                </div>

                <div className="grid-line-item-2">
                  <div className="horizontal-line"></div>

                  <p>
                    <span className="role">Role: </span>
                    Fullstack Web Development and support of website
                  </p>

                  <div className="horizontal-line"></div>
                </div>
                <div className="grid-line-item-3">
                  <a
                    href="https://shopy-ecommerce-app-react.netlify.app/"
                    className="btn"
                    target="_blank"
                  >
                    Go To WebSite
                  </a>
                </div>
              </div>

              <img
                src="https://live.staticflickr.com/65535/52565210905_0816cc33f5_z.jpg"
                className="img-frame img-frame--1"
              />
            </div>

            <div className="project-item-left--2">
              <div className="num-and-title-wrap">
                <span className="title-numer">02.</span>{" "}
                <h3> E-commerce fullstack website 'Shopy'</h3>
              </div>

              <div className="lines">
                <div className="vertical-line"></div>
                <div className="grid-line-item-1">
                  <p className="work-desc-p">
                    E-commerce shop for buying goods. Application that helps
                    people to find and buy healthy products.
                  </p>
                </div>

                <div className="grid-line-item-2">
                  <div className="horizontal-line"></div>

                  <p>
                    <span className="role">Role: </span>
                    Fullstack Web Development and support of website
                  </p>

                  <div className="horizontal-line"></div>
                </div>
                <div className="grid-line-item-3">
                  <a
                    href="https://shopy-ecommerce-app-react.netlify.app/"
                    className="btn"
                    target="_blank"
                  >
                    Go To WebSite
                  </a>
                </div>
              </div>

              <img
                src="https://live.staticflickr.com/65535/52565210905_0816cc33f5_z.jpg"
                className="img-frame img-frame--2"
              />
            </div>
            <div className="project-item-left--3">
              <div className="num-and-title-wrap">
                <span className="title-numer">03.</span>{" "}
                <h3> E-commerce fullstack website 'Shopy'</h3>
              </div>

              <div className="lines">
                <div className="vertical-line"></div>
                <div className="grid-line-item-1">
                  <p className="work-desc-p">
                    E-commerce shop for buying goods. Application that helps
                    people to find and buy healthy products.
                  </p>
                </div>

                <div className="grid-line-item-2">
                  <div className="horizontal-line"></div>

                  <p>
                    <span className="role">Role: </span>
                    Fullstack Web Development and support of website
                  </p>

                  <div className="horizontal-line"></div>
                </div>
                <div className="grid-line-item-3">
                  <a
                    href="https://shopy-ecommerce-app-react.netlify.app/"
                    className="btn"
                    target="_blank"
                  >
                    Go To WebSite
                  </a>
                </div>
              </div>
              <img
                src="https://live.staticflickr.com/65535/52565210905_0816cc33f5_z.jpg"
                className="img-frame img-frame--3"
              />
            </div>
          </div>

          <div className="right-side flex-center"></div>
        </section>
        <section id="about" className="my-stack grid">
          <div className="left-side  height-110vh">
            {" "}
            {/* <h2 className="section-title">My Stack</h2> */}
          </div>
          <div className="right-side height-110vh"> </div>

          {/* <h2 className="section-title">My Stack</h2> */}
          <div className="my-stack-container">
            <h2 className="section-title">My Stack</h2>
            <div className="cards">
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/143/143655.png"
                />
                <p className="subtitle-img">HTML</p>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/732/732190.png"
                />
                <p className="subtitle-img">CSS</p>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
                />
                <p className="subtitle-img">Javascript</p>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png"
                />
                <p className="subtitle-img">React.js</p>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968322.png"
                />
                <p className="subtitle-img">Node.js</p>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png"
                />
                <p className="subtitle-img">PostgresQL</p>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                />
                <p className="subtitle-img">Bootstrap</p>
              </div>
              <div className="card">
                <img
                  className="card-img"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968853.png"
                />
                <p className="subtitle-img">Git</p>
              </div>
            </div>
          </div>
        </section>
        <section className="about grid ">
          <div className="left-side height-110vh">
            <div className="about-subsection">
              <figure className="description-figure">
                <h2 className="section-title about-me-title">About Me</h2>
                <img
                  className="figure-img"
                  src="https://live.staticflickr.com/65535/52607097288_e1bf2c6e51_n.jpg"
                  width="240"
                  height="240"
                  alt="IMG_2459_3120x4160-removebg-removebg-preview"
                />

                <p className="section-description">
                  I am an extremely curious and self-motivated individual with a
                  huge passion for design and coding.<br></br>I take a very
                  positive and ego-free approach to all aspects of my life, and
                  I carry a strong work ethic with me wherever I go. I'm always
                  passionate about solving complex problems by simple solutions.
                  <br></br>
                  <br></br>I have graduated from Moscow National Research
                  University of Higher School of Economics (bachelor's degree)
                  of faculty: Business-Informatics.
                  <br></br>Since 2021 I'm Ole Hadash and I live in Tel Aviv.
                  Currently, I'm seeking for a new opportunities in Web
                  Development. I speak English, Russian and also I learn Hebrew.
                </p>
              </figure>
            </div>
          </div>

          <div className="right-side height-110vh "></div>
        </section>
        <section id="contact" className="contact">
          <h2 className="section-title-contact">Contact Me</h2>

          <ContactForm />
        </section>
        <div className="div-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
