import Logo from '../../assets/logo.png'
import './nav.css'
import '../../App.css'
import { useState } from 'react'
import {GiHamburgerMenu,} from 'react-icons/gi'
const Nav = () => {
  const[toggleIsON,setToggoleIsON] = useState(false)
  return (
    <header className='nav-wrapper'>

       <div className="logo-wrapper">
          <img src={Logo} alt="Portfolio" className='logo' />
          <span className='logo-text'>Portfolio</span>
      </div>

      <nav className={`navbar ${toggleIsON?"visiblity":""}`}>
        <ul >
          <li className=''>Home </li>
          <li className=''>About</li>
          <li className=''>Projects</li>
          <li className=''>Education</li>
          <li className=''>Github Profile</li>
        </ul>
      </nav>

      <GiHamburgerMenu className='hamburger' onClick={()=>{setToggoleIsON(!toggleIsON)}}/>
      <button className='btn'>Github</button>
    </header>
  )
}

export default Nav