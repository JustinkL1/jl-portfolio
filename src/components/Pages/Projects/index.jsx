import React, { useState } from "react";
import CadentProject from "./components/Cadent";
import IQuestProject from "./components/IQuest";
import EsurgiProject from "./components/Esurgi";
import PurdueHubProject from "./components/PurdueHub";

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
    <div>
      {activeProject === "cadent" ? (
        <div>
          <CadentProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "iquest" ? (
        <div>
          <IQuestProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "esurgi" ? (
        <div>
          <EsurgiProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "purduehub" ? (
        <div>
          <PurdueHubProject onBack={handleBackToProjects} />
        </div>
      ): (
        <div className="projects-container">
          <span className="projects-header">Projects</span>
          <div className="projects-links">
            <span
              className="projects-link-style"
              onClick={() => handleShowProject("cadent")}
            >
              <span className="project-link-title">Cadent Project</span>
            </span>
            <span
              className="projects-link-style"
              onClick={() => handleShowProject("iquest")}
            >
              <span className="project-link-title">iQuest</span>
            </span>
            <span
              className="projects-link-style"
              onClick={() => handleShowProject("esurgi")}
            >
              <span className="project-link-title">Esurgi Project</span>
            </span>
            <span
              className="projects-link-style"
              onClick={() => handleShowProject("purduehub")}
            >
              <span className="project-link-title">PurdueHub</span>
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
