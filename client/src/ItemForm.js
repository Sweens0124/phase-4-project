import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useParams } from 'react-router-dom'

function ItemForm ({ addItem }) {
  const [ show, setShow ] = useState(true);
  const [ file, setFile ] = useState()

  const [ formData, setFormData ] = useState({
    name: '',
    description: '',
    category: '',
    condition: '',
    price: '',
    image: '',
  })
  const params = useParams()
  const { id } = params

  const [ errors, setErrors ] = useState([])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [ name ]: value })
  }

  function onSubmit (e) {
    e.preventDefault()

    fetch(`/users/1`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, ongoing: true })
    })
      .then(res => {
        if (res.ok) {
          res.json().then(addItem)
        } else {
          //Display errors
          res.json().then(data => {
            // debugger
            setErrors(Object.entries(data.errors))
          })
        }
      })
  }

  const handleClose = () => {
    setShow(false)
  };

  // function handleFileChange (e) {
  //   setFile(e.target.files[ 0 ])
  // }

  return (
    <>
      <Modal show={ show } onHide={ handleClose }>
        <Modal.Title>Add New Item:</Modal.Title>
        <Modal.Body>
          <Form onSubmit={ onSubmit }>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control name='name' value={ formData.name } onChange={ handleChange } placeholder="Enter Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPrice">
              <Form.Label>Price</Form.Label>
              <Form.Control name='price' value={ formData.price } onChange={ handleChange } placeholder="Price" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control name='description' value={ formData.description } onChange={ handleChange } placeholder="Description" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicSelect">
              <Form.Label>Category</Form.Label>
              {/* <Form.Control value={ formData.category } hidden /> */ }
              <Form.Select name="category" value={ formData.category } onChange={ handleChange }>
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
              <Form.Control value={ formData.condition } hidden />
              <Form.Select name="condition" value={ formData.condition } onChange={ handleChange }>
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
              <Form.Control name="image" value={ formData.image } onChange={ handleChange } />
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