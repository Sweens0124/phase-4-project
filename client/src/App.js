import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import UserPage from './UserPage';
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

  const addItem = (item) => setItems([ ...items, item ])

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <LoginPage /> } />
        <Route path='/browse-items' element={ <ItemCollection items={ items } /> } />
        <Route path='/users/:id' element={ <UserPage items={ items } /> } />
        <Route path='/signup' element={ <SignUp /> } />
        <Route path='/item-form' element={ <ItemForm addItem={ addItem } /> } />
        {/* <Route path='/contact' element={ <Contact /> } /> */ }

      </Routes>
    </div>
  );
}

export default App;
