import "react-morphing-modal/dist/ReactMorphingModal.css";
import { useModal, Modal } from "react-morphing-modal";
import hostingImage from "../../images/Hosting.svg";
import { HostingContent } from "./hostingContent";
import { BiWorld } from "react-icons/bi";
import React, { useState } from "react";
import { Col } from "reactstrap";
import "./hosting.css";

export const Hosting = (props) => {
  const { modalProps, getTriggerProps } = useModal();
  const { changeOpacity } = props;
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#8ea1b9");

  return (
    <Col
      onMouseEnter={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      onMouseLeave={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      className="columna hosting col-lg-2 col"
    >
      <BiWorld
        opacity={iconOpacity}
        className="element hosting-ico icon"
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
        Hosting
      </p>
      <Modal {...modalProps} className="modal">
        <img alt="..." src={hostingImage} className="components-image" />
        <div className="vidrio"></div>
        <HostingContent />
      </Modal>
    </Col>
  );
};
