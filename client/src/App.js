import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserPage from './UserPage';
import ItemForm from "./ItemForm";
import ItemCollection from './ItemCollection';
import SignUp from './Signup';
import Contact from './Contact';
import Navbar from "./Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
  const [ users, setUsers ] = useState([])
  const [ loggedInUserId, setLoggedInUserId ] = useState(null)
  const [ garageSales, setGarageSales ] = useState([])
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  useEffect(() => {
    fetch("/garage_sales")
      .then((r) => r.json())
      .then((garageSales) => setGarageSales(garageSales));
  }, []);

  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((users) => setUsers(users));
  }, []);

  return (
    <div className="App">
      {isLoggedIn ? <Navbar loggedInUserId={loggedInUserId} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/> : null }
      <Routes>
        <Route path="/" element={ <LoginPage setLoggedInUserId={setLoggedInUserId} setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path='/browse-items' element={ <ItemCollection setIsLoggedIn={setIsLoggedIn} /> } />
        <Route path='/users/:id' element={ <UserPage setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/item-form' element={ <ItemForm users={ users } garageSales={ garageSales } /> } />
        <Route path='/contact' element={ <Contact setIsLoggedIn={setIsLoggedIn}/> } />

      </Routes>
    </div>
  );
}

export default App;
