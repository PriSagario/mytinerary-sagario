import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterP = () => {
    return (
        <footer className="siteHeader p-4">
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Nav.Link as={Link} to="/" >Home</Nav.Link>
                    <Nav.Link as={Link} to="/cities">Cities</Nav.Link>
                    <p>
                        All rights reserved - 2021 - MyTinerary</p>
                </Container>
            </Navbar>
        </footer>
    )
}
export default FooterP
