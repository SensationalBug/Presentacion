import React, { useRef, useState } from "react";
import { SiFirebase } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { IoIosAppstore, IoMdKey } from "react-icons/io";
import { FaArrowUp, FaAndroid, FaUnity, FaCode } from "react-icons/fa";
import Parallax from "react-springy-parallax";
import { Col, Row } from "reactstrap";
import "./home.css";

export const HomeContent = () => {
  const parallax = useRef();
  const [styles] = useState({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <Parallax className="all-parallax" ref={parallax} pages={4}>
      <Parallax.Layer offset={0} speed={2} className="all-window">
        <h1 className="all-title">FIREBASE</h1>
      </Parallax.Layer>

      <Parallax.Layer
        offset={1}
        speed={1}
        style={{
          opacity: "0.7",
          display: styles.display,
          justifyContent: styles.justifyContent,
          alignItems: styles.alignItems,
        }}
      >
        <Row className="text-center container">
          <Col className="firebase-text col-6">
            <h1 className="text-center">Qué es Firebase?</h1>
            <p className="fs-4 text-justify">
              Firebase es una plataforma desarrollada por Google para la
              creación de aplicaciones móviles y web. Originalmente fue una
              empresa independiente fundada en 2011. En 2014, Google adquirió la
              plataforma y ahora es su oferta insignia para el desarrollo de
              aplicaciones.
            </p>
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer
        offset={2}
        speed={1}
        style={{
          opacity: "0.7",
          display: styles.display,
          justifyContent: styles.justifyContent,
          alignItems: styles.alignItems,
        }}
      >
        <Row className="text-center container">
          <Col className="col-5"></Col>
          <Col className="firebase-text col-7">
            <h1 className="text-center">Firebase por plataforma</h1>
            <p className="fs-4 text-justify">
              Firebase te da las herramientas para programar apps de alta
              calidad, aumentar tu base de usuarios y ganar más dinero. Nos
              encargamos de los aspectos básicos para que puedas monetizar tu
              negocio y concentrarte en tus usuarios.
            </p>
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer
        offset={2}
        speed={0.4}
        style={{
          display: styles.display,
          justifyContent: styles.justifyContent,
          alignItems: "end",
          top: "-10vh",
        }}
      >
        <Col className="col-8 firebase-product">
          <FaAndroid
            size="5em"
            color="#00BFA5"
            className="borde rounded-circle bg-white p-3"
          />
          <AiFillCode
            size="5em"
            color="#FD8C09"
            className="borde rounded-circle bg-white p-3"
          />
          <IoIosAppstore
            size="5em"
            color="#16AACA"
            className="borde rounded-circle bg-white p-3"
          />
          <FaUnity
            size="5em"
            color="#000000"
            className="borde rounded-circle bg-white p-3"
          />
          <FaCode
            size="5em"
            color="#C52062"
            className="borde rounded-circle bg-white p-3"
          />
          <IoMdKey
            size="5em"
            color="#3F51B5"
            className="borde rounded-circle bg-white p-3"
          />
        </Col>
      </Parallax.Layer>

      <Parallax.Layer
        offset={3}
        speed={2}
        style={{
          opacity: "0.7",
          display: styles.display,
          justifyContent: styles.justifyContent,
          alignItems: styles.alignItems,
        }}
      />

      <Parallax.Layer
        offset={3}
        speed={0.4}
        style={{
          display: styles.display,
        }}
      >
        <Col className="col-4 py-4">
          <h3 className="text-center">Compila tu App</h3>
        </Col>
      </Parallax.Layer>

      <Parallax.Layer
        offset={3}
        speed={0.6}
        style={{
          display: styles.display,
          justifyContent: styles.justifyContent,
        }}
      >
        <Col className="col-4 py-4">
          <h3 className="text-center">Mejora la calidad de tu Web</h3>
        </Col>
      </Parallax.Layer>

      <Parallax.Layer
        offset={3}
        speed={0.8}
        style={{
          display: styles.display,
          flexDirection: "row-reverse",
        }}
      >
        <Col className="col-4 py-4">
          <h3 className="text-center">Haz crecer tu negocio</h3>
        </Col>
      </Parallax.Layer>

      <Parallax.Layer offset={0} speed={-0.2}>
        <SiFirebase
          size="20em"
          onClick={() => parallax.current.scrollTo(1)}
          style={{
            position: "absolute",
            left: "10vw",
            top: "20vh",
            color: "#535deb",
          }}
        />
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={-0.1}>
        <SiFirebase
          size="15em"
          onClick={() => parallax.current.scrollTo(2)}
          style={{
            position: "absolute",
            right: "15vw",
            top: "30vh",
            color: "#36AE7C",
          }}
        />
        <SiFirebase
          size="15em"
          onClick={() => parallax.current.scrollTo(3)}
          style={{
            position: "absolute",
            left: "20vw",
            top: "110vh",
            color: "#EB5353",
          }}
        />
      </Parallax.Layer>

      <Parallax.Layer offset={3} speed={-0.2} className="all-arrow-container">
        <FaArrowUp
          onClick={() => parallax.current.scrollTo(0)}
          size="3em"
          className="rounded-circle bg-dark p-2 arrow-up"
          style={{
            position: "absolute",
            bottom: "-15",
            opacity: "0.6",
          }}
        />
      </Parallax.Layer>
    </Parallax>
  );
};
