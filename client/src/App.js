import './index.css';
// import axios from 'axios';
import LoginPage from "./LoginPage"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
//import ProfilePage from "./ProfilePage"
import Contact from "./Contact"


function App () {
  const [ items, setItems ] = useState([])
  const [ users, setUsers ] = useState([])
  // const [ selectedFile, setSelectedFile ] = useState(null)

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  useEffect(() => {
    fetch("/items")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        {/* <Route path='/profile' element={ <ProfilePage items={ items } users={ users } /> } /> */}

        <Route path='/Contact' element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
