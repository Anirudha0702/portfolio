import { education } from '../../utils/data'
import "./education.css"
import { FaUserGraduate } from "react-icons/fa";
import dp from "../../assets/me.jpeg"
const Education = () => {
    return (
    <div className="tab-content">
        
            {
                education.map((edu, index) => (
                    <div className="post" key={index}>
                        <div className="post-header">
                            <div className="dp-wrapper">
                                <img src={dp} alt="" />
                            </div>
                            <span>
                                <b>Anirudha Pradhan </b>
                                <span>added education to his </span>
                                <b> timeline</b>.
                            </span>
                        </div>
                        <div className="post-content">
                            <FaUserGraduate   size={40}/>
                            <h2>{edu.title}</h2>
                            <date>{edu.date}</date>
                            <p>{edu.content}</p>
                        </div>
                    </div>
                ))
            }
        </div>
  )
}

export default Education