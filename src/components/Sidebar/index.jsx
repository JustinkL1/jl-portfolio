import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import linkedinProfilePic from "../../assets/sidebar/linkedin.jpg";
import justinResume from "../../assets/sidebar/Justin_Lam_Resume.pdf";
import "./index.css";

function Sidebar() {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">
        <img src={linkedinProfilePic} className="profile-pic" />
        <div className="name">Justin Lam</div>
        <div className="social-links">
          <a
            href="https://github.com/JustinkL1"
            target="_blank"
            className="icon-link"
          >
            <FontAwesomeIcon icon={faGithub} className="icon github" />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/justinklam/"
            target="_blank"
            className="icon-link"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="icon linkedin" />
          </a>
        </div>
      </div>

      <div className="personal-information">
        <div className="personal-information-sections">
          <FontAwesomeIcon
            icon={faPhone}
            className="personal-information-icon"
          />
          <div className="personal-information-texts">
            <span className="personal-information-phone-input">
              (510) 676-4862
            </span>
          </div>
        </div>

        <div className="personal-information-sections">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="personal-information-icon"
          />
          <div className="personal-information-texts">
            <span className="personal-information-email-input">
              justinklam6@gmail.com
            </span>
          </div>
        </div>

        <div className="personal-information-sections">
          <FontAwesomeIcon
            icon={faLocationDot}
            className="personal-information-icon"
          />
          <div className="personal-information-texts">
            <span className="personal-information-location-input">
              Fremont, California
            </span>
          </div>
        </div>
      </div>

      <div className="button-group">
          <div>
            <a href="mailto:justinklam6@gmail.com">
              <button className="button-sidebar">Contact Me</button>
            </a>
          </div>

          <div>
            <a href={justinResume} download="Justin Lam Resume">
              <button className="button-sidebar">Download Resume</button>
            </a>
          </div>
        </div>
    </div>
  );
}

export default Sidebar;
