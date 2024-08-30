import { NavLink } from "react-router-dom";
import "./index.css";

function Projects() {
  return (
    <div className="projects-container">
      <span className="projects-header">Projects</span>
      <div className="projects-links">
        <NavLink className="projects-link-style" to="/jl-portfolio/projects-cadent">
          <span className="project-link-title">Cadent Project</span>
        </NavLink>
        {/* <NavLink className="projects-link-style" to="/jl-portfolio/projects-roadmap">
          <span className="project-link-title">Roadmap</span>
        </NavLink> */}
      </div>
    </div>
  );
}

export default Projects;
