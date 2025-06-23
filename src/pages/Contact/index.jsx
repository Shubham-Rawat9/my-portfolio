import React from 'react'
import { Container ,Row,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile , faPaperPlane , faLink } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <section>
   <Container>
    <Row>
            <h2 className='text-center fs-1 fw-bold'> Contact Me</h2>
            
    </Row>
    <Row>
        <Col md={4}>
         {/* <i className="fa fa-mobile fs-4"></i> */}
          
           <FontAwesomeIcon icon={faMobile} className="fs-4" />
                            <div className="py-3">
                            <h5 className="text-capitalize">contact number</h5>
                            <p><a className="txt-head text-decoration-none" href="tel:+91">+917249983416</a></p>
                            </div>
        </Col>
        <Col md={4}>
         {/* <i className="fa fa-paper-plane fs-4"></i> */}
           <FontAwesomeIcon icon={faPaperPlane} className="fs-4" />

                            <div className="py-3">
                            <h5>Email</h5>
                            <p><a className="txt-head text-decoration-none"
                                    href="mailto:shubhmarawat97614@gmail.com">shubamrawat97614@gmail.com</a></p>
                                    </div>
        </Col>
        <Col md={4}>
         {/* <i className="fa-solid fa-link fs-4"></i> */}
           <FontAwesomeIcon icon={faLink} className="fs-4" />

                            <div className="py-3">
                            <h5>Social handle</h5>
                            <ul className="d-flex align-content-start">
                                <li className="list-unstyled"><a href="#"><i
                                            className="fa-brands fa-x-twitter fs-5 px-2 txt-head"></i></a>
                                </li>
                                <li className="list-unstyled"><a href="#"><i
                                            className="fa-brands fa-linkedin-in fs-5 px-2 txt-head"></i></a>
                                </li>
                                <li className="list-unstyled"><a href="#"><i
                                            className="fa-brands fa-instagram fs-5 px-2 txt-head"></i></a>
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
