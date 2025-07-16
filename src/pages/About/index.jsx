import React, { useEffect } from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import myimage from '../../assets/images/developer2.png';

const About = () => {
 
  
  return (
    <section data-aos="fade-up" >
   <Container className='py-5'>
    <Row>
      
        <h2 className='text-center fs-1 fw-bold'>About :</h2>

     
      <Col md={5}  className='d-none d-md-block'>
      <img src={myimage} alt="image" className='img-fluid' data-aos="fade-right"
            />
      </Col>
        <Col xs={12} md={7} className='d-flex flex-column justify-content-center align-items-center text-center text-md-start'  data-aos="fade-left"
            >
        <span className="fs-5 py-2">Welcome to my web Developer portfolio! i'm Shubham Rawat a skilled and
                            creative web developer
                            with a passion for creating beautiful,responsive,and user friendly Websites. i've worked on
                            a variety of web Projects, ranging from personal E-commerce platforms. </span>

                            <ul className="py-5 text-center list-unstyled">
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Name :</span> <span className="ms-2 fs-5">Shubham Rawat</span></li>
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Address :</span><span className="ms-2 fs-5">Dwarka more ,New Delhi </span></li>
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Email :</span><a className="ms-2 fs-5 text-decoration-none text-dark" href="mailto:shubhmarawat97614@gmail.com">shubhamrawat@gmail.com</a></li>
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Phone :</span><a className="txt-head text-decoration-none text-dark ms-2 fs-5" href="tel:+917249983416">+917249983416</a></li>
                        </ul>
            </Col>
    </Row>
   </Container>
   </section>
  )
}


export default About;

