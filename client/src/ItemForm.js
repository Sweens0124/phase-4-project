import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ItemForm ({ addItem }) {
    const [ show, setShow ] = useState(true);
    const [ formData, setFormData ] = useState({
        name: '',
        description: '',
        category: '',
        condition: '',
        price: '',
    })
    const [ errors, setErrors ] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [ name ]: value })
    }

    function onSubmit (e) {
        e.preventDefault()

        fetch(`/items`, {
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
                            <Form.Select value={ formData.category } onChange={ handleChange }>
                                <option value="0">Select a Category</option>
                                <option value="1">Music</option>
                                <option value="2">Electronics</option>
                                <option value="3">Furniture</option>
                                <option value="4">Sports</option>
                                <option value="5">Clothing</option>
                                <option value="6">Appliances</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Condition</Form.Label>
                            <Form.Control value={ formData.condition } hidden />
                            <Form.Select value={ formData.condition } onChange={ handleChange }>
                                <option value="0">Select a Condition</option>
                                <option value="Great">Great</option>
                                <option value="Good">Good</option>
                                <option value="Bad">Bad</option>
                            </Form.Select>
                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicImageUrl">
                            <Form.Label>Item Image Url</Form.Label>
                            <Form.Control value={ enteredImageUrl } onChange={ imageUrlChangeHandler } placeholder="" />
                        </Form.Group> */}

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