import React from "react";
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const ServiceCard = ({ icon ,title , desc}) =>{
    return(
          <div>
             { <FontAwesomeIcon icon={icon} className="fs-3" />}
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>

    )
}

export default ServiceCard;
