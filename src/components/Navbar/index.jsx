import React, { useState, useEffect } from "react";
import "./index.css";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;

      const sections = ["home", "about-me", "projects"];
      let currentSection = "";

      sections.forEach((section, index) => {
        const element = document.getElementById(section);
        const nextElement = sections[index + 1]
          ? document.getElementById(sections[index + 1])
          : null;
  
        if (element) {
          const rect = element.getBoundingClientRect();
          const nextRect = nextElement ? nextElement.getBoundingClientRect() : null;
  
          if (
            rect.top <= window.innerHeight * 0.5 &&
            (!nextRect || nextRect.top > window.innerHeight * 0.5)
          ) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolling]);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const navbarHeight = document.getElementById("navbar").offsetHeight;
      const top =
        section.getBoundingClientRect().top + window.scrollY - navbarHeight;

      setIsScrolling(true);
      window.scrollTo({ top, behavior: "smooth" });

      setTimeout(() => {
        setIsScrolling(false);
      }, 500);
    }
  };

  return (
    <div className="navbar-container" id="navbar">
      <div className="links">
        <a
          onClick={() => scrollToSection("home")}
          className={
            activeSection === "home" ? "link-style active-link" : "link-style"
          }
        >
          Home
        </a>
        <a
          onClick={() => scrollToSection("about-me")}
          className={
            activeSection === "about-me"
              ? "link-style active-link"
              : "link-style"
          }
        >
          About
        </a>
        <a
          onClick={() => scrollToSection("projects")}
          className={
            activeSection === "projects"
              ? "link-style active-link"
              : "link-style"
          }
        >
          Projects
        </a>
      </div>
    </div>
  );
}

export default Navbar;
