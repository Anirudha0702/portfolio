import "./App.css";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Projects from "./components/Projects";
function App() {
  return (
    <div className="app">
      <div className="relative max-w-4xl  m-auto min-h-svh flex flex-col text-gray-500 pt-3 font-name">
      <Header/>
      <Profile/>
      <Projects/>
      <Education/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
