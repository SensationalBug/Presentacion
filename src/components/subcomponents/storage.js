import React, { useContext, useEffect, useRef, useState } from "react";
import { UserStateContext } from "../context/userStateContext";
import { MdCloudUpload, MdStorage } from "react-icons/md";
import { app } from "../../firebaseConfig/firebaseConfig";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { useModal, Modal } from "react-morphing-modal";
import { ToastContainer, toast } from "react-toastify";
import storageImage from "../../images/Storage.svg";
import { BsFolderFill } from "react-icons/bs";
import Parallax from 'react-springy-parallax'
import { FaUser } from "react-icons/fa";
import { Col, Row } from "reactstrap";
import "./storage.css";

export const Storage = (props) => {
  const parallax = useRef()
  const { modalProps, getTriggerProps } = useModal();
  const { changeOpacity } = props;
  const { user } = useContext(UserStateContext);
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [imgURL, setImgURL] = useState("");
  const [color] = useState("#0098a8");

  const storage = app.storage();
  const database = app.firestore();
  const imgPlace = useRef();

  useEffect(() => {
    if (user) {
      database.collection("users").onSnapshot((querySnapShot) => {
        querySnapShot.forEach((doc) => {
          if (doc.id === user.uid) {
            setImgURL(doc.data().imgURL);
          }
        });
      });
    } else {
      setImgURL("");
    }
  }, [user, database]);

  const file = () => {
    if (imgPlace.current.files[0]) {
      const reference = storage.ref(
        "/images/" + imgPlace.current.files[0].name
      );
      const id = toast.loading("Espere por favor...");
      const task = reference.put(imgPlace.current.files[0]);
      task.then(() => {
        reference.getDownloadURL().then((URL) => {
          database
            .collection("users")
            .doc(user.uid)
            .update({
              imgURL: URL,
            })
            .then(() => {
              database.collection("users").onSnapshot((querySnapShot) => {
                querySnapShot.forEach((doc) => {
                  if (doc.id === user.uid) {
                    toast.update(id, {
                      render: "Imagen actualizada!",
                      type: "success",
                      isLoading: false,
                      autoClose: 2000,
                    });
                    setImgURL(doc.data().imgURL);
                  }
                });
              });
            })
            .catch((err) => {
              console.log(err);
            });
        });
      });
    }
  };

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
      <BsFolderFill
        opacity={iconOpacity}
        className="element storage-icon icon"
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
        Storage
      </p>
      <Modal {...modalProps} className="modal">
        <img alt="..." src={storageImage} className="storage-image" />
        <div className="vidrio"></div>
        <Parallax
          className="all-parallax"
          ref={parallax}
          pages={2}
        >
          <Parallax.Layer offset={0} speed={0.2}>
            <Col className="main-icon col-5">
              <MdStorage
                size="50%"
                className="text-dark anime-storage-icon"
              />
            </Col>
          </Parallax.Layer>

          <Parallax.Layer offset={0} speed={2} className="all-window">
            <h1 className="all-title hosting-title" onClick={() => parallax.current.scrollTo(1)}>STORAGE</h1>
          </Parallax.Layer>

          <Parallax.Layer offset={1} speed={0.4}>
            <div className="storage-container">
              <Row className="storage-col">
                <Col className="px-5 storage-desc">
                  <h1 className="text-center">Cloud Storage</h1>
                  <p className="all-desc my-4">
                    Cloud Storage para Firebase es un servicio de almacenamiento de
                    objetos potente, simple y rentable construido para el
                    escalamiento de Google. Los SDK de Firebase para Cloud Storage
                    agregan la seguridad de Google a las operaciones de carga y
                    descarga de archivos de tus apps de Firebase, sin importar la
                    calidad de la red.
                  </p>
                  <div className="button-group">
                    <input
                      className="form-control"
                      type="file"
                      ref={imgPlace}
                      accept="image/*"
                    />
                    <button onClick={file} className="btn btn-success ">
                      <MdCloudUpload size="3em" />
                    </button>
                  </div>
                </Col>
                <Col className="px-5 storage-desc">
                  {imgURL ? (
                    <img alt="" src={imgURL} className="user-image" />
                  ) : (
                    <FaUser size="20em" color="#717171" className="p-3 rounded-circle bg-white" />
                  )}
                </Col>
              </Row>
            </div>
            <ToastContainer position="top-center" limit={1} />
          </Parallax.Layer>
        </Parallax>

      </Modal>
    </Col>
  );
};
