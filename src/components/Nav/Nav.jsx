import Logo from '../../assets/logo.png'
import './nav.css'
import '../../App.css'
const Nav = () => {

  return (
    <header className='nav-wrapper'>
       <div className="logo-wrapper">
          <img src={Logo} alt="Portfolio" className='logo' />
          <span className='logo-text'>Portfolio</span>
      </div>

    </header>
  )
}

export default Nav