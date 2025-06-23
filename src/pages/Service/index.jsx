import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';


const Service = () => {
  return (
    <section>
   <Container>
    <Row className='text-center'>
       <h2 className="txt-head display-5 fw-semibold">Services :</h2>
                    <h2 className="txt-head py-2">I do awesome services for my clients</h2>
                    <p className="txt-head">Far far away, behind the word mountains, far from the countries Vokalia and
                        Consonantia</p>
    </Row>
           {/* first card row start*/}
      <Row className=" justify-content-evenly py-5">
                    <Col md={3} className="shadow p-4 mb-5 bg-body-tertiary rounded bgm-card i-card">
                        <i className="fa-brands fa-chromecast fs-2"></i>
                        <h3>B stratagy</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, reiciendis cumque, error ad
                            minima
                            nemo repellendus sapiente facilis sed, natus rem cupiditate suscipit esse? Illo corporis
                            molestias odit suscipit odio.</p>
                    </Col>
                    <Col md={3} className=" bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                        <i className="fa-solid fa-layer-group fs-2"></i>
                        <h3>Development</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat hic quo
                            perspiciatis.
                            Molestias maxime quae minus soluta id ducimus, nemo velit accusamus magnam similique omnis
                            architecto delectus nostrum!</p>
                    </Col>
                    <Col md={3} className="bgm-card  shadow p-3 mb-5 bg-body-tertiary rounded i-card">
                        <i className="fa-solid fa-user-group fs-2"></i>
                        <h3>Market Reporting</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, culpa hic dignissimos
                            corporis
                            molestiae expedita animi natus obcaecati dolore nam incidunt tempore voluptates corrupti.
                            Atque
                            ex quae ea esse facere.</p>
                    </Col>
                </Row>
                {/* first card row end */}
                {/* second card row start */}
                  <Row className=" justify-content-evenly py-3">
                    <Col md={3} className="bgm-card   shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                        <i className="fa-solid fa-camera fs-2"></i>
                        <h3>Graphic Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nulla voluptas, numquam sed
                            voluptates minima corporis repellendus est totam qui excepturi quam placeat magni eos,
                            accusantium illum commodi .</p>
                    </Col>
                    <Col md={3} className="bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded i-card">
                        <i className="fa-solid fa-desktop fs-2"></i>
                        <h3>M Development</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, commodi. Aspernatur
                            architecto
                            qui earum temporibus sequi expedita ullam tempore inventore impedit neque distinctio totam
                            nesciunt, illo officia</p>

                    </Col>
                    <Col md={3} className="bgm-card  shadow p-4 mb-5 bg-body-tertiary rounded opacity-100 i-card">
                        <i className="fa-solid fa-gear fs-2"></i>
                        <h3>Other Services</h3>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. In, vitae perferendis culpa
                            temporibus
                            sapiente aspernatur sed eveniet enim a tempora quasi officiis ducimus quas, nulla, ipsam
                            ipsum
                            cupiditate. Quibusdam, quas?</p>
                    </Col>
                </Row>
                {/* second card row end */}
   </Container>
   </section>
  )
}

export default Service;
