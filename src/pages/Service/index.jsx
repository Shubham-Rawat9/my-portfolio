import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ServiceCard from '../../components/ServiceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {   faLayerGroup ,faUserGroup , faCamera , faDesktop , faGear } from '@fortawesome/free-solid-svg-icons';
import { faChromecast } from '@fortawesome/free-brands-svg-icons';


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
                    <Col xs={12} sm={6} md={3} className="shadow p-4 mb-5 bg-body-tertiary rounded bgm-card i-card">
                           
                                <ServiceCard  icon={faChromecast } title={"B stratagy"} desc={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, reiciendis cumque, error adminimanemo repellendus sapiente facilis sed, natus rem cupiditate suscipit esse? Illo corporis molestias odit suscipit odio"}/>
                    </Col>
                    <Col xs={12} sm={6} md={3} className=" bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                       
                        
                            <ServiceCard icon={faLayerGroup } title={"Development"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo perspiciatis Molestias maxime quae minus soluta id ducimus nemo velit accusamus magnam similique omni architecto delectus nostrum!"}/>
                    </Col>
                    <Col xs={12} sm={6} md={3} className="bgm-card  shadow p-3 mb-5 bg-body-tertiary rounded i-card">
                        
                        
                            <ServiceCard icon={faUserGroup } title={"Market Reporting"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo perspiciatis Molestias maxime quae minus soluta id ducimus nemo velit accusamus magnam similique omni architecto delectus nostrum!"}/>

                    </Col>
                </Row>
                {/* first card row end */}
                {/* second card row start */}
                  <Row className=" justify-content-evenly py-3">
                    <Col xs={12} sm={6} md={3} className="bgm-card   shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                        
                        
                            <ServiceCard icon={faCamera } title={"Graphic Design"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo perspiciatis Molestias maxime quae minus soluta id ducimus nemo velit accusamus magnam similique omni architecto delectus nostrum!"}/>

                    </Col>
                    <Col xs={12} sm={6} md={3} className="bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                       
                            <ServiceCard icon={faDesktop } title={"M Development"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo perspiciatis Molestias maxime quae minus soluta id ducimus nemo velit accusamus magnam similique omni architecto delectus nostrum!"}/>
                            

                    </Col>
                    <Col xs={12} sm={6} md={3} className="bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded opacity-100 i-card">
                        
                       
                            <ServiceCard icon={faGear } title={"Other Services"} desc={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo perspiciatis Molestias maxime quae minus soluta id ducimus nemo velit accusamus magnam similique omni architecto delectus nostrum!"}/>

                    </Col>
                </Row>
                {/* second card row end */}
   </Container>
   </section>
  )
}

export default Service;
