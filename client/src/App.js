import './index.css';
import LoginPage from "./LoginPage"
import Navbar from "./Navbar"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import ItemCard from './ItemCard';

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
        {/* <Route path="/items" element={ <ItemContainer /> } items={ items } /> */ }
      </Routes>
      { <ItemCard items={ items } /> }
    </div>
  );
}

export default App;
