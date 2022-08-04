import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from "react-router-dom";
import BrowseItems from './BrowseItems';

const Navbar = ({ loggedInUserId, isLoggedIn, setIsLoggedIn }) => {
    const history = useNavigate();

    function handleLogout (e) {
        sessionStorage.setItem("loggedIn", false)
        setIsLoggedIn(false);
        history("/");
    };

    const renderLogout = isLoggedIn ? <Button id="newitem" className="ui logout" variant="dark" type="submit"
        onClick={ handleLogout } > Logout </Button> : null

    return (
        <div>
            <div className="navbar">
                <NavLink className="navlink" to="/browse-items" element={ <BrowseItems /> }> Browse Items </NavLink>
                <NavLink className="navlink" to="/contact"> Contact </NavLink>
                <div className='avatar'>
                    <NavLink className="navlink" to={ `/users/${loggedInUserId}` } element={ <BrowseItems /> }>
                        <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                        </svg>
                    </NavLink>
                </div>
                <Form onSubmit={ handleLogout }>
                    { renderLogout }
                </Form>
            </div>
        </div>
    );
};

export default Navbar;

