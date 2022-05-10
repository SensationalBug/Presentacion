import React from "react";
import { Container, Row, Col } from "reactstrap";
import { SiFirebase } from "react-icons/si";
import auth from "../icons/Authentication.png";
// import { app } from "../firebaseConfig/firebaseConfig";

export const Home = () => {
  return (
    <Container fluid={true} className="home-page">
      <Row>
        <Row className="fila">
          <Col className="columna col-2 border">
            <img className="image" src={auth} alt="..." />
            <p className="element texto">Auth</p>
          </Col>
          <Col className="columna col-2 border">Machine Learning</Col>
        </Row>
        <Row className="fila">
          <Col className="columna col-2 border">Firestore Database</Col>
          <Col className="columna col-2">
            <SiFirebase className="element" size="10em" color="#FFCA28" />
            <p className="element texto">FIREBASE</p>
          </Col>
          <Col className="columna col-2 border">Realtime Database</Col>
        </Row>
        <Row className="fila">
          <Col className="columna col-2 border">Storage</Col>
          <Col className="columna col-2 border">Hosting</Col>
        </Row>
      </Row>
    </Container>
  );
};
