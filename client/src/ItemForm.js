import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ItemForm({onAddItem}) {
    const [show, setShow] = useState(false);
    const [enteredName, setName] = useState('');
    const [enteredDescription, setDescription] = useState('');
    const [enteredCategory, setCategory] = useState(0);
    const [enteredCondition, setCondition] = useState(0);
    const [enteredPrice, setPrice] = useState('');
    const [enteredImageUrl, setImageUrl] = useState('');


    const handleClose = () => {
        setName('name')
        setDescription('')
        setCategory(0)
        setImageUrl('imageUrl')
        setCondition(0)
        setPrice('')
        setShow(false)
    };
    const handleShow = () => setShow(true);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value);
    }

    const imageUrlChangeHandler = (event) => {
        setImageUrl(event.target.value);
    }

    const categoryChangeHandler = (event) => {
        console.log(event);
        setCategory(event.target.value);
    }

    const priceChangeHandler = (event) => {
        console.log(event);
        setPrice(event.target.value);
    }

    const conditionChangeHandler = (event) => {
        setCondition(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            "name": enteredName,
            "description": enteredDescription,
            "category": enteredCategory,
            "price": enteredPrice,
            "imageUrl": enteredImageUrl,
            "condition": enteredCondition
        }
        onAddItem(newItem);
        handleClose();
    }

    return (
        <>
        <Button id="newItem" variant="dark" onClick={handleShow}>
            Add Item
        </Button>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add New Item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control value={enteredName} onChange={nameChangeHandler} placeholder="Enter Name" />
                    </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Price</Form.Label>
                        <Form.Control value={enteredPrice} onChange={priceChangeHandler} placeholder="Price" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={enteredDescription} onChange={descriptionChangeHandler} placeholder="Description" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicSelect">
                        <Form.Label>Category</Form.Label>
                        <Form.Control value={enteredCategory} hidden />
                        <Form.Select value={enteredCategory} onChange={categoryChangeHandler}>
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
                        <Form.Control value={enteredCondition} hidden />
                        <Form.Select value={enteredCondition} onChange={conditionChangeHandler}>
                            <option value="0">Select a Condition</option>
                            <option value="1">Great</option>
                            <option value="2">Good</option>
                            <option value="3">Bad</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicImageUrl">
                        <Form.Label>Item Image Url</Form.Label>
                        <Form.Control value={enteredImageUrl} onChange={imageUrlChangeHandler} placeholder=""/>
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