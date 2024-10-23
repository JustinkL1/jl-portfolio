import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import PurduePic from "../../../../../assets/about/purdue.png";
import JhuPic from "../../../../../assets/about/jhu.png";
import "./index.css";

function Education() {
  return (
    <div className="about-me-education">
      <span className="about-me-header">
        Education
        <FontAwesomeIcon icon={faGraduationCap} className="about-me-icon" />
      </span>
      <div className="about-me-sections">
        <img src={PurduePic} alt="Purdue logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="education-university">Purdue University</span>
          <span className="education-degree-major">
            Bachelor of Science in Computer Science
          </span>
          <span className="education-graduation-year">
            Graduated in December 2019
          </span>
        </div>
      </div>
      <div className="about-me-sections">
        <img src={JhuPic} alt="Jhu logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="education-university">Johns Hopkins University</span>
          <span className="education-degree-major">
            Masters of Science in Computer Science
          </span>
          <span className="education-graduation-year">
            Graduated in May 2024
          </span>
        </div>
      </div>
    </div>
  );
}

export default Education;
