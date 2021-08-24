import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from '../components/Home'
import Login from '../components/Login'
import Register from './Register';

function Navigation() {
    return (
        <Router>
            <div>

                <Navbar bg="dark" variant={"dark"} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Potlucksplanner</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
                                <Nav.Link as={Link} to={"/register"}>Register</Nav.Link>
                                <Nav.Link as={Link} to={"/login"}>Login</Nav.Link>
                                <NavDropdown title="Potluck" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default Navigation
