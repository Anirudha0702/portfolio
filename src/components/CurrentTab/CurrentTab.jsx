import "./CurrentTab.css"
const CurrentTab = () => {
  return (
    <nav className="tab-nav">
       <ul>
        <li className="nav-item">Feed</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Education</li>
        <li className="nav-item">Contact</li>
       </ul>
    </nav>
  )
}

export default CurrentTab