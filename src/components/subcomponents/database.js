import React, { useState } from "react";
import { Col } from "reactstrap";
import { CgDatabase } from "react-icons/cg";

export const Database = (props) => {
  const { changeOpacity } = props;
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#41b749");

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
      <CgDatabase
        opacity={iconOpacity}
        className="element"
        size="10em"
        color={color}
      />
      <p
        style={{ opacity: textOpacity, color: color }}
        className="btn element texto"
      >
        Realtime Database
      </p>
    </Col>
  );
};
