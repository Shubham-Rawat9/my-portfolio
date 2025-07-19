import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Testimonials from "../Testimonials";
import projectimg from "../../assets/images/carousel-img.jpg";
import envato from "../../assets/images/landing-2.webp";


const Project = () => {
  return (
    <>
      <section data-aos="fade-in">
        <Container>
          <Row className="text-center d-flex align-items-center">
            <Col>
              <h2 className="text-center fs-1 fw-bold"> My Projects : </h2>
              <p className="lead text-muted">
                Passionate frontend developer crafting seamless and engaging
                user experiences through innovative design and cutting-edge
                technology.
              </p>
            </Col>

            <Row className="py-5 justify-content-evenly">
              {/* first project */}
              <Col md={6} lg={4} data-aos="zoom-in-up">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={projectimg}
                      alt="Shopping Shirt Project"
                      className="project-img"
                    />
                    <div className="overlay">
                      <a
                        href="https://shoppingshirt.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="view-live-btn"
                      >
                        🔗 View Live
                      </a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🛒 Shopping  App</h4>
                    <p>
                      A responsive e-commerce frontend built with React.
                      Includes product listing, shopping cart, and modern UI
                      design.
                    </p>
                    <p className="tech-stack">
                      <strong>Tech Stack:</strong> React, Bootstrap, CSS,
                      Netlify
                    </p>
                  </div>
                </div>
              </Col>

              
            {/* second project */}
           <Col md={6} lg={4} data-aos="zoom-in-up">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={envato}
                      alt="envato gaming"
                      className="project-img"
                    />
                    <div className="overlay">
                      <a
                        href="https://envato-gaming.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="view-live-btn"
                      >
                        🔗 View Live
                      </a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🎮 Envato template</h4>
                    <p>
                    This is a modern gaming website built for showcasing trending games, player stats, and live tournaments.
                    </p>
                    <p className="tech-stack">
                      <strong>Tech Stack:</strong>  Bootstrap, CSS,
                      Netlify
                    </p>
                  </div>
                </div>
              </Col>
            </Row>

            <Row className="py-2 justify-content-evenly">
              {/* third project */}
              <Col md={6} lg={4} data-aos="zoom-in-up">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={projectimg}
                      alt="Shopping Shirt Project"
                      className="project-img"
                    />
                    <div className="overlay">
                      <a
                        href="https://shoppingshirt.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="view-live-btn"
                      >
                        🔗 View Live
                      </a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🛒 Shopping  App</h4>
                    <p>
                      A responsive e-commerce frontend built with React.
                      Includes product listing, shopping cart, and modern UI
                      design.
                    </p>
                    <p className="tech-stack">
                      <strong>Tech Stack:</strong> React, Bootstrap, CSS,
                      Netlify
                    </p>
                  </div>
                </div>
              </Col>

                {/* four project */}

                <Col md={6} lg={4} data-aos="zoom-in-up">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img
                      src={projectimg}
                      alt="Shopping Shirt Project"
                      className="project-img"
                    />
                    <div className="overlay">
                      <a
                        href="https://shoppingshirt.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                        className="view-live-btn"
                      >
                        🔗 View Live
                      </a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🛒 Shopping  App</h4>
                    <p>
                      A responsive e-commerce frontend built with React.
                      Includes product listing, shopping cart, and modern UI
                      design.
                    </p>
                    <p className="tech-stack">
                      <strong>Tech Stack:</strong> React, Bootstrap, CSS,
                      Netlify
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
          <Row className="py-5">
            <Col
              xs={12}
              md={10}
              className=" text-md-start d-flex flex-column m-auto justify-content-center align-items-center align-items-md-start"
            >
              <div className="text-center">
                <h4 data-aos="zoom-in">Do you have any Project? Let’s Talk</h4>
                <p className="py-2" data-aos="zoom-out">
                  I have worked on a variety of frontend projects that reflect
                  my skills in HTML, CSS, JavaScript, and modern frameworks like
                  React. From responsive portfolio websites to dynamic web apps,
                  each project helped me improve in design, performance, and
                  user experience. My focus is always on clean code, usability,
                  and mobile-friendly layouts. You can check out some of my work
                  below or visit my
                  <a
                    className="text-decoration-none text-dark"
                    href="https://github.com/Shubham-Rawat9"
                    target="_blank"
                    rel="noopener noreferrer" 
                  >
                    {" "}
                    GitHub
                  </a>{" "}
                  for more.
                </p>

                <a
                  className="portfolio-btn m-auto"
                  href="mailto:shubhmarawat97614@gmail.com" 
                >
                  Hire me
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Testimonials />
    </>
  );
};

export default Project;
