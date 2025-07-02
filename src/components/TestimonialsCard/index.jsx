import React from "react";

const TestimonialsCard = ({review, img, name, role}) => {
  return (
    <div>
      <p>{review}</p>
      <div className="d-flex align-items-center">
        <img src={img} alt="client-image" className="client-img img-fluid "/>
        <div className="px-3">
          <p>
            {name} <br /> <span>{role}</span> <br />
            <span>
              {" "}
              <span>★★★★☆</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
