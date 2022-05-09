import React, { useRef } from "react";
import Swal from "sweetalert2";
import { app } from "../firebaseConfig/firebaseConfig";

export const Login = (props) => {
  const email = useRef();
  const password = useRef();

  const newUser = () => {
    app
      .auth()
      .createUserWithEmailAndPassword(
        email.current.value,
        password.current.value
      )
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Success",
          timer: "1500",
          showConfirmButton: false,
          text: "Usuario Agregado",
        }).then(() => props.setUser(res));
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          timer: "1300",
          showConfirmButton: false,
          text: "Something went wrong!",
        });
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div>
          <div className="box col-md-5 col-lg-4 col-10 p-4 mt-5 rounded">
            <h1 className="text-center py-3">Login Improvisado</h1>
            <div className="form col">
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
                <div
                  className="btn btn-outline-danger"
                  onClick={() => {
                    newUser();
                  }}
                >
                  Registrar
                </div>
                <div className="btn btn-outline-success">Loguear</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
