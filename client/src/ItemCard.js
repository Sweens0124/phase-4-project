import React, { useState } from "react";

function ItemCard ({ item }) {
  const { id, name, description, category, condition, price, image } = item;
  const [ show, setShow ] = useState(false)

  return (
    <>
      <div className="item_browser">
        <div className='item_card'>
          <h2>{ name }</h2>
          <h4>{ category }</h4>
          <h4>{ condition }</h4>
          <img className="item_img" src={ image } />
          <button className='item_button' onClick={ () => setShow(true) }>View Item</button>
        </div>
      </div>
      { show ?
        <div id="lightbox">
          <h1>{ name }</h1>
          <h2>{ description }</h2>
          <h2>${ price }</h2>
          <h3>{ category }</h3>
          <h3>{ condition }</h3>
          <img className="lightbox_img" src={ image } /><br />
          <button onClick={ () => setShow(false) }> Close </button>
        </div>
        : null }
    </>
  )
}

export default ItemCard;