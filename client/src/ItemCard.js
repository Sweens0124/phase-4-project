import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function ItemCard({ item, updateItem, onItemDelete, fetchItems }) {
    const { id, name, description, category, condition, price, imageUrl } = item;
    const [show, setShow] = useState(false);
    const [enteredName, setName] = useState(name);
    const [enteredDescription, setDescription] = useState(description);
    const [enteredCategory, setCategory] = useState(category);
    const [enteredCondition, setCondition] = useState(condition);
    const [enteredPrice, setPrice] = useState(price);
    const [enteredImageUrl, setImageUrl] = useState(imageUrl);


    const handleClose = () => setShow(false);
    const handleShow = () => {
        setName(name)
        setDescription(description)
        setCategory(category)
        setImageUrl(imageUrl)
        setCondition(condition)
        setPrice(price)
        setShow(true)
    };

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
        const updatedItem = {
            "name": enteredName,
            "description": enteredDescription,
            "category": enteredCategory,
            "price": enteredPrice,
            "imageUrl": enteredImageUrl,
            "condtion": enteredCondition
        }
        updateItem(updatedItem, id);
        fetchItems();
        handleClose();
    }

    return (
        <>
            <div id="itemCard">
                <div className="ui card" key={id} onClick={handleShow}>
                    <div className="logo">
                        <img className="logo" alt="items" src={imageUrl} />
                    </div>
                    <div>
                        <span className="itemName">
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
                        <Form.Group className="mb-3" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control value={enteredName} onChange={nameChangeHandler} placeholder={name} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicDescription">
                            <Form.Label>Description</Form.Label>
                            <Form.Control value={enteredDescription} onChange={descriptionChangeHandler} placeholder={description} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicSelect">
                            <Form.Label>Category</Form.Label>
                            <Form.Control value={enteredCategory} hidden />
                            <Form.Select value={enteredCategory} onChange={categoryChangeHandler}>
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
                                <option value="1">Great</option>
                                <option value="2">Good</option>
                                <option value="3">Bad</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicImageUrl">
                            <Form.Label>Item Image Url</Form.Label>
                            <Form.Control value={enteredImageUrl} onChange={imageUrlChangeHandler} placeholder={imageUrl} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPrice">
                            <Form.Label>Price</Form.Label>
                            <Form.Control value={enteredPrice} onChange={priceChangeHandler} placeholder={price} />
                        </Form.Group>

                        <ButtonGroup className="me-2" aria-label="Delete Button">
                            <Button variant="outline-danger" onClick={(e) => onItemDelete(e, id)}>
                                Delete
                            </Button>
                        </ButtonGroup>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default ItemCard;