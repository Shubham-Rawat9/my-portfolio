import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
const Home = () => (
  <div>
    <Container>
      <Row className='py-5'>
        <Col md={8}>

           <h2 className="txt-head">Hi there, I am <span className="text-secondary display-6 fw-semibold">Shubham Rawat</span> <br />
            and i am a passionate
            <br /><span id="element" className="text-secondary">Freelancer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></h2>

          <div className='py-5'>
            <a className="btn btn-outline-dark border-dark txt-link-btn px-3 mx-5" href="#">Hire Me</a>
            <a className="btn btn-outline-dark border-dark txt-link-btn" href="#">View Work</a> 
          </div>

          {/* <h2 className="txt-head">Hi there, I am <span
                                    className="text-secondary display-6 fw-semibold">Shubham Rawat</span> <br/>
                                and i am a passionate <br/><span id="element" className="text-secondary"></span></h2>
                            <a className="btn btn-outline-dark border-warning txt-link-btn gentle-tilt-move-shake my-5"
                                href="#">Hire me</a>
                            <a className="btn btn-outline-dark border-warning txt-link-btn mx-3 gentle-tilt-move-shake my-5"
                                href="#">View work</a>
                        </div>
                        <div className="col-md-4 order-md-2 order-2"><img src="assets/images/my_img.png"
                                className="img-fluid user-image" alt="my image"></div>
                    </div> */}
        </Col>

        <Col md={4}>
          <h1>B</h1>
        </Col>
      </Row>
    </Container>
  </div>
)

        export default Home;
