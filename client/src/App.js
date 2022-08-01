import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProfilePage from "./ProfilePage";
import Contact from "./Contact";
import ItemForm from "./ItemForm";
import ItemCollection from './ItemCollection';


function App () {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
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
  console.log(items);


  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <LoginPage setIsLoggedIn={ setIsLoggedIn } /> } />
        <Route path='/profile' element={ <ProfilePage isLoggedIn={ isLoggedIn } setIsLoggedIn={ setIsLoggedIn } items={ items } /> } />
        <Route path='/item-form' element={ <ItemForm /> } />
        <Route path='/browse-items' element={ <ItemCollection /> } />
        <Route path='/contact' element={ <Contact /> } />

      </Routes>
    </div>
  );
}

export default App;
