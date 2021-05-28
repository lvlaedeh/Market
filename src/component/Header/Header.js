import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">FC Market</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">
                        <i className="fa fa-shopping-cart"></i>
                    </Nav.Link>
                    <Nav.Link href="#link">
                        <i className="fa fa-user"></i>
                    </Nav.Link>
                </Nav>  
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
