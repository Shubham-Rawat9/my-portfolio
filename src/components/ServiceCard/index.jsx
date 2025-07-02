import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ServiceCard = ({ icon ,title , desc}) =>{
    return(
          <div className="text-center">
             { <FontAwesomeIcon icon={icon} className="fs-3" />}
      <h3 className=" mt-3">{title}</h3>
      <p className="text-start mt-2">{desc}</p>
    </div>

    )
}

export default ServiceCard;
