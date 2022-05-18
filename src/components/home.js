import React, { useState } from "react";
import { HomeContent } from "./homeContent";
import { SiFirebase } from "react-icons/si";
import { Auth } from "./subcomponents/auth";
import { Container, Row, Col } from "reactstrap";
import { Machine } from "./subcomponents/machine";
import { Hosting } from "./subcomponents/hosting";
import { Storage } from "./subcomponents/storage";
import { Database } from "./subcomponents/database";
import { Firestore } from "./subcomponents/firestore";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";

export const Home = () => {
  const { modalProps, getTriggerProps } = useModal();
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#FFCA28");

  const changeOpacity = (icon, setIcon, text, setText) => {
    text === 1 ? setText(0) : setText(1);
    icon === 1 ? setIcon(0) : setIcon(1);
  };

  const clear = (email, pwd) => {
    email.current.value = "";
    pwd.current.value = "";
  };

  return (
    <Container fluid={true} className="home-page">
      <Row>
        <Row className="fila">
          <Auth changeOpacity={changeOpacity} clear={clear} />
          <Machine changeOpacity={changeOpacity} />
        </Row>
        <Row className="fila">
          <Firestore changeOpacity={changeOpacity} />
          <Col
            onMouseEnter={() =>
              changeOpacity(
                iconOpacity,
                setIconOpacity,
                textOpacity,
                setTextOpacity
              )
            }
            onMouseLeave={() =>
              changeOpacity(
                iconOpacity,
                setIconOpacity,
                textOpacity,
                setTextOpacity
              )
            }
            className="columna col-xl-2 col-12"
          >
            <SiFirebase
              opacity={iconOpacity}
              className="element main"
              size="15em"
              color={color}
            />
            <h1
              {...getTriggerProps()}
              style={{
                opacity: textOpacity,
                color: "#ffffff",
                backgroundColor: color,
              }}
              className="btn element firebase texto"
            >
              FIREBASE
            </h1>
            <Modal {...modalProps} className="modal">
              <div className="vidrio"></div>
              <HomeContent />
            </Modal>
          </Col>
          <Database changeOpacity={changeOpacity} />
        </Row>
        <Row className="fila">
          <Storage changeOpacity={changeOpacity} />
          <Hosting changeOpacity={changeOpacity} />
        </Row>
      </Row>
    </Container>
  );
};
