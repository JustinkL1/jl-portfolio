import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./components/Pages/Home";
import AboutMePage from "./components/Pages/AboutMe";
import ProjectsPage from "./components/Pages/Projects";
import CadentPage from "./components/Pages/Projects/components/Cadent";
import RoadMapPage from "./components/Pages/Projects/components/Roadmap";
import DarkMode from "./components/DarkMode";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="app-right">
          <Navbar />
          <div className="app-main">
            <Routes>
              <Route exact path="/jl-portfolio" element={<HomePage />} />
              <Route path="/jl-portfolio/about-me" element={<AboutMePage />} />
              <Route path="/jl-portfolio/projects" element={<ProjectsPage />} />
              <Route path="/jl-portfolio/projects-cadent" element={<CadentPage />} />
              {/* <Route path="/jl-portfolio/projects-roadmap" element={<RoadMapPage />} /> */}
            </Routes>
          </div>
          <div className="app-footer">
            <DarkMode />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
