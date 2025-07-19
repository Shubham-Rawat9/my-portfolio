import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

const AppNavbar = () => {

    const [showOffCanvas , setShowOffCanvas] = useState(false);

    const handleClose = () => setShowOffCanvas(false);
    const handleShow = () => setShowOffCanvas(true);


  return ( 
    
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#"><span className="fw-lighter px-5 fs-4 fw-medium">Shubham Rawat</span></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"     
              show = {showOffCanvas}
              onHide = {handleClose}
            >
              <Offcanvas.Header closeButton>
                
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="d-flex justify-content-end align-items-center gap-5 flex-grow-1 pe-3 ">
                  <Link to="/" onClick={handleClose} className=" nav-link text-dark text-decoration-none fs-6 icon-hover">
                    Home{" "}
                  </Link>

                  <NavLink
                    to={"/about"} onClick={handleClose}
                    className={({ isActive }) =>
                      `nav-link  text-dark fs-6 fw-medium  icon-hover${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    About
                  </NavLink>

                  <NavLink
                    to={"/service"} onClick={handleClose}
                    className={({ isActive }) =>
                      `nav-link  text-dark fw-medium fs-6 icon-hover${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    Services
                  </NavLink>

                  <NavLink
                    to={"/project"} onClick={handleClose}
                    className={({ isActive }) =>
                      `nav-link  text-dark fw-medium fs-6 icon-hover${
                        isActive ? "active" : ""
                      }`
                    }
                  >
                    Project
                  </NavLink>

                  <NavLink
                    to={"/contact"}  onClick={handleClose}
                    className={({ isActive }) =>
                      `nav-link  text-dark fw-medium fs-6 icon-hover${
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

  );
};

export default AppNavbar;
