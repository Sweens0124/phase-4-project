import React from "react";
import ItemCard from "./ItemCard"
import Navbar from './Navbar';

function ItemCollection ({ items, updateItem, removeForever, fetchItems }) {
console.log(items)
  const itemInfo = items.map((item) => (
    <ItemCard
      key={ item.id }
      item={ item }
      updateItem={ updateItem }
      onItemDelete={ removeForever }
      fetchItems={ fetchItems }
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