import video from "../../../../../assets/Cadent_Justin.mp4";
import { useNavigate } from "react-router-dom";
import "./index.css";

function Cadent() {
  const navigate = useNavigate();

  return (
    <div className="cadent-container">
      <span className="cadent-header">Cadent Project - Unified Navigation Configuration</span>
      <br />
      <span className="cadent-description">
        Developed a centralized configuration UI that offers various navigation
        configuration options, enabling teams to shape the navigation to their
        specific requirements. Independently built the project using React,
        HTML, CSS, Font Awesome, and Drag & Drop API with a focus on quality
        assurance and robust testing using React Testing Library. Centralized
        configuration UI as a no-code solution boosts operational efficiency by
        simplifying the process of updating the changes across different
        environments.
      </span>
      <br />
      <video src={video} className="cadent-video" controls />
      <br />
      <button
        className="back-to-project-button"
        onClick={() => navigate("/projects")}
      >
        back to projects
      </button>
    </div>
  );
}

export default Cadent;
