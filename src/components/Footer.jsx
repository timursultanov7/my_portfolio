import React from "react";
import "../styles/footer.css";

const Footer = () => {
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
    <footer>
      <p>
        Designed and developed with ❤ by Timur Sultanov. © 2023 All rights
        reserved
      </p>
    </footer>
  );
};

export default Footer;
