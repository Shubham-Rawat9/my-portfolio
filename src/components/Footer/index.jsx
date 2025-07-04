import React from 'react'
import { Container,Row } from 'react-bootstrap';

const Footer = () => {
  return (
        <Container>
          <Row>
            <p className='text-center'><span className='text-danger fw-bold'>Ⓒ</span>Copyright <span className='fw-bold text-muted'>@Shubham Rawat</span>   All Rights Reserved</p>
          </Row>
        </Container>
  )
}

export default Footer;
