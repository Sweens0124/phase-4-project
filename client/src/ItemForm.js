import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ItemForm ({ users, garageSales }) {
  const [ show, setShow ] = useState(true);

  const [ name, setName ] = useState('')
  const [ description, setDescription ] = useState('')
  const [ condition, setCondition ] = useState('')
  const [ category, setCategory ] = useState('')
  const [ price, setPrice ] = useState('')
  const [ image, setImage ] = useState(null)

  const handleItemSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    formData.append('user_id', users[ 3 ].id)
    formData.append('garage_sale_id', garageSales[ 0 ].id)
    formData.append('name', name)
    formData.append('description', description)
    formData.append('condition', condition)
    formData.append('category', category)
    formData.append('price', price)
    formData.append('image', image)

    fetch('/items', {
      method: 'POST',
      body: formData
    })

  }

  return (
    <>
      <Modal show={ show } >
        <Modal.Title>Add New Item:</Modal.Title>
        <Modal.Body>
          <Form onSubmit={ handleItemSubmit }>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' value={ name } onChange={ (e) => setName(e.target.value) } placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control name='price' value={ price } onChange={ (e) => setPrice(e.target.value) } placeholder="Price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control name='description' value={ description } onChange={ (e) => setDescription(e.target.value) } placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Category</Form.Label>
              {/* <Form.Control value={ formData.category } hidden /> */ }
              <Form.Select name="category" value={ category } onChange={ (e) => setCategory(e.target.value) }>
                <option value="">Select a Category</option>
                <option value="Music">Music</option>
                <option value="Electronics">Electronics</option>
                <option value="Furniture">Furniture</option>
                <option value="Sports">Sports</option>
                <option value="Clothing">Clothing</option>
                <option value="Appliances">Appliances</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Condition</Form.Label>
              <Form.Control value={ condition } hidden />
              <Form.Select name="condition" value={ condition } onChange={ (e) => setCondition(e.target.value) }>
                <option value="0">Select a Condition</option>
                <option value="Great">Great</option>
                <option value="Good">Good</option>
                <option value="Bad">Bad</option>
              </Form.Select>
            </Form.Group>

            <Form.Group>
              <Form.Label>
                Upload image
              </Form.Label>
              <Form.Control name="image" type="file" accept="image/*" onChange={ (e) => setImage(e.target.files[ 0 ]) } />
            </Form.Group>

            <ButtonGroup className="me-2" aria-label="Submit Button">
              <Button variant="outline-primary" type="submit">
                Submit
              </Button>
            </ButtonGroup>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default ItemForm;