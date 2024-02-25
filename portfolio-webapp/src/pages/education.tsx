import React from "react";

const Education: React.FC = () => {
  return (
    <div className="center">
      <div className="timeline">
        <div className="timeline-item">
          <h3>Workshop in Java (LAU)</h3>
          <p>Description of the workshop</p>
          <p>Date attended: Feb 2020</p>
          <p>
            Certificate:
            <a
              href="src/assets/certificate_java.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </p>
        </div>
        <div className="timeline-item">
          <h3>Workshop in Python (LAU)</h3>
          <p>Description of the workshop</p>
          <p>Date attended: Feb 2020</p>
          <p>
            Certificate:
            <a
              href="src/assets/certificate_python.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Certificate
            </a>
          </p>
        </div>
        <div className="timeline-item">
          <h3>University Software Engineering (Current)</h3>
          <p>Description of the program</p>
          <p>Date started: 2021</p>
          <p>
            Certificate:
            <a href="/" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
