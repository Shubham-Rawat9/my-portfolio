

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppNavbar from '../AppNavbar'; 

const Header = () => {
  return (
    <header>
      <Container fluid className="px-3">
        <Row className="py-3 align-items-center">
          {/* <Col xs={12} md={4} className="text-center text-md-start mb-2 mb-md-0">
            <a className="text-decoration-none fs-5 text-dark fw-semibold up-down" href="#">
              Shubham Rawat
            </a>
          </Col> */}
          <Col xs={12} md={12} className="text-center text-md-end">
            <AppNavbar />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
