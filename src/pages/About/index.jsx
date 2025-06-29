import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';
import myimage from '../../assets/images/developer2.png';

const About = () => {
  return (
    <section>
   <Container className='py-5'>
    <Row>
      
        <h2 className='text-center fs-1 fw-bold'>About :</h2>

     
      <Col md={5}  className='d-none d-md-block'>
      <img src={myimage} alt="image" className='img-fluid' />
      </Col>
        <Col xs={12} md={7} className='d-flex flex-column justify-content-center align-items-center text-center text-md-start'>
        <span className="fs-5 fst-italic  py-2">Welcome to my web Developer portfolio! i'm Shubham Rawat a skilled and
                            creative web developer
                            with a passion for creating beautiful,responsive,and user friendly Websites. i've worked on
                            a variety of web Projects, ranging from personal E-commerce platforms. </span>

                            <ul className="py-5 text-center list-unstyled">
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Name :</span> <span className="ms-2 fs-5">Shubham Rawat</span></li>
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Address :</span><span className="ms-2 fs-5">Dwarka more ,New Delhi </span></li>
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Email :</span><span className="ms-2 fs-5">shubhamrawat@gmail.com</span></li>
                            <li className="mb-2"><span className="fw-semibold text-dark fs-4">Phone :</span><span className="ms-2 fs-5"><a className="txt-head text-decoration-none text-dark" href="tel:+917249983416">+917249983416</a></span></li>
                        </ul>
                         
   



          

            </Col>
    </Row>
   </Container>
   </section>
  )
}


export default About;

