import "./CurrentTab.css";
import { useState } from "react";
import Education from "../Education/Education";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import About from "../About/About";
const CurrentTab = () => {
  const [currentTab, setCurrentTab] = useState("about");
  const changeTab = (tab) => {
    setCurrentTab(tab);
  };
  return (
    <>
      <nav className="tab-nav">
        <ul>
          <li
            className={`nav-item ${currentTab === "about" ? "highlight" : ""}`}
            onClick={(e) => changeTab(e.target.getAttribute("data-tab"))}
            data-tab="about"
          >
            About
          </li>
          <li
            className={`nav-item ${
              currentTab === "projects" ? "highlight" : ""
            }`}
            onClick={(e) => changeTab(e.target.getAttribute("data-tab"))}
            data-tab="projects"
          >
            Projects
          </li>
          <li
            className={`nav-item ${
              currentTab === "education" ? "highlight" : ""
            }`}
            onClick={(e) => changeTab(e.target.getAttribute("data-tab"))}
            data-tab="education"
          >
            Education
          </li>
          <li
            className={`nav-item ${
              currentTab === "contact" ? "highlight" : ""
            }`}
            onClick={(e) => changeTab(e.target.getAttribute("data-tab"))}
            data-tab="contact"
          >
            Contact
          </li>
        </ul>
      </nav>
      {currentTab === "about" && <About />}
      {currentTab === "projects" && <Projects />}
      {currentTab === "education" && <Education />}
      {currentTab === "contact" && <Contact />}
    </>
  );
};

export default CurrentTab;
