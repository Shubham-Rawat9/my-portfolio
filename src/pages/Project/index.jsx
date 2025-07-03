import React from 'react'
import { Container, Row ,Col } from 'react-bootstrap';
import Testimonials from '../Testimonials';
// import myimage from '../../assets/images/developer2.png';
import projectimg from '../../assets/images/carousel-img.jpg';


const Project = () => {
  return (
    <>
    <section>

    <Container>
        <Row className='text-center'>
          <Col>   
           <h2 className='text-center fs-1 fw-bold'> My Projects : </h2>
    <p className='lead text-muted'>Passionate frontend developer crafting seamless and engaging user experiences through innovative design and cutting-edge technology.</p>
        </Col>
      {/* new code */}
        <Row className='py-5 justify-content-evenly'>
          <Col md={5} className='border border-1 '> 
                  <h2>project first</h2>
                  <div className=''>
                    <img src={projectimg} alt="project-image"  className='img-fluid'/>
                    <div>
                      <a rel="noreferrer" className="text" href="https://shoppingshirt.netlify.app/" target="_blank">SHOPPING SITE</a>
                    </div>
                  </div>
          </Col>
          <Col md={5} className='border border-1 '> 
          <h2>project second</h2>
            <div>
                    <img src={projectimg} alt="project-image" className='img-fluid'/>
                    <div>
                      <a rel="noreferrer" className="text" href="https://shoppingshirt.netlify.app/" target="_blank">SHOPPING SITE</a>
                    </div>
                  </div></Col>
        </Row>

          <Row className='py-2 justify-content-evenly'>
          <Col md={5} className='border border-1 '> 
                  <h2>project third</h2>
                  <div className=''>
                    <img src={projectimg} alt="project-image"  className='img-fluid'/>
                    <div>
                      <a rel="noreferrer" className="text" href="https://shoppingshirt.netlify.app/" target="_blank">SHOPPING SITE</a>
                    </div>
                  </div>
          </Col>
          <Col md={5} className='border border-1 '> 
          <h2>project four</h2>
            <div>
                    <img src={projectimg} alt="project-image" className='img-fluid'/>
                    <div>
                      <a rel="noreferrer" className="text" href="https://shoppingshirt.netlify.app/" target="_blank">SHOPPING SITE</a>
                    </div>
                  </div></Col>
        </Row>
        
        
      {/* new code */}

        </Row>
        <Row className='py-5'>
            <Col xs={12} md={10}  className=" text-md-start d-flex flex-column m-auto justify-content-center align-items-center align-items-md-start">
              <Row className='text-center'>
                <h5>Do you have any Project? Let’s Talk</h5>
              <p> I have worked on a variety of frontend projects that reflect my skills in HTML, CSS, JavaScript, and modern frameworks like React. From responsive portfolio websites to dynamic web apps, each project helped me improve in design, performance, and user experience. My focus is always on clean code, usability, and mobile-friendly layouts. You can check out some of my work below or visit my <a className="text-decoration-none text-dark" href="https://github.com/Shubham-Rawat9" target="_blank" rel="noopener noreferrer"> GitHub</a> for more.</p>
           
                
                <a className="btn btn-outline-dark border-dark txt-link-btn w-25 m-auto"
                                    href="mailto:shubhmarawat97614@gmail.com">Hire me</a>
              </Row>
            </Col>
            {/* <Col xs={12} md={6} className='d-none d-sm-block text-center'>
             <img src={myimage} alt="image" className='img-fluid' />  
            </Col> */}
            </Row>
    </Container>
               </section>
   <Testimonials/>
              </>

  )
}

export default Project;
