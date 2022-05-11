import React, { useState } from "react";
import { Col } from "reactstrap";
import { BsFolderFill } from "react-icons/bs";

export const Storage = (props) => {
  const { changeOpacity } = props;
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#0098a8");

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
      <BsFolderFill
        opacity={iconOpacity}
        className="element"
        size="10em"
        color={color}
      />
      <p
        style={{ opacity: textOpacity, color: color }}
        className="btn element texto"
      >
        Storage
      </p>
    </Col>
  );
};
