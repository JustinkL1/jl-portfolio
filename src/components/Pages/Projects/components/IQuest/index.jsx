import "./index.css";

function IQuest({ onBack }) {
  return (
    <div className="project-container">
      <span className="project-header">iQuest</span>
      <br />
      <span className="project-description">
        A web application designed to teach elementary school children
        mathematics and computer science through interactive tutorials and
        engaging games. Developed using Python, CSS, Django, and deployed on
        Heroku, iQuest offers an educational platform that enhances learning
        through fun, hands-on experiences. I independently developed seven
        mathematics games using C# and the Unity Engine, integrating them into
        the platform to create an immersive and interactive educational tool.
      </span>
      <br />
      <button className="back-to-project-button" onClick={onBack}>
        Back to Projects
      </button>
    </div>
  );
}

export default IQuest;
