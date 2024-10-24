import video from "../../../../../assets/projects/Cadent_Justin.mp4";
import "./index.css";

function Cadent({ onBack }) {
  return (
    <div className="project-container">
      <span className="project-header">
        Cadent Project - Unified Navigation Configuration
      </span>
      <br />
      <span className="project-description">
        A centralized configuration UI offering various navigation configuration
        options, enabling teams to tailor the navigation to their specific
        requirements. I independently developed the project using React, HTML,
        CSS, Font Awesome, and the Drag & Drop API, with a focus on quality
        assurance and robust testing using React Testing Library. This no-code
        solution enhances operational efficiency by simplifying the process of
        updating changes across different environments.
      </span>
      <br />
      <video src={video} className="project-video" controls />
      <br />
      <button className="back-to-project-button" onClick={onBack}>
        Back to Projects
      </button>
    </div>
  );
}

export default Cadent;
