import React from "react";
import DownloadCV from "../components/downloadCV";
import "../App.css";

const Home: React.FC = () => {
  return (
    <div className="centering">
      <div className="container">
        <div className="content">
          <p>
            As a computer science student with a passion for JavaScript, I am
            always seeking new challenges and opportunities to grow. I have
            experience developing dynamic web applications using JavaScript and
            am currently expanding my skill set to include React.js. I am
            dedicated to staying up-to-date with the latest technologies and
            finding innovative solutions to complex problems.
          </p>
          <p>
            This portfolio showcases some of my projects and highlights my
            skills and experiences in web development. Feel free to explore and
            get in touch if you have any questions or would like to collaborate
            on a project!
          </p>
          <p style={{ textAlign: "center" }}>
            <DownloadCV />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
