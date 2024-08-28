import { useNavigate } from "react-router-dom";
import "./index.css";

function Cadent() {
  const navigate = useNavigate();

  return (
    <div className="roadmap-container">
      <span className="roadmap-header">Roadmap</span>
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
