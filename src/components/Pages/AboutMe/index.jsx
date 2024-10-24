import Education from "./component/Education";
import Employment from "./component/Employment";
import SkillSet from "./component/SkillSet";
import "./index.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-main">
        <Employment />
        <Education />
      </div>
      <SkillSet />
    </div>
  );
}

export default AboutMe;
