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
      <a href="https://firebasestorage.googleapis.com/v0/b/unityhat-613fe.appspot.com/o/project_images%2Fresume_curr.pdf?alt=media&token=f62f58d8-2337-42e6-bb1b-02c3d5f357ef" className="resume" download={true}>
       <FaCloudDownloadAlt/> Resume 
      </a>
    </div>
  );
};

export default About;
