import { Navbar, NavbarBrand,Nav,NavItem, Container, Button, Row, Col } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import {BiShareAlt} from 'react-icons/bi'

export default function Header(){
    
    return(
        <Navbar bg='brand' expand="md" className="shadow-sm" sticky="top" className='brandname'>
            <Container>
                <NavbarBrand>
                    <h3><strong> <BiShareAlt/>Reacter</strong></h3>
                </NavbarBrand>

                <NavbarToggle/>
                <NavbarCollapse>
                <Nav bg='brand2' className="mx-auto">
                    <NavItem className="nav-link">
                        Home
                    </NavItem>
                    <NavItem className="nav-link">
                        Categories
                    </NavItem>
                    <NavItem className="nav-link">
                        Listings
                    </NavItem>
                    <NavItem className="nav-link">
                        About
                    </NavItem>
                    <NavItem className="nav-link">
                        Contact Us
                    </NavItem>
                    
                    <Row>
                        <Col>
                        
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Nav>
                <Nav className="ms-auto">
                    <NavItem  className="nav-link">  
                        <Button variant='outline-dark'>Login</Button>
                    </NavItem>

                    <NavItem  className="nav-link">
                        <Button variant='dark'>Get Started</Button>
                    </NavItem>

                    </Nav>
                </NavbarCollapse>
            </Container>
            
        </Navbar>
    )
}