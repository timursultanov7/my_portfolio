import React from "react";
import "../styles/work.css";

export const Work = () => {
  return (
    <section id="work" className="work">
      <div className="left-side">
        <h2 className="section-title">My Work</h2>

        <div className="project-item-left--1">
          <div className="num-and-title-wrap">
            <span className="title-numer">01.</span>{" "}
            <h3> E-commerce app 'Shopy'</h3>
          </div>
          <div className="lines">
            <div className="vertical-line"></div>
            <div className="grid-line-item-1">
              <p className="work-desc-p">
                E-commerce shop for buying goods. Application that helps people
                to find and buy healthy products.
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
            <span className="title-numer">02.</span> <h3> Web App Omnifood </h3>
          </div>
          <div className="lines">
            <div className="vertical-line"></div>
            <div className="grid-line-item-1">
              <p className="work-desc-p">
                The application for ordering and delivering healthy food for
                everyday.
              </p>
            </div>

            <div className="grid-line-item-2">
              <div className="horizontal-line"></div>

              <p>
                <span className="role">Role: </span>
                Frontend web development
              </p>

              <div className="horizontal-line"></div>
            </div>
            <div className="grid-line-item-3">
              <a
                href="https://omnifoood-app.netlify.app/"
                className="btn"
                target="_blank"
              >
                Go To WebSite
              </a>
            </div>
          </div>
          <img
            src="https://live.staticflickr.com/65535/52621170361_09d884dcff_c.jpg"
            className="img-frame img-frame--2"
          />
        </div>
        <div className="project-item-left--3">
          <div className="num-and-title-wrap">
            <span className="title-numer">03.</span> <h3> Book Buy </h3>
          </div>

          <div className="lines">
            <div className="vertical-line"></div>
            <div className="grid-line-item-1">
              <p className="work-desc-p">
                Book Buy is an app for reading your favorite books online by
                subscription
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
                href="https://book-buy.netlify.app/"
                className="btn"
                target="_blank"
              >
                Go To WebSite
              </a>
            </div>
          </div>
          <img
            src="https://live.staticflickr.com/65535/52649078323_29a83231d0_b.jpg"
            className="img-frame img-frame--3"
          />
        </div>
      </div>

      <div className="right-side flex-center"></div>
    </section>
  );
};
