import video from "../../../../../assets/projects/ToDoApp.mp4";
import "./index.css";

function ToDo({ onBack }) {
  return (
    <div className="project-container">
      <span className="project-header">To Do Application</span>
      <br />
      <span className="project-description">
        A practical web application featuring a to-do list, a timer, and a
        calendar to help me stay organized. I developed the application using
        React and CSS and demonstrated how to host it on AWS Amplify. This tool
        serves as a personal productivity aid, and I plan to continue evolving
        the app by incorporating new features as my needs change.
      </span>
      <br />
      <video src={video} className="project-video" controls />
      Please note that from 6:33-7:58 there is a momentary silence as the
      application is being built in Amplify, so please feel free to skip ahead.
      <br />
      <button className="back-to-project-button" onClick={onBack}>
        Back to Projects
      </button>
    </div>
  );
}

export default ToDo;
