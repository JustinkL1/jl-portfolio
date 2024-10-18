import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGraduationCap,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import PurduePic from "../../../assets/about/purdue.png";
import JhuPic from "../../../assets/about/jhu.png";
import EsurgiPic from "../../../assets/about/esurgi.png";
import CadentPic from "../../../assets/about/cadent.png";
import JavaPic from "../../../assets/skills/java.svg";
import ReactPic from "../../../assets/skills/react.svg";
import JavascriptPic from "../../../assets/skills/javascript.svg";
import HtmlPic from "../../../assets/skills/html.svg";
import CssPic from "../../../assets/skills/css.svg";
import MySqlPic from "../../../assets/skills/mysql.svg";
import PythonPic from "../../../assets/skills/python.svg";
import FirebasePic from "../../../assets/skills/firebase.svg";
import CPic from "../../../assets/skills/c.svg";
import CPlusPlusPic from "../../../assets/skills/c++.svg";
import CSharpPic from "../../../assets/skills/csharp.svg";
import "./index.css";

function AboutMe() {
  return (
    <div className="about-me-container">
      <div className="about-me-main">
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
              <span className="education-university">
                Johns Hopkins University
              </span>
              <span className="education-degree-major">
                Masters of Science in Computer Science
              </span>
              <span className="education-graduation-year">
                Graduated in May 2024
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="skill-set-container">
        <span className="skill-set-header">Technical Skills</span>
        <ul className="skill-set-list">
          <li>
            <div className="skill-set-sections">
              <span>Java</span>
              <img src={JavaPic} alt="Java logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>React</span>
              <img src={ReactPic} alt="React logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>Javascript</span>
              <img src={JavascriptPic} alt="Javascript logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>HTML</span>
              <img src={HtmlPic} alt="HTML logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>CSS</span>
              <img src={CssPic} alt="CSS logo" className="skill-set-picture" />
            </div>
          </li>
        </ul>
        <ul className="skill-set-list">
          <li>
            <div className="skill-set-sections">
              <span>MySQL</span>
              <img src={MySqlPic} alt="MySQL logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>Python</span>
              <img src={PythonPic} alt="Python logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>Firebase</span>
              <img src={FirebasePic} alt="Firebase logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>C</span>
              <img src={CPic} alt="C logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>C++</span>
              <img src={CPlusPlusPic} alt="C++ logo" className="skill-set-picture" />
            </div>
          </li>
          <li>
            <div className="skill-set-sections">
              <span>C#</span>
              <img src={CSharpPic} alt="C# logo" className="skill-set-picture" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutMe;
