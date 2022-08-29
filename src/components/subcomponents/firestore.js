import { UserStateContext } from "../context/userStateContext";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import firestoreImage from "../../images/Firestore.svg";
import { useModal, Modal } from "react-morphing-modal";
import { FirestoreContent } from "./firestoreContent";
import React, { useContext, useState } from "react";
import { RiDatabase2Fill } from "react-icons/ri";
import { Col, Container } from "reactstrap";
import "../subcomponents/firestore.css";

export const Firestore = (props) => {
  const { user } = useContext(UserStateContext);
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
        className="element firestore-icon icon"
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
        Firestore
      </p>
      <Modal {...modalProps} className="modal">
        {user ? (
          <Col>
            <img alt="..." src={firestoreImage} className="components-image" />
            <div className="vidrio"></div>
            <FirestoreContent user={user} />
          </Col>
        ) : (
          <Container className="modalbox h-100 text-center">
            <h1>Favor Loguearse para ver el contenido de esta página.</h1>
          </Container>
        )}
      </Modal>
    </Col>
  );
};
