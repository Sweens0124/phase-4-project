import React, { useState, useEffect } from "react";
import ItemCollection from "./ItemCollection";
import ItemForm from "./ItemForm";
import Navbar from "./Navbar";
import { Navigate } from "react-router-dom";


function ProfilePage ({ items, isLoggedIn, setIsLoggedIn }) {

  // if (!isLoggedIn) return <Navigate to="/login" />;
  console.log(items);

  // function removeForever (e, id) {
  //   e.stopPropagation();
  //   fetch(`/users/${id}`, {
  //     method: 'DELETE'
  //   })
  //   setItems((currentItems) =>
  //     currentItems.filter((item) => item.id !== id)
  //   );
  // }

  function handleUpdateItem (updatedItem, id) {
    fetch(`/users/${id}`, {
      method: 'PATCH',
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(updatedItem),
    })
  }

  // function handleAddItem (newItem, id) {
  //   fetch(`/users/${id}`, {
  //     method: 'POST',
  //     headers: new Headers({ "content-type": "application/json" }),
  //     body: JSON.stringify(newItem),
  //   })
  //   setItems([ ...items, newItem ]);
  // }

  return (
    <div id="itemPage">
      <Navbar isLoggedIn={ isLoggedIn } setIsLoggedIn={ setIsLoggedIn } />
      <ItemForm items={ items } />
      <ItemCollection
        items={ items }
        // addItem={ handleAddItem }
        updateItem={ handleUpdateItem }
      // removeForever={ removeForever }
      />
    </div>
  )
}

export default ProfilePage;