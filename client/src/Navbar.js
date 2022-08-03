import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink, useNavigate } from "react-router-dom";
import BrowseItems from './BrowseItems';



const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
    const history = useNavigate();

    function handleLogout () {
        setIsLoggedIn(false);
        history("/");
    };

    const renderLogout = isLoggedIn ? <Button className="ui logout button" variant="dark"
        onClick={ handleLogout } > Logout </Button> : null

    // const renderUserAvatar = users.filter((user) => user.id === userLogged.id)

    return (
        <div>
            <div className="navbar">
                <NavLink className="navlink" to="/browse-items" element={ <BrowseItems /> }> Browse Items </NavLink>
                <NavLink className="navlink" to="/item-form"> Sell Items </NavLink>
                <NavLink className="navlink" to="/contact"> Contact </NavLink>
                {/* <NavLink className="navlink" to="/"> Search </NavLink> */ }
                { renderLogout }
                <div className='avatar'>
                    {/* {renderUserAvatar.image} */ }
                </div>
            </div>
            {/* <Form onSubmit={ handleLogout }>
                { renderLogout }
            </Form> */}
        </div>
    );
};

export default Navbar;

