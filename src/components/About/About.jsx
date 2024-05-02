import "./about.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { about, Resume } from "../../utils/data";
const About = () => {
  return (
    <div className="tab-content">
      <div className="">
      <h1>{about.greet}</h1>
      <p>{about.content}</p>
      </div>
      <a href={Resume} className="resume" download={true}>
       <FaCloudDownloadAlt/> <span>Resume</span> 
      </a>
      {/* <div className="hero-img-wrapper">
        <img src={about.heroImage} alt="" className="hero-img"/>
      </div> */}
    </div>
  );
};

export default About;
