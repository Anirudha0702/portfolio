import "./Profile.css"
import Me from "../../assets/me.jpeg"
import { MdVerified ,MdWork} from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLocationSharp } from "react-icons/io5";
import { FaBirthdayCake } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="profile-wrapper">
      <div className="cover-image-wrapper">
        <img src="https://firebasestorage.googleapis.com/v0/b/flexi-coding.appspot.com/o/dempgi7-520f8d5f-63d4-4453-8822-dbc149ae27f8.gif?alt=media&token=91c0c7b2-93c3-4029-b011-1a8703c5730d" alt="" className="cover-image" />
      </div>
      <div className="profile-section">
        <div className="profile-image-wrapper">
          <img src={Me} alt="" className="profile-image" />
        </div>
        <a href="https://twitter.com/Anirudh68131423"><button className="follow X"><p>Follow on </p><RiTwitterXFill /></button></a>
      </div>
      <div className="info-wrapper">
        <h1>Anirudha Pradhan <MdVerified style={{color:"#5eff00"}}/></h1>
        <p>anirudhapradhan403@gmail.com</p>
        <span className="bio">Brings ideas to life with code! ✨</span>
        <p>Web Developer | React | Node.js | Firebase | Mongo DB | Express.js</p>
        <div className="basic-info">
          <p><MdWork/> Available</p>
          <p><FaBirthdayCake/> July 7th</p>
          <p><IoLocationSharp/> Kolkata,India</p>
        </div>
      </div>
    </div>
  )
}

export default Profile