import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import JhuPic from "../../../../../assets/about/jhu.png";
import EsurgiPic from "../../../../../assets/about/esurgi.png";
import CadentPic from "../../../../../assets/about/cadent.png";
import "./index.css";

function Experience() {
  return (
    <div className="about-me-experience">
      <span className="about-me-header">
        Employment
        <FontAwesomeIcon icon={faBriefcase} className="about-me-icon" />
      </span>

      <div className="about-me-sections">
        <img src={EsurgiPic} alt="Esurgi logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="experience-company">Company: Esurgi</span>
          <span className="experience-role">
            Role: Software Engineer Intern
          </span>
          <span className="experience-year">May 2024 - Present</span>
        </div>
        {/* add detail */}
      </div>
      <div className="about-me-sections">
        <img src={JhuPic} alt="Jhu logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="experience-company">
            Company: Johns Hopkins University
          </span>
          <span className="experience-role">Role: Teaching Assistant</span>
          <span className="experience-year">January 2022 - Present</span>
        </div>
        {/* add detail */}
      </div>
      <div className="about-me-sections">
        <img src={CadentPic} alt="Cadent logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="experience-company">Company: Cadent</span>
          <span className="experience-role">
            Role: Frontend Engineer Intern
          </span>
          <span className="experience-year">June 2023 - August 2023</span>
        </div>
        {/* add detail */}
      </div>
    </div>
  );
}

export default Experience;
