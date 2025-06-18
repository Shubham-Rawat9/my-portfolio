import React from 'react'
import { Nav } from 'react-bootstrap';
import { Link , NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button'; 


const AppNavbar = () => {
    return (

        <Nav className='d-flex align-items-center justify-content-evenly'>
            <Link to="/" className="text-decoration-none text-dark fs-6">Home </Link>
            <NavLink to={"/about"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>About</NavLink>
            <NavLink to={"/service"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>Services</NavLink>
            <NavLink to={"/project"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>Project</NavLink>
            <NavLink to={"/contact"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>Contact</NavLink>
        
           
            <Button variant="secondary">Lets'Talk</Button>
        </Nav>
    )
}

export default AppNavbar;


// import React from 'react';
// import { Navbar, Nav, Container, Button } from 'react-bootstrap';
// import { Link, NavLink } from 'react-router-dom';

// import React from 'react'
// import { Nav } from 'react-bootstrap';
// import { Link , NavLink } from 'react-router-dom';
// import Button from 'react-bootstrap/Button'; 


// const AppNavbar = () => {
//     return (
//         <Navbar bg="light" expand="lg">
//             <Container>
//                 <Navbar.Brand as={Link} to="/" className="fs-5 text-dark text-decoration-none">Brand</Navbar.Brand>
//                 <Navbar.Toggle aria-controls="basic-navbar-nav" />
//                 <Navbar.Collapse id="basic-navbar-nav">
//                     <Nav className="me-auto">
//                         <NavLink to="/" className={({ isActive }) => `nav-link text-dark fs-6 ${isActive ? 'active' : ''}`}>Home</NavLink>
//                         <NavLink to="/about" className={({ isActive }) => `nav-link text-dark fs-6 ${isActive ? 'active' : ''}`}>About</NavLink>
//                         <NavLink to="/service" className={({ isActive }) => `nav-link text-dark fs-6 ${isActive ? 'active' : ''}`}>Services</NavLink>
//                         <NavLink to="/project" className={({ isActive }) => `nav-link text-dark fs-6 ${isActive ? 'active' : ''}`}>Project</NavLink>
//                         <NavLink to="/contact" className={({ isActive }) => `nav-link text-dark fs-6 ${isActive ? 'active' : ''}`}>Contact</NavLink>
//                     </Nav>
//                     <Button variant="secondary">Let's Talk</Button>
//                 </Navbar.Collapse>
//             </Container>
//         </Navbar>
//     );
// };

// export default AppNavbar;


// const useState = 