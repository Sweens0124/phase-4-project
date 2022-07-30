import { useState } from "react"
import { Modal, Button, ModalBody } from "react-bootstrap"

function ItemCard ({ items }) {
  const [ show, setShow ] = useState(false);
  const [ itemClicked, setItemClicked ] = useState(0)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = (e) => {
    let id = parseInt(e.target.value)
    setItemClicked(id)
  }

  const renderItems = items.map((item) => {
    const { id, name, price } = item
    return (
      <div className='item_card' key={ id }>
        <h4>{ name }</h4>
        <h4>${ price }</h4>
        {/* add image details */ }
        <Button className='item_button' onClick={ handleClick } value={ id } variant="primary">View Details</Button>
      </div>
    )
  })
  if (itemClicked === 0) {
    return (
      <>
        { renderItems }
      </>
    )
  } else {
    return (
      <>
        { items.filter(item => item.id === itemClicked).map(filteredItem => (
          <div key={ filteredItem.id } className="single_item">
            <h2>{ filteredItem.name }</h2>
            <h3>${ filteredItem.price }</h3>
            <h4>{ filteredItem.condition }</h4>
            <h4>{ filteredItem.category }</h4>
            <p>{ filteredItem.description }</p>
            {/* image here */ }
          </div>
        )) }
      </>
    )
  }
}

export default ItemCard;