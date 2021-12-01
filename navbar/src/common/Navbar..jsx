import React from 'react';




const Navbar = () => {
    return ( 
        
                <Navbar collapseOnSelect expand="lg" className="Navbar">
  <Container className="contenedor">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
      <Nav.Link as={Link} to={'/about'}> About Us</Nav.Link>
      <Nav.Link as={Link} to={'/contact'}> Contact</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item as={Link} to ={'/action'}>Action</NavDropdown.Item>
        <NavDropdown.Item as={Link} to ={'/actionDos'}>Action Dos </NavDropdown.Item>
        <NavDropdown.Item as={Link} to ={'/actionTres'}>Action Tres</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#added">Link added</Nav.Link>
      <Nav.Link eventKey={2} href="#more">
        One more
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

    )
};
 export default Navbar; 

