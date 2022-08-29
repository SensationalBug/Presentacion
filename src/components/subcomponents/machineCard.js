import { Col } from "reactstrap";
import React from "react";

export const MachineCard = (props) => {
  const { title, content, link, img } = props;
  return (
    <Col className=" col-lg-3 col-12 my-3">
      <div className="card text-dark">
        <div className="card-head">
          <h5 className="card-title">{title}</h5>
        </div>
        <div className="card-middle">
          <img src={img} alt="..." className="card-img" />
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
