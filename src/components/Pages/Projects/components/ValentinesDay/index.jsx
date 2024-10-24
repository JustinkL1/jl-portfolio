import video from "../../../../../assets/projects/valentine_demo.mov";

function ValentinesDay({ onBack }) {
  return (
    <div className="project-container">
      <span className="project-header">Valentine's Day</span>
      <br />
      <span className="project-description">
        Inspired by an Instagram reel
        (https://www.instagram.com/p/C228ru7yHFm/?hl=en), I developed a fun,
        interactive web application to celebrate Valentine's Day. The app
        features a sign-in page where users can enter their valentine's name, a
        playful button that moves in a different direction when hovered over (if
        the user tries to click "no"), and a picture slideshow that
        automatically plays when the user clicks "yes." The project was built
        using React and CSS.
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

export default ValentinesDay;
