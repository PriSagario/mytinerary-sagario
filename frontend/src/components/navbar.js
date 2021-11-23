import React from 'react';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarP = () => {
  let imageUsu = <img 
  src= '../assets/usuario.jpg'
  width="40"
  height="40"
  alt="User"
  />
  return (
    <Navbar bg="light" expand="lg" className="p-4">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={imageUsu} id="basic-nav-dropdown">
              <NavDropdown.Item >Sign up</NavDropdown.Item>
              <NavDropdown.Item >Sign in</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/cities"> Cities</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarP