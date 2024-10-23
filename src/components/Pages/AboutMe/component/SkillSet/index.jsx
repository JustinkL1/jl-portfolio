import JavaPic from "../../../../../assets/skills/java.svg";
import ReactPic from "../../../../../assets/skills/react.svg";
import JavascriptPic from "../../../../../assets/skills/javascript.svg";
import HtmlPic from "../../../../../assets/skills/html.svg";
import CssPic from "../../../../../assets/skills/css.svg";
import MySqlPic from "../../../../../assets/skills/mysql.svg";
import PythonPic from "../../../../../assets/skills/python.svg";
import FirebasePic from "../../../../../assets/skills/firebase.svg";
import CPic from "../../../../../assets/skills/c.svg";
import CPlusPlusPic from "../../../../../assets/skills/c++.svg";
import CSharpPic from "../../../../../assets/skills/csharp.svg";
import "./index.css";

function SkillSet() {
  return (
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
            <img
              src={ReactPic}
              alt="React logo"
              className="skill-set-picture"
            />
          </div>
        </li>
        <li>
          <div className="skill-set-sections">
            <span>Javascript</span>
            <img
              src={JavascriptPic}
              alt="Javascript logo"
              className="skill-set-picture"
            />
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
            <img
              src={MySqlPic}
              alt="MySQL logo"
              className="skill-set-picture"
            />
          </div>
        </li>
        <li>
          <div className="skill-set-sections">
            <span>Python</span>
            <img
              src={PythonPic}
              alt="Python logo"
              className="skill-set-picture"
            />
          </div>
        </li>
        <li>
          <div className="skill-set-sections">
            <span>Firebase</span>
            <img
              src={FirebasePic}
              alt="Firebase logo"
              className="skill-set-picture"
            />
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
            <img
              src={CPlusPlusPic}
              alt="C++ logo"
              className="skill-set-picture"
            />
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
  );
}

export default SkillSet;
