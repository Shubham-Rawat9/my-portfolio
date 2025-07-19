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
          <Col xs={7} sm={10} md={7} lg={6} className=' mx-auto text-center text-md-start position-relative'  data-aos="fade-right">
            <h2 className="txt-head">
              Hi there, I am{' '}
              <span className="text-muted fs-1 lh-1 font-monospace fw-bold">Shubham Rawat</span> <br />
              and I am a passionate <br />
              <span className="text-secondary">
                <TypedText />
              </span>
            
            </h2>

            <div className="py-5 ">
              <a className="portfolio-btn  m-auto" href="/SHUBHAM RAWAT.pdf" download> Download CV </a>

            </div>
          </Col>

          <Col md={5} xs={12} sm={2} lg={6}   className="d-none d-md-flex justify-content-center align-items-center" data-aos="fade-left">
           
            <img src={myimage} alt="image" className="img-fluid"    />
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
