import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import UserPage from './UserPage';
import Contact from "./Contact";
import ItemForm from "./ItemForm";
import ItemCollection from './ItemCollection';
import SignUp from './Signup';


function App () {
  const [ users, setUsers ] = useState([])
  const [ items, setItems ] = useState([])

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
  console.log('Items -->', items, 'Users -->', users);


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path='/browse-items' element={ <ItemCollection items={ items } /> } />
        <Route path='/users/:id' element={ <UserPage /> } />
        <Route path='/signup' element={ <SignUp /> } />
        {/* <Route path='/item-form' element={ <ItemForm /> } /> */ }
        {/* <Route path='/contact' element={ <Contact /> } /> */ }

      </Routes>
    </div>
  );
}

export default App;
