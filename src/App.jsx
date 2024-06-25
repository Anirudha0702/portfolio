import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
function App() {
  return (
    <div className="app">
      <div className="relative max-w-4xl  m-auto min-h-svh flex flex-col text-gray-500 pt-3 font-name">
      <Header/>
      <Profile/>
      </div>
    </div>
  );
}

export default App;
