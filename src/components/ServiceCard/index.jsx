import React from "react";
import { Container, Row, Col } from 'react-bootstrap';


const ServiceCard = ({title , desc}) =>{
    return(
          <div>
            
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>

    )
}

export default ServiceCard;
