import About from './components/About/About'
import Nav from './components/Nav/Nav'
import Skills from './components/Skills/Skills'
import "./App.css"
import Education from './components/Education/Education'
function App() {


  return (
    <>
      <div className='app'>
        <Nav/>
        <About/>
        <Skills/>
        <Education/>
      </div>
    </>
  )
}

export default App
