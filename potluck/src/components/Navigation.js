import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="/home">Potlucksplanner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Login</Nav.Link>
                            <NavDropdown title="Potluck" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/addPotluck"}>Add Potluck</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/potlucks"}>List</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export default Navigation
