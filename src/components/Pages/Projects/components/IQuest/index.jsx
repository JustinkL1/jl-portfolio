import { useState, useEffect } from "react";

import time from "../../../../../assets/projects/iquest/time.png";
import add from "../../../../../assets/projects/iquest/add.png";
import divide from "../../../../../assets/projects/iquest/divide.png";

import "./index.css";

function IQuest({ onBack }) {
  const demoPictures = [time, add, divide];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousImage = () => {
    setCurrentIndex(
      currentIndex === 0 ? demoPictures.length - 1 : currentIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentIndex(
      currentIndex === demoPictures.length - 1 ? 0 : currentIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

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

      <div className="slider-image-container">
        <button onClick={goToPreviousImage} className="slider-button left-button">
          {`<`}
        </button>
        <img
          src={demoPictures[currentIndex]}
          alt="slider"
          className="project-image"
        />
        <button onClick={goToNextImage} className="slider-button right-button">
          {`>`}
        </button>
      </div>

      <button className="back-to-project-button" onClick={onBack}>
        Back to Projects
      </button>
    </div>
  );
}

export default IQuest;
