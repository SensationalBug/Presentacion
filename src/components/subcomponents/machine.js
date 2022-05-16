import React, { useState } from "react";
import { Col } from "reactstrap";
import { FaRobot } from "react-icons/fa";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import machineImage from "../../images/Machine.svg";

export const Machine = (props) => {
  const { modalProps, getTriggerProps } = useModal();
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
        {...getTriggerProps()}
        style={{
          opacity: textOpacity,
          color: "#ffffff",
          backgroundColor: color,
        }}
        className="btn element texto"
      >
        Machine Learning
      </p>
      <Modal {...modalProps} className="modal">
        <img alt="..." src={machineImage} className="storage-image" />
        <div className="vidrio"></div>
      </Modal>
    </Col>
  );
};
