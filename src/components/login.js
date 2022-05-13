import React, { useContext, useRef } from "react";
import { ButtonGroup, Col, Container, FormGroup, Row } from "reactstrap";
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
    if (user) {
      app
        .auth()
        .signOut()
        .then(() => {
          setUser(false);
        });
    }
  };

  const info = () => {
    user ? toast.info(user) : toast.info("No hay nadie logueado");
  };

  return (
    <Container className="auth-container">
      <h1 className="text-center">Firebase Authentication</h1>
      <Row className="auth-box">
        <Col className="auth-content col-md-6 col-lg-6 col">
          <p className="all-desc rounded p-2 my-4">
            Firebase Authentication proporciona servicios de backend, SDK
            fáciles de usar y bibliotecas de interfaz de usuario listas para
            usar para autenticar a los usuarios en su aplicación. Admite la
            autenticación mediante contraseñas, números de teléfono, proveedores
            de identidad federados populares como Google, Facebook y Twitter, y
            más.
          </p>
        </Col>
        <Col className="col-md-6 col-lg-5 col-10 m-3">
          <div className="box p-4 rounded">
            {user ? (
              <div className="header">
                <ImInfo onClick={info} />
                <h1 className="text-center py-5">USER LOGGED</h1>
                <ImExit onClick={salir} />
              </div>
            ) : (
              <>
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
                  <ButtonGroup className="botones">
                    <div className="btn btn-success" onClick={signIn}>
                      Loguear
                    </div>
                    <div className="btn btn-danger" onClick={signUp}>
                      Registrar
                    </div>
                  </ButtonGroup>
                </div>
              </>
            )}
          </div>
        </Col>
      </Row>
      <ToastContainer position="top-center" autoClose={2500} limit={1} />
    </Container>
  );
};
