import LoginPage from "./LoginPage";
import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import ProfilePage from "./ProfilePage";
import Contact from "./Contact";
import ItemForm from "./ItemForm";


function App () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [ selectedFile, setSelectedFile ] = useState(null)

  // useEffect(() => {
  //   fetch("/users")
  //     .then((r) => r.json())
  //     .then((users) => setUsers(users));
  // }, []);

  // useEffect(() => {
  //   fetch("/items")
  //     .then((r) => r.json())
  //     .then((items) => setItems(items));
  // }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/.LoginPage" element={ <LoginPage  setIsLoggedIn={setIsLoggedIn}/> } />
        <Route path='/.ProfilePage' element={ <ProfilePage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} /> } /> 
        <Route path='/.ItemForm' element={ <ItemForm /> } />
        <Route path='/.Contact' element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
