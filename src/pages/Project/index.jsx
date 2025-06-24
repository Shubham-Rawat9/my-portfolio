import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap';
import Testimonials from '../Testimonials';
import myimage from '../../assets/images/developer2.png';


const Project = () => {
  return (
    <>
    <section>

    <Container>
        <Row className='text-center'>
    <h2 className='text-center fs-1 fw-bold'> My Projects </h2>
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </Row>
        <Row className='py-5'>
            <Col md={6}>
              <Row className='text-center'>
                <h5>Do you have any Project? Let’s Talk</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat pariatur enim provident officiis perspiciatis quam maiores iure! Ea distinctio ?</p>
              {/* <a className="p-2 border border-1" href="#">Contact Me</a>
               */}
                <a className="btn btn-outline-dark border-dark txt-link-btn w-25 m-auto" href="#">Hire Me</a>
              </Row>
            </Col>
            <Col md={6}>
             <img src={myimage} alt="image" className='img-fluid' />
            </Col>
            </Row>
    </Container>
               </section>
   <Testimonials/>
              </>

  )
}

export default Project;
