import { Col } from "reactstrap";
import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";
import { MachineContent } from "./machineContent";
import machineImage from "../../images/Machine.svg";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

export const Machine = (props) => {
  const { modalProps, getTriggerProps } = useModal();
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#1c74e8");
  const { changeOpacity } = props;

  return (
    <Col
      onMouseEnter={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      onMouseLeave={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      className="columna col-lg-2 col"
    >
      <FaRobot
        opacity={iconOpacity}
        className="element machine-icon icon"
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
        ML
      </p>
      <Modal {...modalProps} className="modal">
        <img alt="..." src={machineImage} className="components-image" />
        <div className="vidrio"></div>
        <MachineContent />
      </Modal>
    </Col>
  );
};
