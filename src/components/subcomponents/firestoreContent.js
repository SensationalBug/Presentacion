import React from "react";
import { ButtonGroup, Col, Container, FormGroup, Row } from "reactstrap";

export const FirestoreContent = () => {
  return (
    <Container className="firestore-container border">
      <Row className="firestore-box border">
        <Col className="firestore-content col-md-6 col-lg-6 col">
          <h1 className="">Firebase Firestore</h1>
          <p className="all-desc p-2 my-4">
            Cloud Firestore es una base de datos flexible y escalable para el
            desarrollo móvil, web y de servidor de Firebase y Google Cloud. Al
            igual que Firebase Realtime Database, mantiene sus datos
            sincronizados entre las aplicaciones de los clientes a través de
            oyentes en tiempo real y ofrece soporte sin conexión para
            dispositivos móviles y web para que pueda crear aplicaciones
            receptivas que funcionen independientemente de la latencia de la red
            o la conectividad a Internet.
          </p>
        </Col>
        <Col className="firestore-form col-md-6 col-lg-8 col-10">
          <div className="rounded p-4 col-12">
            <FormGroup className="">
              <input
                className="form-control"
                type="text"
                placeholder="Nombre"
              />
              <input
                className="form-control"
                type="text"
                placeholder="Apellido"
              />
            </FormGroup>
            <ButtonGroup className="botones">
              <input
                className="btn btn-success"
                type="button"
                value="Agregar Info"
              />
              <input className="btn btn-danger" type="button" value="Limpiar" />
            </ButtonGroup>
          </div>
        </Col>
      </Row>
      <Row className="firestore-box border text-center">
        <p>Tabla</p>
      </Row>
    </Container>
  );
};
