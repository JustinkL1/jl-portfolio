import React, { useState } from "react";
import CadentProject from "./components/Cadent";

import "./index.css";

function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const handleShowProject = (project) => {
    setActiveProject(project);
  };

  const handleBackToProjects = () => {
    setActiveProject(null); 
  };
  return (
    <div >
      {activeProject === "cadent" ? (
        <div>
          <CadentProject onBack={handleBackToProjects} />
        </div>
      ) : (
        <div className="projects-container">
          <span className="projects-header">Projects</span>
          <div className="projects-links">
            <span
              className="projects-link-style"
              onClick={() => handleShowProject("cadent")}
            >
              <span className="project-link-title">Cadent Project</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
