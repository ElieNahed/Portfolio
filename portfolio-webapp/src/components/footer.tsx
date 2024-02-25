import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <hr></hr>
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/ElieNahed"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>

        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/elie-nahed-18604420b "
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://api.whatsapp.com/send?phone=96176483507"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </li>

        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.instagram.com/nahed.elie?igsh=MWJ6Mjhnc204cW5uZQ=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
