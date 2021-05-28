import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

const Header = () => {
    return (
        <header>
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">FC Market</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">سبد خرید</Nav.Link>
                    <Nav.Link href="#link">حساب کاربری</Nav.Link>
                </Nav>  
            </Container>
        </Navbar>
        </header>
    )
}

export default Header
