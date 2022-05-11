import React, { useState } from "react";
import { Col } from "reactstrap";
import { FaRobot } from "react-icons/fa";

export const Machine = (props) => {
  const { changeOpacity } = props;
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#1c74e8");

  return (
    <Col
      onMouseEnter={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      onMouseLeave={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      className="columna col-xl-2 col-12"
    >
      <FaRobot
        opacity={iconOpacity}
        className="element"
        size="10em"
        color={color}
      />
      <p
        style={{ opacity: textOpacity, color: color }}
        className="btn element texto"
      >
        Machine Learning
      </p>
    </Col>
  );
};
