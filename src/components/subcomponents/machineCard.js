import React from "react";
import { Col } from "reactstrap";

export const MachineCard = (props) => {
  const { title, content, link, img } = props;
  return (
    <Col className="col-xxl-3 col-lg-3">
      <div className="card text-dark">
        <img src={img} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{content}</p>
          <p className="link">
            <a target="new_blank" href={link}>
              Get Started
            </a>
          </p>
        </div>
      </div>
    </Col>
  );
};
