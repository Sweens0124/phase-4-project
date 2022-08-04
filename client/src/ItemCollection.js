import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"

function ItemCollection ({ setIsLoggedIn }) {
  const [ items, setItems ] = useState([])

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
    fetch("/items")
      .then((r) => r.json())
      .then((items) => setItems(items));
  }, []);

  function fetchAllItems() {
    fetch("/items")
    .then((r) => r.json())
    .then((data) => setItems(data))
    setItems(items)
  };

  function removeForever(e, id) {
    e.stopPropagation();
    fetch(`/items/${id}`,{
        method: 'DELETE'
    })
    setItems((currentItems) =>
      currentItems.filter((item) => item.id !== id)
    );
  }

  function handleUpdateItem(updatedItem, id) {
    fetch(`/items/${id}`, {
        method: 'PATCH',
        headers: new Headers({ "content-type": "application/json" }),
        body: JSON.stringify(updatedItem),
    })
  }

  const itemInfo = items.map((item) => (
    <ItemCard
      key={ item.id }
      item={ item }
      removeForever = { removeForever }
      handleUpdateItem = { handleUpdateItem }
      fetchAllItems = { fetchAllItems }
    />
  ))
  return (
    <div className="ui four column grid">
      <div id="item_card">
        { itemInfo }
      </div>
    </div>
  );
}
export default ItemCollection;