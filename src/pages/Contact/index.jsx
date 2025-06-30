import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile , faPaperPlane , faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
        <Col xs={12} md={4} className='box-hover text-center'>
         
          
           <FontAwesomeIcon icon={faMobile} className="fs-4" />
                            <div className="py-3">
                            <h5 className="text-capitalize">contact number</h5>
                            
                            <a className="txt-head text-decoration-none text-dark" href="tel:+917249983416">✌️</a>
                            
                            </div>
        </Col>
        <Col xs={12} md={4} className='box-hover text-center'>
           <FontAwesomeIcon icon={faPaperPlane} className="fs-4" />

                            <div className="py-3">
                            <h5>Email</h5>
                            <p><a className="txt-head text-decoration-none text-dark"
                                    href="mailto:shubhmarawat97614@gmail.com">shubamrawat97614@gmail.com</a></p>
                                    </div>
        </Col>
        <Col xs={12} md={4} className='box-hover text-center'>
           <FontAwesomeIcon icon={faLink} className="fs-4" />

                            <div className="py-3">
                            <h5>Social handle</h5>
                            <ul className="d-flex justify-content-center">
                              
                                <li className="list-unstyled">
        <a href="https://github.com/Shubham-Rawat9" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} className="fs-5 px-2 text-dark" />
        </a> </li>
                                <li className="list-unstyled">
                                     <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedinIn} className="fs-5 px-2 text-dark" />
        </a>
                                </li>
                                <li className="list-unstyled">
                                    <a href="https://instagram.com/your-username" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} className="fs-5 px-2 text-dark" />
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
