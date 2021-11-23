import React from 'react';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarP = () => {
  let imageUsu = <img 
  src= '../assets/login.png'
  width="40"
  height="40"
  alt="User"
  />
  return (
    <Navbar variant= "light" expand="lg" className="p-4 colorBgNav">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbarCon"/>
          <Nav className="me-auto">
            <NavDropdown className="navText" title={imageUsu} id="basic-nav-dropdown">
              <NavDropdown.Item >Sign up</NavDropdown.Item>
              <NavDropdown.Item >Sign in</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className="navText" as={Link} to="/"> <p className="colorText"> Home </p></Nav.Link>
            <Nav.Link className="navText" as={Link} to="/cities"> <p className="colorText"> Cities </p></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarP