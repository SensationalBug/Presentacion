import { Col } from "reactstrap";
import React, { useState } from "react";
import "../subcomponents/firestore.css";
import { FirestoreContent } from "./firestoreContent";
import { RiDatabase2Fill } from "react-icons/ri";
import { useModal, Modal } from "react-morphing-modal";
import firestoreImage from "../../images/Firestore.svg";
import "react-morphing-modal/dist/ReactMorphingModal.css";

export const Firestore = (props) => {
  const { modalProps, getTriggerProps } = useModal();
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
      <p
        {...getTriggerProps()}
        style={{
          opacity: textOpacity,
          color: "#ffffff",
          backgroundColor: color,
        }}
        className="btn element texto"
      >
        Firestore Database
      </p>
      <Modal {...modalProps} className="modal">
        <img alt="..." src={firestoreImage} className="firestore-image" />
        <div className="vidrio"></div>
        <FirestoreContent />
      </Modal>
    </Col>
  );
};
