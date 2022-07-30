import './index.css';
import LoginPage from "./LoginPage"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import ProfilePage from "./ProfilePage"
import ItemCard from './ItemCard';
// import ProfilePage from "./ProfilePage"

function App () {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path='/profile' element={ <ProfilePage items={ items } /> } />
      </Routes>
    </div>
  );
}

export default App;
