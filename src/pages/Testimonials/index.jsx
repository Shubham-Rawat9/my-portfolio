import React from "react";
import { Container, Row ,Col } from 'react-bootstrap';
import TestimonialsCard from "../../components/TestimonialsCard";
import fstimg  from '../../assets/images/testimonials-2.jpg'
import secimg  from '../../assets/images/testimonials-3.jpg'
import thdimg  from '../../assets/images/testimonials-4.jpg'
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
            
                    <TestimonialsCard review={'“We hired Shubham Rawat to build a custom web app under a tight deadline—and they absolutely delivered. Clean code, smart solutions, and always one step ahead.”'}  name={"Nina Patel"} img={fstimg} role={"Digital Strategist at Flow Agency"} />
                </Col>

                <Col xs={12} sm={10} md={3} className=" border border-1 bg-white py-5 box-hover">
                    <TestimonialsCard review={'“Shubham Rawat transformed our outdated website into a modern, responsive platform that our customers love. They were quick, communicative, and extremely knowledgeable throughout the entire process”'}  name={"Isla Moore"} img={secimg} role={" Creative Director"} />
                    
                </Col>
                <Col xs={12} sm={10} md={3} className=" border border-1 bg-white py-5 box-hover">
                    <TestimonialsCard review={'“It’s rare to find a developer who is both technically sharp and easy to work with. Shubham Rawat explained everything clearly, offered helpful suggestions, and built a fast, secure site that scaled with our needs.”'}  name={"Rachel G"} img={thdimg} role={"Small Business Owner"} />
                    
                </Col>

            </Row>
        </Container>
    </section>
    )
}

export default Testimonials;
