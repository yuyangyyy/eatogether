import React from "react";

import "./Footer.css";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src="./image/LOGO122.png" alt="logo de eat together" />
          </div>

          <div className="copyright-container">
            <p className="footer-copyright">Eatogether© by Wild Code School</p>
          </div>

          <div className="footer-icons">
            <a
              className="fab fa-facebook-f"
              href="https://www.facebook.com/"
              target="_blanck"
            ></a>
            <a
              className="fab fa-twitter"
              href="https://twitter.com/home?lang=fr"
              target="_blanck"
            ></a>
            <a
              className="fab fa-instagram"
              href="https://www.instagram.com/?hl=fr"
              target="_blanck"
            ></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
