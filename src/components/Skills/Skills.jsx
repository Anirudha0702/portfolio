import './skills.css'
import skills from '../../utils/data'
import Carousel from '../Carousel/Carousel'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 })

}, []);
  return (
   <div >
     <h1 className='title'>Skills</h1>
    <Carousel skills={skills} data-aos="fade-up"/>
   </div >
  )
}

export default Skills