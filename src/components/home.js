import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { SiFirebase } from "react-icons/si";
import { Auth } from "./subcomponents/auth";
import { Machine } from "./subcomponents/machine";
import { Firestore } from "./subcomponents/firestore";
import { Database } from "./subcomponents/database";
import { Storage } from "./subcomponents/storage";
import { Hosting } from "./subcomponents/hosting";

export const Home = () => {
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color] = useState("#FFCA28");

  const changeOpacity = (icon, setIcon, text, setText) => {
    text === 1 ? setText(0) : setText(1);
    icon === 1 ? setIcon(0) : setIcon(1);
  };

  return (
    <Container fluid={true} className="home-page">
      <Row>
        <Row className="fila">
          <Auth changeOpacity={changeOpacity} />
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
              style={{ opacity: textOpacity, color: color }}
              className="element firebase texto"
            >
              FIREBASE
            </h1>
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
