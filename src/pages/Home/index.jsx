import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import myimage from '../../assets/images/developer2.png';
import TypedText from '../../components/TypedJs';
import About from '../About';
import Service from '../Service';
import Project from '../Project';
import Contact from '../Contact';

const Home = () => (
  <>
    <section>
      <Container>
        <Row className="align-items-center">
          <Col xs={7} sm={10} md={7} lg={6} className=' mx-auto text-center text-md-start position-relative'>
            <h2 className="txt-head">
              Hi there, I am{' '}
              <span className="text-secondary display-6 fw-semibold">Shubham Rawat</span> <br />
              and I am a passionate <br />
              <span className="text-secondary">
                <TypedText />
              </span>
              {/* <span className="typed-cursor typed-cursor--blink px-3" aria-hidden="true">|</span> */}
            </h2>

            <div className="py-5 ">
              <a class="btn btn-outline-dark border-dark w-25 m-auto" href="#">Download CV</a>
            </div>
          </Col>

          <Col md={5} xs={12} sm={2} lg={6}   className="d-none d-md-flex justify-content-center align-items-center">
           
            <img src={myimage} alt="image" className="img-fluid"  />
          </Col>
        </Row>
      </Container>
    </section>
    <About />
    <Service />
    <Project />
    <Contact />
  </>
);

export default Home;
