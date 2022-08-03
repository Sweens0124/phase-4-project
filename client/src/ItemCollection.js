import React from "react";
import ItemCard from "./ItemCard"
import Navbar from './Navbar';

function ItemCollection ({ items, isLoggedIn, setIsLoggedIn }) {

  const itemInfo = items.map((item) => (
    <ItemCard
      key={ item.id }
      item={ item }
    />
  ))
  return (
    <div className="ui four column grid">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div id="itemCard">
        { itemInfo }
      </div>
    </div>
  );
}
export default ItemCollection;