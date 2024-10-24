import React, { useState } from "react";
import CadentProject from "./components/Cadent";
import IQuestProject from "./components/IQuest";
import EsurgiProject from "./components/Esurgi";
import PurdueHubProject from "./components/PurdueHub";
import ToDoProject from "./components/ToDo";
import ValentinesDayProject from "./components/ValentinesDay";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder } from "@fortawesome/free-solid-svg-icons";

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
    <div className="project-page-container">
      {activeProject === "cadent" ? (
        <div>
          <CadentProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "esurgi" ? (
        <div>
          <EsurgiProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "iquest" ? (
        <div>
          <IQuestProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "purduehub" ? (
        <div>
          <PurdueHubProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "todo" ? (
        <div>
          <ToDoProject onBack={handleBackToProjects} />
        </div>
      ) : activeProject === "valentine" ? (
        <div>
          <ValentinesDayProject onBack={handleBackToProjects} />
        </div>
      ) : (
        <div className="projects-container">
          <span className="projects-header">
            Projects
            <FontAwesomeIcon icon={faFolder} className="projects-icon" />
          </span>

          <div className="projects-links">
            <div className="projects-links-group">
              <span
                className="projects-link-style"
                onClick={() => handleShowProject("cadent")}
              >
                <span className="project-link-title">Cadent</span>
              </span>
              <span
                className="projects-link-style"
                onClick={() => handleShowProject("esurgi")}
              >
                <span className="project-link-title">Esurgi</span>
              </span>
              <span
                className="projects-link-style"
                onClick={() => handleShowProject("iquest")}
              >
                <span className="project-link-title">iQuest</span>
              </span>
            </div>

            <div className="projects-links-group">
              <span
                className="projects-link-style"
                onClick={() => handleShowProject("purduehub")}
              >
                <span className="project-link-title">PurdueHub</span>
              </span>
              <span
                className="projects-link-style"
                onClick={() => handleShowProject("todo")}
              >
                <span className="project-link-title">Todo</span>
              </span>
              <span
                className="projects-link-style"
                onClick={() => handleShowProject("valentine")}
              >
                <span className="project-link-title">Valentine's</span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Projects;
