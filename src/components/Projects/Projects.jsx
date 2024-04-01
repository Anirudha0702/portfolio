import "./projects.css";
import { projects } from "../../utils/data";
import dp from "../../assets/me.jpeg";
import { FaGithub } from "react-icons/fa";
import { CiStreamOn } from "react-icons/ci";
const Projects = () => {
  return (
    <div className="tab-content">
      {projects.map((project, index) => (
        <div className="post project" key={index}>
          <div className="post-header">
            <div className="dp-wrapper">
              <img src={dp} alt="" />
            </div>
            <span>
              <b>Anirudha Pradhan </b>
              <span>added project to his </span>
              <b> timeline</b>.
            </span>
          </div>
          <div className="project_image">
            <img src={project.image} alt="" />
          </div>
          <div className="post-content">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </div>
          <div className="tech-stack">
              {project.techStack.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </div>
          <div className="links">
            <a href={project.github} target="_blank" rel="noreferrer">
             <FaGithub/> Github
            </a>
            <a href={project.live} target="_blank" rel="noreferrer">
              <CiStreamOn/> Live
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
