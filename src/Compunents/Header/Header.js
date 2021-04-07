import React, { useContext } from 'react';
import './Header.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import { Link } from 'react-router-dom';

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="primary" variant="dark" className="mr-auto">
        <Navbar.Brand>Smart Bazar</Navbar.Brand>
        <Nav className="mr-auto menuBar">
        <Link className="menu" to="/home"><Nav  >Home</Nav></Link>
        <Link className="menu"  to="/order"><Nav  >Order</Nav></Link>
        <Link className="menu"  to="/admin"><Nav  >Admin</Nav></Link>
        <Link className="menu"  to="/login"><Nav  >Login</Nav></Link>
          {
            <p>{loggedInUser.name}</p>
          }
        </Nav>
      </Navbar>
    );
};

export default Header;