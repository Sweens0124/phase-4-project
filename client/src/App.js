import './index.css';
import LoginPage from "./LoginPage"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom";
import Test from "./Test"

function App () {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path="/test" element={ <Test /> } />
      </Routes>
    </div>
  );
}

export default App;
