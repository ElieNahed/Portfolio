import React, { useState, useEffect } from "react";
import "../css/nav.css";
import Animation from "./animation";
const Navbar: React.FC = () => {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const checkActiveLink = () => {
      const links = document.querySelectorAll("nav ul li a");
      links.forEach((link) => {
        if (window.location.href.includes(link.getAttribute("href") || "")) {
          setActiveLink(link.getAttribute("href") || "");
        }
      });
    };

    checkActiveLink();

    // Cleanup the event listener when component unmounts
    return () => {};
  }, []);

  return (
    <div>
      <nav>
        <span className="animation">
          <span className="title">
            <Animation text="Elie Nahed" />
          </span>
        </span>
        <div className="menu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <li>
            <a href="/" className={activeLink === "/" ? "active" : ""}>
              Home
            </a>
          </li>
          <li>
            <a
              href="/about"
              className={activeLink === "/about" ? "active" : ""}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="/experience"
              className={activeLink === "/experience" ? "active" : ""}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="/education"
              className={activeLink === "/education" ? "active" : ""}
            >
              Education
            </a>
          </li>

          <li>
            <a
              href="/projects"
              className={activeLink === "/projects" ? "active" : ""}
            >
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className={activeLink === "" ? "active" : ""}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
