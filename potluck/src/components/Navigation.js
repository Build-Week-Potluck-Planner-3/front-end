import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from "react-router-dom";

function Navigation() {
    return (
        <div>
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Potlucksplanner</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to={"/Home"}>Home</Nav.Link>
                            <Nav.Link as={Link} to={"/Register"}>Register</Nav.Link>
                            <Nav.Link as={Link} to={"/"}>Login</Nav.Link>
                            <NavDropdown title="Potluck" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/potluckForm"}>PotluckForm</NavDropdown.Item>
                                {/* Link to edit potluck will be moved to the Potluck component once it's set up*/}
                                <NavDropdown.Item as={Link} to={"/potlucks/edit/:id"}>Edit</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to={"/potlucks"}>List</NavDropdown.Item>
                                {/* Link to Potluck will be moved to the PotluckList component once it's set up*/}
                                <NavDropdown.Item as={Link} to={"/potlucks/:id"}>More Info</NavDropdown.Item> 
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

    );
}

export default Navigation
