import React from "react";
import "../styles/timur.css";

export const Timur = () => {
  return (
    <section id="timur" className="timur">
      <div className="left-side">
        <h1 className="timur-title">
          <span className="shadowed-text">Hi there, I'm</span> Timur Sultanov{" "}
          <span className="shadowed-text">Frontend Web</span> Developer
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

          <a
            href="https://online.flippingbook.com/view/514139642/"
            target="_blank"
            className="btn btn-work"
          >
            See My CV
          </a>
        </div>
      </div>
    </section>
  );
};
