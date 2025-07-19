import React from "react";
import Slider from "react-slick";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faReact, faBootstrap, faGitAlt, faFigma , faGithub} from "@fortawesome/free-brands-svg-icons";
import { faWind ,faDesktop} from "@fortawesome/free-solid-svg-icons"; 
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons"; 

const skills = [
  { name: "HTML", icon: <FontAwesomeIcon icon={faHtml5} /> },
  { name: "CSS", icon: <FontAwesomeIcon icon={faCss3Alt} /> },
  { name: "JavaScript", icon: <FontAwesomeIcon icon={faJs} /> },
  { name: "React", icon: <FontAwesomeIcon icon={faReact} /> },
  { name: "Bootstrap", icon: <FontAwesomeIcon icon={faBootstrap} /> },
  { name: "Git", icon: <FontAwesomeIcon icon={faGitAlt} /> },
  { name:"GitHub" , icon : <FontAwesomeIcon icon={faGithub} />},
  { name: "Figma", icon: <FontAwesomeIcon icon={faFigma} /> },
  { name: "Tailwind", icon: <FontAwesomeIcon icon={faWind} /> },     
  { name: "Redux", icon: <FontAwesomeIcon icon={faSyncAlt} /> },   
  { name: "Responsive design", icon: <FontAwesomeIcon icon={faDesktop} /> },   
];

const SkillsSlider = () => {
  const settings = {
    dots: true,
    infinite: false,  
    speed: 1000,      
    slidesToShow: 4,      
    slidesToScroll: 4,
    arrows: false,        
    autoplay: false,   
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="container my-5">
      <h2 className="text-center mb-4 fs-2 fw-bolder" data-aos="zoom-in">My Skills</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="px-2">
            <div className="skill-card text-center p-3" data-aos="zoom-out" data-aos-delay="300">
              <div style={{ fontSize: "2rem"}} >{skill.icon}</div>
              <div className="mt-2 fw-semibold">{skill.name}</div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SkillsSlider;
