import React from 'react';
import {Navbar, Container, Nav, NavDropdown} from "react-bootstrap";
import '../common/NavbarPage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";


const NavbarPage = () => {
    return ( 
        
                <Navbar collapseOnSelect expand="lg" className="Navbar">
  <Container className="contenedor">
  <Navbar.Brand>Company Logo</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
      <Nav.Link as={Link} to={'/About'}> About Us</Nav.Link>
      <Nav.Link as={Link} to={'/Contact'}> Contact</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to ={'/action'}>Action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to ={'/actionDos'}>Action Dos </NavDropdown.Item>
        <NavDropdown.Item as={Link} to ={'/actionTres'}>Action Tres</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to={'./another'}> Another Link</Nav.Link>
      <Nav.Link eventKey={2} href="#more">
        One more
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


    )
};
 export default NavbarPage; 

