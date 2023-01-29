import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import "../styles/contactForm.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  const [formIsSent, setFormIsSent] = useState(false);

  const obj = { name, phone, email, msg };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(obj);

    if (obj) {
      setName("");
      setPhone("");
      setEmail("");
      setMsg("");

      setFormIsSent(true);
    }
  };

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
    <div className="form-wrapper" id="contact">
      {formIsSent ? (
        <div className="thanks-container">
          <div className="social-network">
            <ul className="social-network-list">
              <li className="social-network-item">
                {" "}
                <a
                  className="nav-link"
                  href="https://www.facebook.com/timursultanov77777"
                  target="_blank"
                >
                  <FaFacebook className="icon-contact" />
                </a>{" "}
              </li>
              <li className="social-network-item">
                <a
                  className="nav-link"
                  href="https://www.linkedin.com/in/timursultanov7/"
                  target="_blank"
                >
                  <FaLinkedin className="icon-contact" />
                </a>
              </li>
              <li className="social-network-item">
                <a
                  className="nav-link"
                  href="https://github.com/timursultanov7"
                  target="_blank"
                >
                  <FaGithub className="icon-contact" />
                </a>
              </li>
            </ul>
          </div>
          <div className="thanks-msg">
            <h3>
              Thank you!!!<br></br> Your message has been recieved!!!
            </h3>
          </div>
        </div>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="name-phone-container">
            <div className="input-wrapper">
              <label className="" labelfor="name">
                Name
              </label>
              <input
                className="input-item input-name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                placeholder="John Smith"
              />
            </div>

            <div className="input-wrapper">
              <label labelfor="phone">Phone Number</label>
              <input
                className="input-item input-phone"
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="0123456789"
              />
            </div>
          </div>

          <div className="input-wrapper">
            <label labelfor="email">Email</label>
            <input
              className="input-item  input-email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="john@me.com"
            />
          </div>
          <div className="input-wrapper">
            <label labelfor="message">Your Message</label>
            <input
              className="input-item input-msg"
              type="text"
              id="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
              placeholder="Your message"
            />
          </div>

          <input className="input-btn" type="submit" value="SEND MESSAGE" />
        </form>
      )}
    </div>
  );
};

export default ContactForm;
