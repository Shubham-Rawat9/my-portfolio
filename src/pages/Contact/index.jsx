import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile , faPaperPlane , faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram , faFigma } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  return (
    <section>
   <Container>
    <Row>
        <Col>
            <h2 className='text-center fs-1 fw-bold'> Contact Me :</h2>

        </Col>            
    </Row>
    <Row className='gy-4 py-5 text-center text-md-start'>
        <Col xs={12} md={4} className='box-hover text-center' data-aos="zoom-out" data-aos-delay="200">
         
          
           <FontAwesomeIcon icon={faMobile} className="fs-4 text-muted" />
                            <div className="py-3">
                            <h5 className="text-capitalize">contact number</h5>
                            
                            <a className="txt-head text-decoration-none text-dark" href="tel:+917249983416">  Call Now</a>
                            
                            </div>
        </Col>
        <Col xs={12} md={4} className='box-hover text-center' data-aos="zoom-out" data-aos-delay="200">
           <FontAwesomeIcon icon={faPaperPlane} className="fs-4 text-muted" />

                            <div className="py-3">
                            <h5>Email</h5>
                            <p><a className="txt-head text-decoration-none text-dark"
                                    href="mailto:shubhmarawat97614@gmail.com">shubamrawat97614@gmail.com</a></p>
                                    </div>
        </Col>
        <Col xs={12} md={4} className='box-hover text-center' data-aos="zoom-out" data-aos-delay="200">
           <FontAwesomeIcon icon={faLink} className="fs-4 text-muted" />

                            <div className="py-3">
                            <h5>Social handle</h5>
                            <ul className="d-flex justify-content-center">
                              
                                <li className="list-unstyled">
        <a href="https://github.com/Shubham-Rawatt" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="fs-5 px-2 text-dark icon-hover" />
        </a> </li>
                                <li className="list-unstyled">
                                     <a href="https://www.linkedin.com/in/shubham-rawat-b99a91374" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="fs-5 px-2 text-dark icon-hover" />
        </a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fs-5 px-2 text-dark icon-hover" />
        </a>
                                </li>

                                <li className="list-unstyled">
                                    <a href="https://www.figma.com/@shubhamrawat" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faFigma} className="fs-5 px-2 text-dark icon-hover" />
        </a>
                                </li>
                            </ul>
                            </div>
        </Col>
    </Row>
   </Container>
   </section>
  )
}

export default Contact;
