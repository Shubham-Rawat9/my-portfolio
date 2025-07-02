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
          <Col>   
           <h2 className='text-center fs-1 fw-bold'> My Projects : </h2>
    <p>Passionate frontend developer crafting seamless and engaging user experiences through innovative design and cutting-edge technology.</p>
        </Col>
      {/* new code */}
        <Row className='py-4'>
          <Col md={6}> 
                  <h2>project first</h2>
                  <div>
                    <img src="" alt="img-loading" />
                    <div>
                      <a rel="noreferrer" class="text" href="https://shoppingshirt.netlify.app/" target="_blank">SHOPPING SITE</a>
                    </div>
                  </div>
          </Col>
          <Col md={6}> <h2>project second</h2>
            <div>
                    <img src="" alt="img-loading" />
                    <div>
                      <a rel="noreferrer" class="text" href="https://shoppingshirt.netlify.app/" target="_blank">SHOPPING SITE</a>
                    </div>
                  </div></Col>
        </Row>
        
      {/* new code */}

        </Row>
        <Row className='py-3'>
            <Col xs={12} md={6}  className="text-center text-md-start d-flex flex-column justify-content-center align-items-center align-items-md-start">
              <Row className='text-center'>
                <h5>Do you have any Project? Let’s Talk</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, placeat pariatur enim provident officiis perspiciatis quam maiores iure! Ea distinctio ?</p>
           
                
                <a className="btn btn-outline-dark border-dark txt-link-btn w-25 m-auto"
                                    href="mailto:shubhmarawat97614@gmail.com">Hire me</a>
              </Row>
            </Col>
            <Col xs={12} md={6} className='d-none d-sm-block text-center'>
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
