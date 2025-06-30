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
    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
        </Col>
      {/* new code */}

        <Row>
          <Col>
<div className="project-card">
  {/* first project */}
  <div className="card">
    <p className="title">
     Project 1
    </p>
  </div>
  
  {/* second project */}
     <div className="card">
    <p className="title">
     Project 2
    </p>
  </div>

    {/* third project */}
     <div className="card">
    <p className="title">
     Project 3
    </p>
  </div>

{/* four project */}
 <div className="card">
    <p className="title">
     Project 4
    </p>
  </div>

</div>
          </Col>
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
