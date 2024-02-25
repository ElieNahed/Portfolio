import React, { useState, useEffect } from "react";
import "../css/nav.css";

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
    <nav>
      <ul>
        <li>
          <a href="/" className={activeLink === "/" ? "active" : ""}>
            Home
          </a>
        </li>
        <li>
          <a href="/about" className={activeLink === "/about" ? "active" : ""}>
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
  );
};

export default Navbar;
