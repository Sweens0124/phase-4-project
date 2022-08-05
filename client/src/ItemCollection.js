import React, { useState, useEffect } from "react";
import ItemCard from "./ItemCard"
import Button from 'react-bootstrap/Button';
import ItemForm from "./ItemForm";

function ItemCollection ({ setIsLoggedIn, page, loggedInUserId }) {
  const [ items, setItems ] = useState([])
  const [ show, setShow ] = useState(false)

  useEffect(() => {
    setIsLoggedIn(sessionStorage.getItem("loggedIn"))
    fetch("/items")
      .then((r) => r.json())
      .then((items) => page === 'user' ? setItems(items.filter(item => item.user.id === parseInt(loggedInUserId))) : setItems(items));
  }, []);

  function fetchAllItems() {
    fetch("/items")
    .then((r) => r.json())
    .then((data) => setItems(data))
    setItems(items)
    window.location.reload(true)
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

  function handleAddItem(newItem) {
    fetch("/items", {
      method: 'POST',
      headers: new Headers({ "content-type": "application/json" }),
      body: JSON.stringify(newItem)
    })
    setItems([...items, newItem])
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

  const handleClick = () => {
    setShow(true)
  }

  const modalClose = () => {
    setShow(false)
    page === 'user' ? setItems([...items.filter(item => item.user.id === parseInt(loggedInUserId))]) : setItems([...items])
    window.location.reload(true)
  }

  return (
    <>
    <Button id="newItem" variant="dark" onClick={handleClick}>
        Add Item
    </Button>
    {show && <ItemForm closeModal={modalClose} loggedInUserId={loggedInUserId} onAddItem={handleAddItem}/>}
      <div className="ui four column grid">
        <div id="item_card">
          { itemInfo }
        </div>
      </div>
    </>
  );
}

export default ItemCollection;