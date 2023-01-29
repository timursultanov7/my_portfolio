import React from "react";
import "../styles/my-stack.css";

const MyStack = () => {
  return (
    <section id="about" className="my-stack">
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
  );
};

export default MyStack;
