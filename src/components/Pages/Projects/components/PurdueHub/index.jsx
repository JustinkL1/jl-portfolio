import "./index.css";

function PurdueHub({ onBack }) {
  return (
    <div className="project-container">
      <span className="project-header">PurdueHub</span>
      <br />
      <span className="project-description">
        A web application designed to facilitate communication among residents
        and staff members in Purdue dormitories. I developed the application
        using React, Evergreen, Firebase, HTML, CSS, and JavaScript,
        implementing various key features, including a contact page, a direct
        email page that saves data to Firebase, an inbox page to notify
        residents of mail, an emergency page, and a reservation page for booking
        equipment or study rooms.
      </span>
      <br />
      <button className="back-to-project-button" onClick={onBack}>
        Back to Projects
      </button>
    </div>
  );
}

export default PurdueHub;
