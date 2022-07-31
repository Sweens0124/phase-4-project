import React from "react";
import ItemCard from "./ItemCard"

function ItemCollection({ items, updateItem, removeForever, fetchItems }) {
    
  const itemInfo = items.map((item) => (
    <ItemCard
        key={item.id}
        item={item}
        updateItem={updateItem}
        onItemDelete={removeForever}
        fetchItems={fetchItems}
        />
  ))
  return (
    <div className="ui five column grid">
        <div id="itemCard">
            {itemInfo}
        </div>
    </div>
  );
}
export default ItemCollection;