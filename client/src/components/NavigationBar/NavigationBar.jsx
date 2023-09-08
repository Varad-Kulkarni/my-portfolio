import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import './NavigationBar.css'


const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand as={Link} to='/'>My Portfolio</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to='/about'>About</Nav.Link>
                    <NavDropdown title="Projects" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to='/projects'>Stack-Overflow clone</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/projects'>E-cart</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link as={Link} to='/contacts'>Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavigationBar