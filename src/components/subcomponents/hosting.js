import './hosting.css'
import { Col } from "reactstrap";
import React, { useState } from "react";
import { BiWorld } from "react-icons/bi";
import hostingImage from '../../images/Hosting.svg'
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { HostingContent } from './hostingContent';

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
      className="columna col-xl-2 col-12"
    >
      <BiWorld
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
        Hosting
      </p>
      <Modal {...modalProps} className="modal">
        <img alt="..." src={hostingImage} className="hosting-image" />
        <div className="vidrio"></div>
        <HostingContent/>
      </Modal>
    </Col>
  );
};
