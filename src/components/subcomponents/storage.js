import React, { useState } from "react";
import { Col } from "reactstrap";
import { BsFolderFill } from "react-icons/bs";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import storageImage from "../../images/Storage.svg";

export const Storage = (props) => {
  const { modalProps, getTriggerProps } = useModal();
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
        {...getTriggerProps()}
        style={{
          opacity: textOpacity,
          color: "#ffffff",
          backgroundColor: color,
        }}
        className="btn element texto"
      >
        Storage
      </p>
      <Modal {...modalProps} className="modal">
        <img alt="..." src={storageImage} className="firestore-image" />
        <div className="vidrio"></div>
      </Modal>
    </Col>
  );
};
