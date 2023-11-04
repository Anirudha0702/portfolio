import PropTypes from 'prop-types';
import "./carousel.css";
import {  useRef } from 'react';
import { RxCaretRight,RxCaretLeft } from "react-icons/rx";


const Carousel = ({skills}) => {
    const box=useRef();
    const btnpressprev = () => {
        let width = box.current.clientWidth;
        box.current.scrollLeft = box.current.scrollLeft - width;
    }

    const btnpressnext = () => {
        let width = box.current.clientWidth;
        box.current.scrollLeft = box.current.scrollLeft + width;
    }
    return (
        <div className="section-wrapper" >
             <button className="pre-btn" onClick={btnpressprev}><p><RxCaretLeft/></p></button>
            <button className="next-btn" onClick={btnpressnext}><p><RxCaretRight/></p></button>
            <div className="skill_wrapper" ref={box}>
            {
                skills.map((skill, index) => {
                return (
                    <div key={index} 
                    className="skill" 
                    data-skill_value={skill.value} data-skill_name={skill.name}
                    style={{
                        backgroundImage:`conic-gradient(
                            #fa1789 0% ${skill.value}%,   
                            #1e1e29 ${skill.value}% 100% )`
                    }}>
                        <span>{skill.name}</span>
                    </div>);
                    })
            }
        </div>
        </div>
        )
    }
Carousel.propTypes = {
    skills: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired
};

    
export default Carousel