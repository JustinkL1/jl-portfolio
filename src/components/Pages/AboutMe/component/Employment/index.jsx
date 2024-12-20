import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";
import JhuPic from "../../../../../assets/about/jhu.png";
import EsurgiPic from "../../../../../assets/about/esurgi.png";
import CadentPic from "../../../../../assets/about/cadent.png";
import "./index.css";

function Employment() {
  return (
    <div className="about-me-employment">
      <span className="about-me-header">
        Employment
        <FontAwesomeIcon icon={faBriefcase} className="about-me-icon" />
      </span>

      <div className="about-me-sections">
        <img src={JhuPic} alt="Jhu logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="employment-company">
            Johns Hopkins University
          </span>
          <span className="employment-role">Role: Teaching Assistant</span>
          <span className="employment-year">January 2022 - Present</span>
        </div>
      </div>

      <div className="about-me-sections">
        <img src={EsurgiPic} alt="Esurgi logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="employment-company">Esurgi</span>
          <span className="employment-role">
            Role: Software Engineer Intern
          </span>
          <span className="employment-year">May 2024 - November 2024</span>
        </div>
      </div>
      
      <div className="about-me-sections">
        <img src={CadentPic} alt="Cadent logo" className="about-me-pic" />
        <div className="about-me-texts">
          <span className="employment-company">Cadent</span>
          <span className="employment-role">
            Role: Frontend Engineer Intern
          </span>
          <span className="employment-year">June 2023 - August 2023</span>
        </div>
      </div>
    </div>
  );
}

export default Employment;
