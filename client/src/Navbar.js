import React from "react"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NavLink, useNavigate } from "react-router-dom"



const NavBar = ({isLoggedIn, setIsLoggedIn}) => {
    const history = useNavigate();

    function handleLogout(){
        setIsLoggedIn(false);
        history("/.Login");
    };

    const renderLogout = isLoggedIn ? <Button className="ui logout button" variant="dark" onClick={handleLogout} > Logout </Button> : null



return (
        <div>
            <div className="navbar">
                <NavLink className="navlink" to="/"> Browse Items </NavLink>
                <NavLink className="navlink" to="/"> Sell Items </NavLink>
                <NavLink className="navlink" to="/.LoginPage"> Contact </NavLink>
                <NavLink className="navlink" to="/"> Search </NavLink>
                {renderLogout}
            </div>
            <Form onSubmit={handleLogout}>
                {renderLogout}
            </Form>
        </div>
    );
};

export default NavBar;

