// import React from 'react'
// import myimage from '../../assets/images/avt-imgjpeg.jpeg';
// import { Container, Row, Col } from 'react-bootstrap';
// import About from '../About';
// import Service from '../Service';
// import Project from '../Project';
// import Contact from '../Contact';



// const Home = () => (
//   <>
//   <section className='bg-secondary'>
//     <Container className=''>
//       <Row className='py-5'>
//         <Col md={8}>

//            <h2 className="txt-head">Hi there, I am <span className="text-secondary display-6 fw-semibold">Shubham Rawat</span> <br />
//             and i am a passionate
//             <br /><span id="element" className="text-secondary">Freelancer</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true">|</span></h2>

//           <div className='py-5'>
//             <a className="btn btn-outline-dark border-dark txt-link-btn px-3 mx-5" href="#">Hire Me</a>
//             <a className="btn btn-outline-dark border-dark txt-link-btn" href="#">View Work</a> 
//           </div>
//         </Col>

//         <Col md={4}>
//         <h2><marquee direction="left">isme image aayegi</marquee></h2>
//           {/* <img src={myimage} alt="banner-image"  className='img-fluid'/> */}
//         </Col>
//       </Row>
//     </Container>
    
//   </section>
//     <About/>
//     <Service/>
//   <Project/>
//   <Contact/>
//   </>
// )

//  export default Home;


// new code 👇

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
          <Col md={7}>
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
              
              <a className="btn btn-outline-dark border-dark txt-link-btn" href="#">
                Download CV
              </a>
            </div>
          </Col>

          <Col md={5}>
           
            <img src={myimage} alt="image" className="img-fluid" />
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
