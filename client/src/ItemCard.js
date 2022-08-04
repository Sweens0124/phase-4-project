import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ItemCard ({ item, removeForever, handleUpdateItem, fetchAllItems }) {
  const { name, description, category, condition, price, image, id } = item;
  const [ show, setShow ] = useState(false)
  const [ enteredName, setName ] = useState(name)
  const [ enteredDescription, setDescription ] = useState(description)
  const [ enteredCategory, setCategory ] = useState(category)
  const [ enteredCondition, setCondition ] = useState(condition)
  const [ enteredPrice, setPrice ] = useState(price)
  const [ enteredImage, setImage ] = useState(image)


  const handleClose = () => setShow(false);
  const handleShow = () => {
    setName(name)
    setDescription(description)
    setCategory(category)
    setCondition(condition)
    setPrice(price)
    setImage(image)
    setShow(true)
  };

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  }

  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  }
  
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  }
  
  const conditionChangeHandler = (event) => {
    setCondition(event.target.value);
  }

  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  }
  
  const imageChangeHandler = (event) => {
      setImage(event.target.value);
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      const updatedItem = {
          "name": enteredName,
          "description": enteredDescription,
          "category": enteredCategory,
          "condition": enteredCondition,
          "price": enteredPrice,
          "image": enteredImage
      }
      console.log(updatedItem)
      handleUpdateItem(updatedItem, id);
      fetchAllItems();
      handleClose();
  }

  return (
    <>
      <div id="item_card">
        <div className="ui card" key={id} onClick={handleShow}>
            <div className="logo">
                <img className="logo" alt="items" src={image} />
            </div>
            <div>
                <span className="item_name">
                    {name}
                </span>
            </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Update Item Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicTitle">
                <Form.Label>Item</Form.Label>
                <Form.Control value={enteredName} onChange={nameChangeHandler} placeholder={name} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicYear">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" value={enteredDescription} onChange={descriptionChangeHandler} placeholder={description} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Condition</Form.Label>
              <Form.Control value={enteredCondition} hidden />
              <Form.Select value={enteredCondition} onChange={conditionChangeHandler}>
                  <option value="Great">Great</option>
                  <option value="Good">Good</option>
                  <option value="Bad">Bad</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Category</Form.Label>
              <Form.Control value={enteredCategory} hidden />
              <Form.Select value={enteredCategory} onChange={categoryChangeHandler}>
                  <option value="Furniture">Furniture</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Sports">Sports</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Appliances">Appliances</option>
                  <option value="Music">Music</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImageUrl">
                <Form.Label>Price</Form.Label>
                <Form.Control value={enteredPrice} onChange={priceChangeHandler} placeholder={price} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicImageUrl">
                <Form.Label>Item Image</Form.Label>
                <Form.Control value={enteredImage} onChange={imageChangeHandler} placeholder={image} />
            </Form.Group>

            <ButtonGroup className="me-2" aria-label="Submit Button">
                <Button variant="outline-primary" type="submit">
                    Submit
                </Button>
            </ButtonGroup>

            <ButtonGroup className="me-2" aria-label="Delete Button">
                <Button variant="outline-danger" onClick={(e) => removeForever(e, id)}>
                    Delete
                </Button>
            </ButtonGroup>
          </Form>
        </Modal.Body>
      </Modal>
      {/* <div className="item_browser">
        <div className='item_card'>
          <h2>{ name }</h2>
          <h4>{ category }</h4>
          <h4>{ condition }</h4>
          <img className="item_img" src={ image } alt="" />
          {/* <button className='item_button' onClick={ () => setShow(true) }>View Item</button> */}
        {/* </div> */}
      {/* </div> */}
      {/* { show ?
        <div id="lightbox">
          <h1>{ name }</h1>
          <h2>{ description }</h2>
          <h2>${ price }</h2>
          <h3>{ category }</h3>
          <h3>{ condition }</h3>
          <img className="lightbox_img" src={ image } alt="" /><br />
          <button onClick={ () => setShow(false) }> Close </button>
        </div>
        : null } */}
    </>
  )
}

export default ItemCard;