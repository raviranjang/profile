import React from "react"
import { Container, Navbar, Nav } from 'react-bootstrap'
import "./Navbar.css"

const NavBar = () => {
    return (
        <Navbar className="fixed-header" bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Ravi Ranjan</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                    <Nav.Link href="#work-exp">Work Experience</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                    <Nav.Link href="#contacts">Contacts</Nav.Link>
                    <Nav.Link target="_blank" href="https://ranjanravi.medium.com/">Blogs</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export { NavBar }


