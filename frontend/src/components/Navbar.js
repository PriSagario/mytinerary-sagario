import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authActions from "../redux/actions/authActions"
import { connect } from "react-redux"

function NavBarP(props) {
  !props.token && props.tokenDale()
  console.log(props.token)
  let imageUsu = <img
    src='../assets/user-login.png'
    width="50"
    height="45"
    alt="User"
  />

  return (
    <Navbar expand="lg" className="p-1 colorBgNav">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto navbarCon" />
          <Nav className="me-auto">
            <Nav.Link className="navText" as={Link} to="/"> <p className="colorText"> Home </p></Nav.Link>
            <Nav.Link className="navText" as={Link} to="/cities"> <p className="colorText"> Cities </p></Nav.Link>
            {!props.token ? (
              <NavDropdown className="navText navIcon" title={imageUsu} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/auth/signUp">Sign up</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/auth/signIn">Sign in</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <NavDropdown
                  className="white-link "
                  title={
                    <img
                      src={
                        props.user.photo
                          ? props.user.photo
                          : "../assets/user-login.png"
                      }
                      className="nav-img shadowfilter"
                      alt="user_photo"
                    />
                  }
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item>
                    <Link to="/" onClick={() => { props.signOut() }}>
                      <span className="white-link ">Sign out</span>
                    </Link>
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

const mapDispatchToProps = {
  signIn: authActions.signIn,
  tokenDale: authActions.tokenDale,
  signOut: authActions.signOut,
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
    token: state.authReducer.token,
  }
}

  export default connect(mapStateToProps, mapDispatchToProps)(NavBarP)