import './index.css';
import LoginPage from "./LoginPage"
import { Routes, Route } from "react-router-dom";
import Test from "./Test"

function App() {
  return (
    <div className="App">
      <LoginPage />
      <Routes>
        <Route path="/test" element={<Test/>} />
      </Routes>
    </div>
  );
}

export default App;
