import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom'; 

function NavBarPizza() {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="mb-0 shadow-sm py-3">  
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-warning">
                    🍕 PIZZA QUIZ
                </Navbar.Brand> 

                <Navbar.Toggle aria-controls="basic-navbar-nav" />  
                
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto fw-semibold">
                        <Nav.Link as={NavLink} to="/" className={({ isActive }) => isActive ? "text-warning border-bottom border-warning" : "text-white"}>
                            Home
                        </Nav.Link>
                        
                        <Nav.Link as={NavLink} to="/news" className={({ isActive }) => isActive ? "text-warning border-bottom border-warning" : "text-white"}>
                            News
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/quiz" className={({ isActive }) => isActive ? "text-warning border-bottom border-warning" : "text-white"}>
                            Quiz
                        </Nav.Link>

                        {/* Thêm Button Users và Posts cho bài tập Lazy Loading  */}
                        <Nav.Link as={NavLink} to="/users" className={({ isActive }) => isActive ? "text-warning border-bottom border-warning" : "text-white"}>
                            Users
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/posts" className={({ isActive }) => isActive ? "text-warning border-bottom border-warning" : "text-white"}>
                            Posts
                        </Nav.Link>

                        <Nav.Link as={NavLink} to="/contact" className={({ isActive }) => isActive ? "text-warning border-bottom border-warning" : "text-white"}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    );
}   

export default NavBarPizza;