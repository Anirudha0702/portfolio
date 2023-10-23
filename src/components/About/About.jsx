import "./about.css"
import Typewriter from "typewriter-effect";
import Me from "../../assets/me.jpeg"
const About = () => {
  return (
    <div className="about">
        <div className="image-wrapper">
            <img src={Me} alt="" />
        </div>
        <div className="info">
            <h1>Hi,I am </h1><h1>Anirudha Pradhan</h1>
            <span className="typewriter">
              <Typewriter title={"Typewriter"} data-testid="typewriter-element" 
              options={{
                strings: [' Full Stack Developer.', '  Programmer.'],
                autoStart: true,
                loop: true,
              }}/>
            </span>
            <p className="bio">
              I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.
            </p>
            <button className="resume">RESUME</button>
        </div>
        
    </div>
  )
}

export default About