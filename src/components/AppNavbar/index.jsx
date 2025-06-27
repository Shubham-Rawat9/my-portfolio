import React from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const AppNavbar = () => {
  return (
    // <Nav className='d-flex align-items-center justify-content-evenly'>
    //     <Link to="/" className="text-decoration-none text-dark fs-6">Home </Link>
    //     <NavLink to={"/about"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>About</NavLink>
    //     <NavLink to={"/service"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>Services</NavLink>
    //     <NavLink to={"/project"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>Project</NavLink>
    //     <NavLink to={"/contact"} className={({ isActive }) => `nav-link text-decoration-none text-dark fs-6${isActive ? 'active' : ''}`}>Contact</NavLink>

    //     <Button variant="secondary">Lets'Talk</Button>
    // </Nav>

    //  new code 😎

    <>
      {["md"].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><h5>Shubham Rawat</h5></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-center align-items-center gap-5 flex-grow-1 pe-3 ">
                  <Link to="/" className=" text-dark text-decoration-none fs-6">
                    Home{" "}
                  </Link>
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      `nav-link  text-dark fs-6${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>
                  <NavLink
                    to={"/service"}
                    className={({ isActive }) =>
                      `nav-link  text-dark fs-6${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    Services
                  </NavLink>
                  <NavLink
                    to={"/project"}
                    className={({ isActive }) =>
                      `nav-link  text-dark fs-6${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    Project
                  </NavLink>
                  <NavLink
                    to={"/contact"}
                    className={({ isActive }) =>
                      `nav-link  text-dark fs-6${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    Contact
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>

    // anoter new code 😂
  );
};

export default AppNavbar;
