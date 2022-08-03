import React from "react";
import ItemCard from "./ItemCard"
import Navbar from './Navbar';

function ItemCollection ({ items }) {

  const itemInfo = items.map((item) => (
    <ItemCard
      key={ item.id }
      item={ item }
    />
  ))
  return (
    <div className="ui five column grid">
      <Navbar />
      <div id="itemCard">
        { itemInfo }
      </div>
    </div>
  );
}
export default ItemCollection;