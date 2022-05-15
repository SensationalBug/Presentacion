import React, { useEffect, useRef, useState } from "react";
import { app } from "../../firebaseConfig/firebaseConfig";
import { ButtonGroup, Col, Container, FormGroup, Row, Table } from "reactstrap";

export const FirestoreContent = (props) => {
  const [data, setData] = useState({
    nombre: "",
    apellido: "",
  });
  const { user } = props;
  const nombre = useRef();
  const apellido = useRef();
  const database = app.firestore();

  const addInfo = () => {
    if (nombre.current.value && apellido.current.value) {
      database
        .collection("users")
        .doc(user.uid)
        .update({
          nombre: nombre.current.value,
          apellido: apellido.current.value,
        })
        .then(() => {
          setData({
            nombre: nombre.current.value,
            apellido: apellido.current.value,
          });
          nombre.current.value = "";
          apellido.current.value = "";
        })
        .catch((err) => console.log(err));
    }
  };

  const delInfo = () => {
    database
      .collection("users")
      .doc(user.uid)
      .update({
        nombre: "",
        apellido: "",
      })
      .then(() => {
        setData({
          nombre: nombre.current.value,
          apellido: apellido.current.value,
        });
        nombre.current.value = "";
        apellido.current.value = "";
      });
  };

  useEffect(() => {
    database
      .collection("users")
      .doc(user.uid)
      .onSnapshot((doc) => {
        setData({ nombre: doc.data().nombre, apellido: doc.data().apellido });
      });
  });

  return (
    <Container className="firestore-container">
      <Row className="firestore-box mx-1">
        <Col className="firestore-content col-md-6 col-lg-6 col">
          <h1 className="text-center">Firebase Firestore</h1>
          <p className="all-desc my-4">
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
        <Col className="firestore-form col-md-6 col-lg-12 col-10">
          <Table className="table text-white">
            <thead>
              <tr>
                <th scope="col">Nombre</th>
                <th scope="col">Apellido</th>
                <th scope="col">Email</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.nombre}</td>
                <td>{data.apellido}</td>
                <td>{props.user.email}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <Row className="firestore-box mx-1 text-center">
        <div className="form rounded m-auto p-4 col-xxl-6 col-12 bg-dark">
          <h1 className="text-center py-2">ADD INFO</h1>

          <FormGroup className="">
            <input
              ref={nombre}
              className="form-control"
              type="text"
              placeholder="Nombre"
            />
            <input
              ref={apellido}
              className="form-control"
              type="text"
              placeholder="Apellido"
            />
          </FormGroup>
          <ButtonGroup className="botones">
            <input
              onClick={addInfo}
              className="btn btn-success"
              type="button"
              value="Editar Info"
            />
            <input
              onClick={delInfo}
              className="btn btn-danger"
              type="button"
              value="Borrar Info"
            />
          </ButtonGroup>
        </div>
      </Row>
    </Container>
  );
};