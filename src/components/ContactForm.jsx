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

  return (
    <div className="form-wrapper">
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
            <label className="input-wrapper" labelfor="name">
              Name
              <input
                className="input-item"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </label>
            <label className="input-wrapper" labelfor="phone">
              Phone Number
              <input
                className="input-item"
                type="number"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </label>
          </div>
          <label className="input-wrapper" labelfor="email">
            Email
            <input
              className="input-item  input-email"
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="input-wrapper" labelfor="message">
            Your Message
            <input
              className="input-item input-msg"
              type="text"
              id="message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              required
            />
          </label>

          {/* <input className="input-btn" type="submit" value="Send Message" /> */}

          <a className="input-btn" href="mailto: timursultanov7@gmail.com">
            Send Email
          </a>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
