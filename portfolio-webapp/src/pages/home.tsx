import React from "react";
import Animation from "../components/animation";
import "../App.css";

const Home: React.FC = () => {
  return (
    <div className="centering">
      <div className="container">
        <div className="content">
          <Animation />
          <p>
            Hello! My name is Antoine and I'm a web developer. I specialize in
            building modern and responsive websites and web applications using
            cutting-edge technologies.
          </p>
          <p>
            This portfolio showcases some of my projects and highlights my
            skills and experiences in web development. Feel free to explore and
            get in touch if you have any questions or would like to collaborate
            on a project!
          </p>
          <p style={{ textAlign: "center" }}>
            Let's get to know me &nbsp;
            <a href="/about">
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
