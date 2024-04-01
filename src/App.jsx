import "./App.css";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";
import CurrentTab from "./components/CurrentTab/CurrentTab";
function App() {
  return (
    <div className="app">
      {/* <Nav/> */}
      <Profile />
      <CurrentTab />
    </div>
  );
}

export default App;
