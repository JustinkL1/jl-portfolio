import video from "../../../../../assets/Cadent_Justin.mp4";
import "./index.css";

function Cadent({onBack}) {
  return (
    <div className="project-container">
      <span className="project-header">Cadent Project - Unified Navigation Configuration</span>
      <br />
      <span className="project-description">
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
        onClick={onBack}
      >
        Back to Projects
      </button>
    </div>
  );
}

export default Cadent;
