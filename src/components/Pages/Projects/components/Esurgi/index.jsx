import "./index.css";

function Esurgi({ onBack }) {
  return (
    <div className="project-container">
      <span className="project-header">
        Esurgi Project - BioStabilizer Web Application
      </span>
      <br />
      <span className="project-description">
        A comprehensive platform designed to help physical therapists
        efficiently manage their schedules, patient information, and
        personalized exercise routines and charts. I developed key components of
        the web application using React, Firebase, and CSS, including the
        sign-in/up, home, exercise, and my account pages.
      </span>
      <br />
      <button className="back-to-project-button" onClick={onBack}>
        Back to Projects
      </button>
    </div>
  );
}

export default Esurgi;
