import "./about.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { about } from "../../utils/data";
const About = () => {
  return (
    <div className="tab-content">
      <div className="">
      <h1>{about.greet}</h1>
      <p>{about.content}</p>
      </div>
      <a href="https://firebasestorage.googleapis.com/v0/b/unityhat-613fe.appspot.com/o/project_images%2Fmyresume.pdf?alt=media&token=123cb197-9337-4521-9494-3c219c99a1b4" className="resume" download={true}>
       <FaCloudDownloadAlt/> Resume 
      </a>
    </div>
  );
};

export default About;
