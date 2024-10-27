import { useState, useEffect } from "react";
import "./index.css";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem("darkMode")) || false;
  });

  useEffect(() => {
    document.body.classList.add(darkMode ? "dark-mode" : "light-mode");
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem("darkMode", newMode);
      document.body.classList.toggle("dark-mode", newMode);
      document.body.classList.toggle("light-mode", !newMode);
      return newMode;
    });
  };
  
  return (
    <button className="dark-mode-button" onClick={toggleDarkMode}>
      {darkMode ? "🌙" : "🔆"}
    </button>
  );
}

export default DarkMode;
