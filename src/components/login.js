import React, { useContext, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import { ImExit, ImInfo } from "react-icons/im";
import { app } from "../firebaseConfig/firebaseConfig";
import { UserStateContext } from "./context/userStateContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./login.css";

export const Login = (props) => {
  const { user, setUser } = useContext(UserStateContext);
  const { clear } = props;
  const email = useRef();
  const password = useRef();
  const database = app.firestore();

  const signUp = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then(() => {
        app.auth().onAuthStateChanged((user) => {
          database
            .collection("users")
            .doc(user.uid)
            .set({
              email: email.current.value,
            })
            .then(() => {
              clear(email, password);
              toast.success("Usuario agregado de manera correcta!");
            });
        });
      })
      .catch((err) => {
        clear(email, password);
        toast.error(`${err}`);
        console.log(err);
      });
  };

  const signIn = () => {
    app
      .auth()
      .signInWithEmailAndPassword(email.current.value, password.current.value)
      .then(() => {
        clear(email, password);
        toast.success("Usuario logueado!");
      })
      .catch((err) => toast.error(`${err}`));
  };

  const salir = () => {
    app
      .auth()
      .signOut()
      .then(() => {
        toast.info("Usuario deslogueado!");
        setUser(false);
      });
  };

  const info = () => {
    console.log(user);
  };

  return (
    <Container>
      <Row className="justify-content-center">
        <Col className="box col-md-5 col-lg-4 col-10 p-4 mt-5 rounded">
          <div className="header">
            <ImInfo onClick={info} />
            <h1 className="text-center py-3">LOGIN</h1>
            <ImExit onClick={salir} />
          </div>
          <div className="form">
            <input
              ref={email}
              type="text"
              placeholder="Correo"
              className="form-control"
            ></input>
            <input
              ref={password}
              type="password"
              placeholder="Contraseña"
              className="form-control"
            ></input>
            <div className="botones">
              <div className="btn btn-success" onClick={signIn}>
                Loguear
              </div>
              <div className="btn btn-danger" onClick={signUp}>
                Registrar
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <ToastContainer position="top-center" autoClose={2500} />
    </Container>
  );
};
