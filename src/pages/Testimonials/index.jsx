import React from "react";
import { Container, Row ,Col } from 'react-bootstrap';

const Testimonials = () =>{
    return(
                <section>
        <Container>
            <Row className=" py-5">
                <Col className="text-center">
                    <p className="txt-head fw-lighter text-decoration-underline">Testimonials</p>
                    <h2 className="txt-head fs-2">What client says about me ?</h2>
                </Col>

            </Row>
            <Row className=" gy-4 py-4 justify-content-evenly">
                <Col xs={12} sm={10} md={3} className=" border border-1 bg-white py-5 box-hover">
                    <p>I've been working with these guys for a long time and i can say that my experience is really good
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="review-images"></div>
                        <div className="px-2">
                            <p>Rogger scott <br/> <span>Marketing manager</span> <br/><span> <span>★★★★☆</span></span>
                            </p>

                        </div>
                    </div>
                </Col>

                <Col xs={12} sm={10} md={3} className=" border border-1 bg-white py-5 box-hover">
                    <p>I've been working with these guys for a long time and i can say that my experience is really good
                    </p>
                    <div className="d-flex align-items-center ">
                        <div className="review-images"></div>
                        <div className="px-2">
                            <p>Rogger scott <br/> <span>Marketing manager</span> <br/> <span>★★★★☆</span> </p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={10} md={3} className=" border border-1 bg-white py-5 box-hover">
                    <p>I've been working with these guys for a long time and i can say that my experience is really good
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="review-images"></div>
                        <div className="px-2">
                            <p>Rogger scott <br/> <span>Marketing manager</span> <br/> <span>★★★★☆</span> </p>
                        </div>
                    </div>
                </Col>

            </Row>
        </Container>
    </section>
    )
}

export default Testimonials;
