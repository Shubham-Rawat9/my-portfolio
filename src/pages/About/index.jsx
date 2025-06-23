import React from 'react'
import { Container, Row ,Col} from 'react-bootstrap';

const About = () => {
  return (
    <section>
   <Container className='py-5'>
    <Row>
      <Col md={4}>
      <h1>A</h1>
      </Col>
        <Col md={8}>
        <h2 className='text-center fs-1 fw-bold'>About pages :</h2>
        <p className="txt-head py-2">Welcome to my web Developer portfolio! i'm Shubham Rawat a skilled and
                            creative web developer
                            with a passion for creating beautiful,responsive,and user friendly Websites. i've worked on
                            a variety of web Projects, ranging from personal E-commerce platforms. </p>

                            <ul className="py-3">
                            <li className="list-unstyled"><span className="txt-nav-sec fs-5">Name :</span> <span className="txt-head fs-5">Shubham Rawat</span></li>
                            <li className="list-unstyled"><span className="txt-nav-sec fs-5">Address :</span><span className="txt-head fs-5">Dwarka more ,New Delhi </span></li>
                            <li className="list-unstyled"><span className="txt-nav-sec fs-5">Email :</span><span className="txt-head fs-5">shubhamrawat@gmail.com</span></li>
                            <li className="list-unstyled"><span className="txt-nav-sec fs-5">Phone :</span><span className="txt-head fs-5"><a className="txt-head text-decoration-none" href="tel:+917249983416">+917249983416</a></span></li>

                        </ul>

          

            </Col>
    </Row>
   </Container>
   </section>
  )
}


export default About;

// new code 👇

// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// // import TypedText from ''; // adjust path if needed
// import TypedText from '../../components/TypedJs';

// const About = () => {
//   return (
//     <section>
//       <Container className="py-5">
//         <Row>
//           <Col md={4}>
//             <h1>A</h1>
//           </Col>
//           <Col md={8}>
//             <h2 className="text-center fs-1 fw-bold">About Page :</h2>

//             {/* Typed Text goes here */}
//             <p className="txt-head py-2">
//               <TypedText />
//             </p>

//             <ul className="py-3">
//               <li className="list-unstyled">
//                 <span className="txt-nav-sec fs-5">Name :</span>{' '}
//                 <span className="txt-head fs-5">Shubham Rawat</span>
//               </li>
//               <li className="list-unstyled">
//                 <span className="txt-nav-sec fs-5">Address :</span>{' '}
//                 <span className="txt-head fs-5">Dwarka More, New Delhi</span>
//               </li>
//               <li className="list-unstyled">
//                 <span className="txt-nav-sec fs-5">Email :</span>{' '}
//                 <span className="txt-head fs-5">shubhamrawat@gmail.com</span>
//               </li>
//               <li className="list-unstyled">
//                 <span className="txt-nav-sec fs-5">Phone :</span>{' '}
//                 <span className="txt-head fs-5">
//                   <a
//                     className="txt-head text-decoration-none"
//                     href="tel:+917249983416"
//                   >
//                     +91 7249983416
//                   </a>
//                 </span>
//               </li>
//             </ul>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default About;
