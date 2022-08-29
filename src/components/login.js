import { UserStateContext } from "./context/userStateContext";
import { ToastContainer, toast } from "react-toastify";
import { app } from "../firebaseConfig/firebaseConfig";
import { ButtonGroup, Col, Row } from "reactstrap";
import React, { useContext, useRef } from "react";
import { ImExit, ImInfo } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";
import Parallax from 'react-springy-parallax'
import { HiUsers } from "react-icons/hi";
import "./login.css";

export const Login = (props) => {
  const parallax = useRef()
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
    const id = toast.loading("Espere por favor...");
    app
      .auth()
      .signInWithEmailAndPassword(email.current.value, password.current.value)
      .then(() => {
        clear(email, password);
        toast.update(id, {
          render: "Usuario logueado!",
          type: "success",
          isLoading: false,
          autoClose: 2000,
        });
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
    user ? toast.info(user.email) : toast.info("No hay nadie logueado");
  };

  return (
    <Parallax
      className="all-parallax"
      ref={parallax}
      pages={2}
    >
      <Parallax.Layer offset={0} speed={0.2}>
        <Col className="main-icon col-12">
          <HiUsers
            size="40em"
            className="text-dark anime-auth-icon"
          />
        </Col>
      </Parallax.Layer>

      <Parallax.Layer offset={0} speed={2} className="all-window">
        <h1 className="all-title hosting-title" onClick={() => parallax.current.scrollTo(1)}>AUTHENTICATION</h1>
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={0.4}>
        <div className="auth-container">
          <h1 className="text-center">Firebase Authentication</h1>
          <Row className="auth-box">
            <Col className="auth-content col-md-6 col-lg-6 col">
              <p className="all-desc rounded p-2 m-4">
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
        </div>
      </Parallax.Layer>
    </Parallax>
  );
};
