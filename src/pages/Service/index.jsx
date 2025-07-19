import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../../components/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode, faMobileAlt, faPalette, faSearch } from '@fortawesome/free-solid-svg-icons';
import SkillSlider from '../../components/Skill';



const Service = () => {
        return (
                <>
                <section data-aos="fade-up">
                        <Container>
                                <Row className='text-center'>
                                        <Col>
                                                <h2 className="fs-1 fw-bold">Services :</h2>
                                                <p className="lead text-muted">Bringing your ideas to life with clean, responsive, and high-performance front-end development</p>
                                        </Col>
                                </Row>
                                {/* first card row start*/}
                                <Row className=" justify-content-evenly py-5">
                                        <Col xs={12} sm={6} md={3} className='px-2 d-flex flex-column' data-aos="zoom-in-up" data-aos-delay="300">
                                            <div className="shadow px-2 py-5 mb-5 bg-body-tertiary rounded  i-card flex-grow-1">
                                                <ServiceCard icon={faLaptopCode} title={" Responsive Web development"} desc={"Responsive websites using React, HTML, CSS , JavaScript & React"} />
                                                </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={3} className="px-2 d-flex flex-column" data-aos="zoom-in-up" data-aos-delay="400">

                                                <div className='shadow px-2 py-5 mb-5 bg-body-tertiary rounded  i-card flex-grow-1'>
                                                <ServiceCard icon={faMobileAlt} title={"Mobile-Friendly Design"} desc={"Optimized design for all screen sizes and devices"} />
                                                </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={3} className="px-2 d-flex flex-column" data-aos="zoom-in-up" data-aos-delay="500">

                                                <div className='shadow px-2 py-5 mb-5 bg-body-tertiary rounded  i-card flex-grow-1'>
                                                <ServiceCard icon={faPalette} title={"  Converting Designs to Code"} desc={"Clean, intuitive interfaces with a focus on user experience"} />
                                                </div>
                                        </Col>
                                        <Col xs={12} sm={6} md={3} className="px-2 d-flex flex-column" data-aos="zoom-in-up" data-aos-delay="600">
                                                <div className='shadow px-2 py-5 mb-5 bg-body-tertiary rounded  i-card flex-grow-1'>

                                                <ServiceCard icon={faSearch} title={"SEO-Friendly Front-End"} desc={"Semantic HTML, optimized meta tags, accessible images, and fast-loading responsive designs"} />
                                                </div>
                                        </Col>  
                                </Row>
                                {/* first card row end */}
                               
                        </Container>
                </section>
                <SkillSlider/>
               
                </>
        )
}

export default Service;
