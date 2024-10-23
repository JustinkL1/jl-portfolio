import Education from "./component/Education";
import Experience from "./component/Experience";
import SkillSet from "./component/SkillSet";
import "./index.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-main">
        <Experience />
        <Education />
      </div>
      <SkillSet />
    </div>
  );
}

export default AboutMe;
