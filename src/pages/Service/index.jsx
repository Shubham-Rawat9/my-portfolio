import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../../components/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faLaptopCode  , faMobileAlt ,faPalette  , faSearch ,faLayerGroup ,faUserGroup , faCamera , faDesktop , faGear } from '@fortawesome/free-solid-svg-icons';
// import { FaLaptopCode } from '@fortawesome/free-brands-svg-icons';


const Service = () => {
  return (
    <section>
   <Container>
    <Row className='text-center'>
        <Col>
       <h2 className="fs-1 fw-bold">Services :</h2>
                    <h2 className="txt-head py-2">I do awesome services for my clients</h2>
                    <p className="txt-head">Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia</p>
                        </Col>
    </Row>
           {/* first card row start*/}
      <Row className=" justify-content-evenly py-5"> 
                    <Col xs={12} sm={6} md={3} className="shadow p-4 mb-5 bg-body-tertiary rounded  i-card">
                           
                                <ServiceCard  icon={faLaptopCode } title={" Responsive Web development"} desc={"Responsive websites using React, HTML, CSS , JavaScript & React"}/>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="   shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                       
                        
                            <ServiceCard icon={faMobileAlt  } title={"Mobile-Friendly Design"} desc={"Optimized design for all screen sizes and devices"}/>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="  shadow p-3 mb-5 bg-body-tertiary rounded i-card">
                        
                        
                            <ServiceCard icon={faPalette  } title={"  Converting Designs to Code"} desc={"Clean, intuitive interfaces with a focus on user experience"}/>

                    </Col>
                         <Col xs={12} sm={6} md={3} className="   shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                        
                        
                            <ServiceCard icon={faSearch  } title={"SEO-Friendly Front-End"} desc={"Semantic HTML, optimized meta tags, accessible images, and fast-loading responsive designs"}/>

                    </Col>
                </Row>
                {/* first card row end */}
                {/* second card row start */}
                  {/* <Row className=" justify-content-evenly py-3">
                    <Col xs={12} sm={6} md={3} className="bgm-card   shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                        
                        
                            <ServiceCard icon={faSearch  } title={"SEO-Friendly Front-End"} desc={"Semantic HTML, optimized meta tags, accessible images, and fast-loading responsive designs"}/>

                    </Col>
                    <Col xs={12} sm={6} md={3} className="bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                       
                            <ServiceCard icon={faDesktop } title={"M Development"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo perspiciatis Molestias maxime quae minus soluta id ducimus nemo velit accusamus magnam similique omni architecto delectus nostrum!"}/>
                            

                    </Col>
                    <Col xs={12} sm={6} md={3} className="bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded opacity-100 i-card">
                        
                       
                            <ServiceCard icon={faGear } title={"Other Services"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo perspiciatis Molestias maxime quae minus soluta id ducimus nemo velit accusamus magnam similique omni architecto delectus nostrum!"}/>

                    </Col>
                </Row> */}
                {/* second card row end */}
   </Container>
   </section>
  )
}

export default Service;
