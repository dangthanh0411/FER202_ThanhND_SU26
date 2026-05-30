import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

function MyNavbar() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow-sm py-3">
            <Container>
                <Navbar.Brand href="#home" className="fw-bold fs-3 text-warning d-flex align-items-center">
                    <img
                        alt="Pizza Logo"
                        src="/images/icon.jpg" 
                        width="40" 
                        height="40"
                        className="d-inline-block align-top me-2 rounded-circle" 
                    />
                    Pizzas
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fs-5">
                        <Nav.Link href="#home" className="active mx-2">Home</Nav.Link>
                        <Nav.Link href="#menu" className="mx-2">Menu</Nav.Link>
                        <Nav.Link href="#about" className="mx-2">About</Nav.Link>
                        <Nav.Link href="#contact" className="mx-2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;