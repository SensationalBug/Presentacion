import React, { useState } from "react";
import { Col } from "reactstrap";
import { RiDatabase2Fill } from "react-icons/ri";

export const Firestore = (props) => {
  const { changeOpacity } = props;
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#ff8f00");

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
      <RiDatabase2Fill
        opacity={iconOpacity}
        className="element"
        size="10em"
        color={color}
      />
      <p style={{ opacity: textOpacity, color: color }} className="btn element texto">
        Firestore Database
      </p>
    </Col>
  );
};
