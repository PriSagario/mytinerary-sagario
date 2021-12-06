import React from 'react';
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBarP = () => {
  let imageUsu = <img 
  src= '../assets/user-login.png'
  width="50"
  height="45"
  alt="User"
  />

  /*let imageLogo = <img 
  src= '../assets/logo.png'
  width="100"
  height="100"
  alt="User"
  />*/

  return (
    <Navbar expand="lg" bg-transparent className="p-1 colorBgNav">
      <Container>
        {/*<div className="logoText"><h2>MyTinerary</h2>{imageLogo}</div>*/}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbarCon"/>
          <Nav className="me-auto">
            <Nav.Link className="navText" as={Link} to="/"> <p className="colorText"> Home </p></Nav.Link>
            <Nav.Link className="navText" as={Link} to="/cities"> <p className="colorText"> Cities </p></Nav.Link>
            <NavDropdown className="navText navIcon" title={imageUsu} id="basic-nav-dropdown">
              <NavDropdown.Item >Sign up</NavDropdown.Item>
              <NavDropdown.Item >Sign in</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default NavBarP