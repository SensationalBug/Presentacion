import React, { useState } from "react";
import { Col } from "reactstrap";
import { HiUsers } from "react-icons/hi";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

export const Auth = (props) => {
  const { modalProps, getTriggerProps } = useModal();
  const { changeOpacity } = props;
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#9e3db5");

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
      <HiUsers
        opacity={iconOpacity}
        className="element icon"
        size="10em"
        color={color}
      />
      <p
        {...getTriggerProps()}
        style={{ opacity: textOpacity, color: "#ffffff", backgroundColor: color }}
        className="btn element texto"
      >
        Authentication
      </p>
      <Modal {...modalProps} className="modal">World</Modal>
    </Col>
  );
};
