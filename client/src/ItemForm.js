import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ItemForm ({ addItem }) {
    const [ show, setShow ] = useState(false);
    const [ errors, setErrors ] = useState([])
    const [ formName, setFormName ] = useState('')
    const [ formPrice, setFormPrice ] = useState('')
    const [ formDescription, setFormDescription ] = useState('')
    const [ formCategory, setFormCategory ] = useState(0)
    const [ formCondition, setFormCondition ] = useState(0)

    const nameChangeHandler = (e) => {
        setFormName(e.target.value)
    }

    const priceChangeHandler = (e) => {
        setFormPrice(e.target.value)
    }

    const descriptionChangeHandler = (e) => {
        setFormDescription(e.target.value)
    }

    const categoryChangeHandler = (e) => {
        setFormCategory(e.target.value)
    }

    const conditionChangeHandler = (e) => {
        setFormCondition(e.target.value)
    }

    function onSubmit (e) {
        e.preventDefault()
        const formData = {
            name: formName,
            description: formDescription,
            category: formCategory,
            condition: formCondition,
            price: formPrice,
        }

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

    const handleShow = () => {
        setShow(true)
    }
    const handleClose = () => {
        setShow(false)
    };

    return (
        <>
            <div id="newItem">
                <div onClick={ handleShow }>
                    <Button>TEST</Button>
                </div>
            </div>
            <Modal show={ show } onHide={ handleClose }>
                <Modal.Title>Add New Item:</Modal.Title>
                <Modal.Body>
                    <Form onSubmit={ onSubmit }>
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control name='name' value={ formName } onChange={ nameChangeHandler } placeholder="Enter Name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control name='price' value={ formPrice } onChange={ priceChangeHandler } placeholder="Price" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control name='description' value={ formDescription } onChange={ descriptionChangeHandler } placeholder="Description" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Category</Form.Label>
                            {/* <Form.Control value={ formData.category } hidden /> */ }
                            <Form.Select value={ formCategory } onChange={ categoryChangeHandler }>
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
                            <Form.Control value={ formCondition } hidden />
                            <Form.Select value={ formCondition } onChange={ conditionChangeHandler }>
                                <option value="0">Select a Condition</option>
                                <option value="1">Great</option>
                                <option value="2">Good</option>
                                <option value="3">Bad</option>
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