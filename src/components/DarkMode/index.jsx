import { useState, useEffect } from "react";
import "./index.css";

function DarkMode() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
      document.body.classList.add(
        savedTheme === "true" ? "dark-mode" : "light-mode"
      );
    }
  }, []);

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
