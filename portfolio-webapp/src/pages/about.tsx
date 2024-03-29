import React from "react";
import "../App.css";
import Animation from "../components/animation";
const About: React.FC = () => {
  return (
    <div className="centering">
      <div className="container">
        <div className="didyaknow" id="uk">
          <span className="left-aligned">
            <Animation text="About Me" />
          </span>

          <p>
            I am a third-year student at Cnam Liban University, studying
            Software Engineering. I have a passion for what I do and am
            dedicated to learning various skills, including mobile app
            development. In the future, I aim to become a full-stack developer,
            not only focusing on front-end development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
