import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section className="about">
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
            I am an extremely curious and self-motivated individual with a huge
            passion for design and coding.<br></br>I take a very positive and
            ego-free approach to all aspects of my life, and I carry a strong
            work ethic with me wherever I go. I'm always passionate about
            solving complex problems by simple solutions.
            <br></br>
            <br></br>I have graduated from Moscow National Research University
            of Higher School of Economics (bachelor's degree) of faculty:
            Business-Informatics.
            <br></br>Since 2021 I'm Ole Hadash and I live in Tel Aviv.
            Currently, I'm seeking for a new opportunities in Web Development. I
            speak English, Russian and also I learn Hebrew.
          </p>
        </figure>
      </div>
    </section>
  );
};

export default About;
