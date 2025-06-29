

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AppNavbar from '../AppNavbar'; 

const Header = () => {
  return (
    <header>
      <Container fluid className="px-3">
        <Row className="py-3 align-items-center">
          <Col xs={12} md={12} className="text-center text-md-end">
            <AppNavbar />
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
