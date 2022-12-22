import React, { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="app-container">
      <NavBar />

      <main className="main-wrapper">
        <div className="left-side">
          {" "}
          <div id="timur" className="timur item">
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

            <a href="#about" className="btn">
              Reach Out To Me
            </a>
          </div>
          <div id="work" className="work item">
            <h1 className="section-title">My Work</h1>
            {/* <h2>E-commerce fullstack website 'Shopy'</h2>

            <p>
              E-commerce shop for buying goods. Application that helps people to
              find and buy healthy products.
            </p> */}
            <div className="num-and-title-wrap">
              <span className="title-numer">01.</span>{" "}
              <h2> E-commerce fullstack website 'Shopy'</h2>
            </div>

            <div className="lines">
              <div className="vertical-line"></div>
              <div className="grid-line-item-1">
                <p>
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

            <h1 className="section-title">My Skills</h1>
          </div>
          <div id="about" className="about item">
            <h1>About</h1>
            <p>
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.{" "}
            </p>
          </div>
          <div id="contact" className="contact item">
            <h1>Contact</h1>
            <p>
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.{" "}
            </p>
          </div>
        </div>

        <div className="right-side">
          <div className="see-my-work-btn">
            <a href="#work" className="btn btn-work">
              See My Work
            </a>
          </div>

          <div className="frame">
            <img
              src="https://live.staticflickr.com/65535/52565210905_0816cc33f5_z.jpg"
              className="img-frame"
            />
          </div>
        </div>

        {/* <a data-flickr-embed="true" href="https://www.flickr.com/photos/196758271@N06/52565210905/in/dateposted-public/" title="img-frame-1"><img src="https://live.staticflickr.com/65535/52565210905_0816cc33f5_z.jpg" width="640" height="343" alt="img-frame-1"></a><script async src="//embedr.flickr.com/assets/client-code.js" charset="utf-8"></script> */}

        <div>
          <Footer />
        </div>
      </main>

      <main className="mobile-main-wrapper">
        {" "}
        <div className="mobile-top-part">
          {" "}
          <div id="timur" className="timur item">
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

            <a href="#about" className="btn">
              Reach Out To Me
            </a>
          </div>
          <div id="work" className="work item">
            <h1 className="section-title">My Work</h1>
            {/* <h2>E-commerce fullstack website 'Shopy'</h2>

            <p>
              E-commerce shop for buying goods. Application that helps people to
              find and buy healthy products.
            </p> */}
            <div className="num-and-title-wrap">
              <span className="title-numer">01.</span>{" "}
              <h2> E-commerce fullstack website 'Shopy'</h2>
            </div>

            <div className="lines">
              <div className="vertical-line"></div>
              <div className="grid-line-item-1">
                <p>
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

            <h1 className="section-title">My Skills</h1>
          </div>
          <div id="about" className="about item">
            <h1>About</h1>
            <p>
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.{" "}
            </p>
          </div>
          <div id="contact" className="contact item">
            <h1>Contact</h1>
            <p>
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.
              Exercitation officia officia nostrud reprehenderit non.Labore
              velit ad sunt deserunt ex dolor minim dolor minim pariatur mollit
              ea nostrud.Irure non deserunt quis est ex sit adipisicing nisi.In
              ipsum sint id voluptate excepteur duis ullamco aliquip cillum
              tempor mollit ipsum.Deserunt laboris fugiat tempor reprehenderit
              exercitation excepteur nostrud sit amet.Eu quis est ad proident
              do.Elit cillum labore laboris duis Lorem eiusmod officia quis.{" "}
            </p>
          </div>
        </div>
        {/* <div className="right-side">
          <div className="see-my-work-btn">
            <a href="#work" className="btn btn-work">
              See My Work
            </a>
          </div>

          <div className="frame">
            <img
              src="https://live.staticflickr.com/65535/52565210905_0816cc33f5_z.jpg"
              className="img-frame"
            />
          </div>
        </div> */}
        {/* <div>
          <Footer />
        </div> */}
      </main>
    </div>
  );
}

export default App;
