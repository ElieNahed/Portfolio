import React from "react";
import "../css/projects.css";

const Projects: React.FC = () => {
  return (
    <div className="container">
      <div className="grid-container">
        <div className="card">
          <h2>No Projects to Display</h2>
          <p>There are currently no projects to display.</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
