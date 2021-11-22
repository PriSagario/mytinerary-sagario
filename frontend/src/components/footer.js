import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

const FooterP = () => {
    return (
        <footer className="siteHeader p-4">
            <Navbar expand="lg" variant="light" bg="light">
                <Container>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Cities</Nav.Link>
                    <p>
                        All rights reserved - 2021 - MyTinerary</p>
                </Container>
            </Navbar>
        </footer>
    )
}
export default FooterP
