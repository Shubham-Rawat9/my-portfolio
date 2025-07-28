import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Testimonials from "../Testimonials";
import projectimg from "../../assets/images/carousel-img.jpg";
import envato from "../../assets/images/landing-2.webp";
import netflix from "../../assets/images/netflix-banner.jpg";
import cahee from "../../assets/images/1.png";
import wapik from "../../assets/images/benner_bg.jpg";

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
                    <h4 className="mb-2 fs-5">🛒 T-store Template</h4>
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
                    <h4 className="mb-2 fs-5">🎮 Envato Template</h4>
                    <p>
                  Designed a sleek, responsive UI for a gaming site with a bright and clean design the design is fully responsive.
                    </p>
                    <p className="tech-stack">
                      <strong>Tech Stack:</strong> Html, CSS, Bootstrap, Netlify
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
                    <img src={netflix} alt="Shopping Shirt Project" className="project-img"/>
                    <div className="overlay">
                      <a href="https://netflik-clone-lite.netlify.app/" target="_blank" rel="noreferrer" className="view-live-btn">🔗 View Live</a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🅝 Netflix Clone</h4>
                    <p>
                      A Netflix clone with UI only a front-end project to practice design and layout. No backend or real streaming features yet.
                    </p>
                    <p className="tech-stack"><strong>Tech Stack:</strong> React, Tailwind, CSS, Netlify </p>
                  </div>
                </div>
              </Col>

              {/* four project */}

              <Col md={6} lg={4} data-aos="zoom-in-up">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img src={cahee} alt="Shopping Shirt Project" className="project-img" />
                    <div className="overlay">
                      <a href="https://caheetemplate.netlify.app/" target="_blank" rel="noreferrer" className="view-live-btn">🔗 View Live</a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🎨 Cahee Template</h4>
                    <p> I have created a simple and clean template.It is easy to customize and suitable for various uses. </p>
                    <p className="tech-stack"> <strong>Tech Stack:</strong> Html, Bootstrap, CSS, Netlify</p>
                  </div>
                </div>
              </Col>
            </Row>

             <Row className="py-3 justify-content-evenly">

              {/* five project */}
              <Col md={6} lg={4} data-aos="zoom-in-up">
                <div className="project-card">
                  <div className="project-image-wrapper">
                    <img src={wapik} alt="Shopping Shirt Project" className="project-img"/>
                    <div className="overlay">
                      <a href="https://wapik-temp.netlify.app/" target="_blank" rel="noreferrer" className="view-live-btn">🔗 View Live</a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🎨 Wapik Template</h4>
                    <p> I have created a simple and clean template.It is easy to customize and suitable for various uses. </p>
                   
                    <p className="tech-stack"><strong>Tech Stack:</strong> Html,  CSS, Bootstrap, Netlify </p>
                  </div>
                </div>
              </Col>

              {/* six project */}

              <Col md={6} lg={4} data-aos="zoom-in-up">
                {/* <div className="project-card">
                  <div className="project-image-wrapper">
                    <img src={cahee} alt="Shopping Shirt Project" className="project-img" />
                    <div className="overlay">
                      <a href="https://caheetemplate.netlify.app/" target="_blank" rel="noreferrer" className="view-live-btn">🔗 View Live</a>
                    </div>
                  </div>

                  <div className="p-3">
                    <h4 className="mb-2 fs-5">🎨 Cahee Template</h4>
                    <p> I have created a simple and clean template.It is easy to customize and suitable for various uses. </p>
                    <p className="tech-stack"> <strong>Tech Stack:</strong> Html, Bootstrap, CSS, Netlify</p>
                  </div>
                </div> */}
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
