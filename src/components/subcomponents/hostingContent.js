import {
  BiWorld,
  BiDownArrowAlt,
  BiUpArrowAlt,
  BiNetworkChart,
} from "react-icons/bi";
import React, { useRef, useState } from "react";
import Parallax from "react-springy-parallax";
import { Col, Row } from "reactstrap";

export const HostingContent = () => {
  const parallax = useRef();
  const [showLast, setShowLast] = useState(true);
  const [showFirstOpacity, setShowFirstOpacity] = useState(1);
  const [showSecondOpacity, setShowSecondOpacity] = useState(0);

  const change = () => {
    if (showLast) {
      setShowLast(false);
      setShowFirstOpacity(0);
      setShowSecondOpacity(1);
    } else {
      setShowLast(true);
      setShowFirstOpacity(1);
      setShowSecondOpacity(0);
    }
  };

  return (
    <Parallax
      className="all-parallax"
      ref={parallax}
      pages={4}
      scrolling={false}
    >
      <Parallax.Layer offset={0} speed={2} className="all-window">
        <h1 className="all-title hosting-title text-dark">HOSTING</h1>
      </Parallax.Layer>

      <Parallax.Layer offset={0} speed={0.2}>
        <div onClick={() => parallax.current.scrollTo(1)}>
          <div className="frontal"></div>
          <div className="mapfront"></div>
          <div className="mapback"></div>
          <div className="back"></div>
        </div>
      </Parallax.Layer>

      <Parallax.Layer
        offset={1}
        speed={1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row className="text-center container justify-content-end">
          <Col className="firebase-text col-lg-7 col-12">
            <h1 className="text-center">Qué es?</h1>
            <p className="fs-4">
              Firebase Hosting es alojamiento de contenido web de nivel de
              producción para desarrolladores. Con un solo comando, puede
              implementar rápidamente aplicaciones web y entregar contenido
              estático y dinámico a una CDN (red de entrega de contenido)
              global. También puede vincular Firebase Hosting con Cloud
              Functions o Cloud Run para compilar y alojar microservicios en
              Firebase.
            </p>
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={0.2}>
        <Col className="main-icon col-6">
          <BiWorld
            onClick={() => parallax.current.scrollTo(2)}
            className="hosting-icon"
            size="60%"
          />
        </Col>
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={0.4}>
        <Col className="arrows">
          <BiUpArrowAlt
            onClick={() => parallax.current.scrollTo(0)}
            className="rounded-circle bg-white text-dark m-4 arrow-up"
            size="3em"
          />
          <BiDownArrowAlt
            onClick={() => parallax.current.scrollTo(2)}
            className="rounded-circle bg-white text-dark m-4 arrow-down"
            size="3em"
          />
        </Col>
      </Parallax.Layer>

      <Parallax.Layer offset={2} speed={0.2}>
        <Row className="hosting-function">
          <Col className="col-4">
            <BiNetworkChart size="35em" className="hosting-third-icon pulse" />
            <BiNetworkChart size="30em" className="hosting-third-icon " />
          </Col>
          <Col className="firebase-text col-lg-6 col-11 mx-2 cdn-text">
            <h1 className="text-center">Cómo funciona una CDN?</h1>
            <p className="main-text">
              El proceso de acceso al contenido almacenado en caché en una
              ubicación de borde de red CDN es casi siempre transparente para el
              usuario. El software de administración de CDN calcula
              dinámicamente qué servidor se encuentra más cerca del usuario
              solicitante y entrega contenido basado en esos cálculos. El
              servidor CDN en el borde de la red se comunica con el servidor de
              origen del contenido para asegurarse de que cualquier contenido
              que no haya sido almacenado en caché previamente también se
              entregue al usuario. Esto no solo elimina la distancia que recorre
              el contenido, sino que reduce la cantidad de saltos que debe
              realizar un paquete de datos.
            </p>
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer offset={2} speed={0.4}>
        <Col className="arrows">
          <BiUpArrowAlt
            onClick={() => parallax.current.scrollTo(1)}
            className="rounded-circle bg-white text-dark m-4 arrow-up"
            size="3em"
          />
          <BiDownArrowAlt
            onClick={() => parallax.current.scrollTo(3)}
            className="rounded-circle bg-white text-dark m-4 arrow-down"
            size="3em"
          />
        </Col>
      </Parallax.Layer>

      <Parallax.Layer offset={3} speed={0.8}>
        <Row
          className="hosting-function"
          style={{
            opacity: showFirstOpacity,
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100%",
            fontSize: "80px",
          }}
        >
          <p className="text-center">Cómo se configura?</p>
        </Row>
        <Row
          className="hosting-last-page"
          style={{ opacity: showSecondOpacity }}
        >
          <Col className="hosting-last bg-dark col-6 rounded">
            <h2 className="text-center bg-white text-dark rounded">1</h2>
            <p className="text-justify">
              Nos dirigimos a la parte de Firebase Hosting en la consola de
              nuestro proyecto y hacemos click en
              <i className="text-info"> Get Started.</i>
            </p>
          </Col>
          <Col className="hosting-last bg-dark col-6 rounded">
            <h2 className="text-center bg-white text-dark rounded">2</h2>
            <p className="text-justify">
              Se abrirá una ventana de Set up la cual indacará que instalemos el
              CLI de firebase con el comando:
              <p className="text-info">npm install -g firebase-tools</p>
            </p>
          </Col>
          <Col className="hosting-last bg-dark col-6 rounded">
            <h2 className="text-center bg-white text-dark rounded">3</h2>
            <p className="text-justify">
              Debemos hacer login e iniciar el proceso con los comandos
              <i className="text-info"> firebase login</i> y
              <i className="text-info"> firebase init </i>
              en la consola de windows desde el directorio de nuestro proyecto.
            </p>
          </Col>
          <Col className="hosting-last bg-dark col-6 rounded">
            <h2 className="text-center bg-white text-dark rounded">4</h2>
            <p className="text-justify">
              En la lista de opciones seleccionamos la de
              <i className="text-info">Hosting</i>, luego seleccionamos la
              opción de usar un proyecto existente.
            </p>
          </Col>
          <Col className="hosting-last bg-dark col-6 rounded">
            <h2 className="text-center bg-white text-dark rounded">5</h2>
            <p className="text-justify">
              Tenemos la opción de redireccionar todas las url al
              <i className="text-info">Index.html</i> y tambien la de hacer los
              deploys automaticos a <i className="text-info">Github</i> (implica
              logueo en github).
            </p>
          </Col>
          <Col className="hosting-last bg-dark col-6 rounded">
            <h2 className="text-center bg-white text-dark rounded">6</h2>
            <p className="text-justify">
              Hacemos el deploy de nuestra aplicación con el comando
              <i className="text-info">firebase deploy</i>.
            </p>
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer offset={3} speed={0.4}>
        <Col className="arrows">
          <BiUpArrowAlt
            onClick={() => parallax.current.scrollTo(2)}
            className="rounded-circle bg-white text-dark m-4 arrow-up"
            size="3em"
          />
          <BiWorld
            onClick={change}
            className="rounded-circle bg-white text-dark m-4 arrow-up arrow-changer"
            size="3em"
          />
          <BiDownArrowAlt
            onClick={() => parallax.current.scrollTo(0)}
            className="rounded-circle bg-white text-dark m-4 arrow-down"
            size="3em"
          />
        </Col>
      </Parallax.Layer>
    </Parallax>
  );
};
