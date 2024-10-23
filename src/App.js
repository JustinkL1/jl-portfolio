import { HashRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/Pages/Home";
import AboutMePage from "./components/Pages/AboutMe";
import ProjectsPage from "./components/Pages/Projects";
import DarkMode from "./components/DarkMode";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="app-left">
          <Sidebar />
        </div>
        <div className="app-right">
          <div className="app-main">
            <section id="home">
              <HomePage />
            </section>
            <section id="about-me">
              <AboutMePage />
            </section>
            <section id="projects">
              <ProjectsPage />
            </section>
          </div>
          <div className="app-footer">
            <DarkMode />
          </div>
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
