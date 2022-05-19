import React from "react";
import { Col } from "reactstrap";

export const MachineCard = (props) => {
  const { title, content, link, img } = props;
  return (
    <Col className="col-xxl-3 col-lg-3">
      <div class="card text-dark">
        <img src={img} alt="..." />
        <div class="card-body">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">{content}</p>
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
