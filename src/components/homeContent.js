import { FaArrowUp, FaAndroid, FaUnity, FaCode } from "react-icons/fa";
import { HiUsers, HiOutlineClipboardCheck } from "react-icons/hi";
import { SiFirebase, SiGoogleanalytics } from "react-icons/si";
import { BiCloudRain, BiWorld, BiRadar } from "react-icons/bi";
import { TiCloudStorage, TiMessages } from "react-icons/ti";
import { IoIosAppstore, IoMdKey } from "react-icons/io";
import { BsFillShareFill } from "react-icons/bs";
import React, { useRef, useState } from "react";
import Parallax from "react-springy-parallax";
import { IoSettings } from "react-icons/io5";
import { CgDatabase } from "react-icons/cg";
import { ImLab } from "react-icons/im";
import { Col, Row } from "reactstrap";
import "./home.css";
import {
  AiOutlineCloudServer,
  AiOutlineLink,
  AiFillCode,
} from "react-icons/ai";

export const HomeContent = () => {
  const parallax = useRef();
  const [styles] = useState({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  return (
    <Parallax className="all-parallax" ref={parallax} pages={6}>
      <Parallax.Layer offset={0} speed={2} className="all-window">
        <Col className="col-4 firebaseContainer">
          <h1 className="all-title firebaseTitle">FIREBASE</h1>
        </Col>
      </Parallax.Layer>

      <Parallax.Layer offset={0} speed={-0.2}>
        <SiFirebase
          className="logo-firebase-main"
          onClick={() => parallax.current.scrollTo(1)}
        />
      </Parallax.Layer>

      <Parallax.Layer
        offset={1}
        speed={1}
        style={{
          display: styles.display,
          justifyContent: styles.justifyContent,
          alignItems: styles.alignItems,
        }}
      >
        <Row className="text-center container first-paragraph">
          <Col className="firebase-text col-lg-7 col-md-12 col-12">
            <h1 className="text-center">Qué es Firebase?</h1>
            <p className="fs-4 text-justify">
              Firebase se trata de una plataforma creada por Google, cuya
              principal función es desarrollar y facilitar la creación de apps
              de elevada calidad de una forma rápida, con el fin de que se pueda
              aumentar la base de usuarios y ganar más dinero. La plataforma
              está subida en la nube y está disponible para diferente
              plataformas como iOS, Android y web. Contiene diversas funciones
              para que cualquier desarrollador pueda combinar y adaptar la
              plataforma a medida de sus necesidades.
            </p>
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={0.4}>
        <div className="logo-firebase-second">
          <SiFirebase onClick={() => parallax.current.scrollTo(2)} />
        </div>
      </Parallax.Layer>

      <Parallax.Layer
        offset={2}
        speed={1}
        style={{
          display: styles.display,
          justifyContent: styles.justifyContent,
          alignItems: styles.alignItems,
        }}
      >
        <Row className="text-center container second-paragraph">
          <Col className="firebase-text col-lg-6 col-12">
            <h1 className="text-center">Firebase por plataforma</h1>
            <p className="fs-4 text-justify">
              Firebase te da las herramientas para programar apps de alta
              calidad, aumentar tu base de usuarios y ganar más dinero. Nos
              encargamos de los aspectos básicos para que puedas monetizar tu
              negocio y concentrarte en tus usuarios.
            </p>
          </Col>
          <Col className="col-lg-6 col-12 firebase-product">
            <Col className="col-md-2 col-4 set-firebase-product">
              <FaAndroid
                size="4em"
                color="#00BFA5"
                className="rounded-circle mb-2 bg-white p-3"
              />
              <label>Android</label>
            </Col>
            <Col className="col-md-2 col-4 set-firebase-product">
              <AiFillCode
                size="4em"
                color="#FD8C09"
                className="rounded-circle mb-2 bg-white p-3"
              />
              <label>C++</label>
            </Col>
            <Col className="col-md-2 col-4 set-firebase-product">
              <IoIosAppstore
                size="4em"
                color="#16AACA"
                className="rounded-circle mb-2 bg-white p-3"
              />
              <label>IOS</label>
            </Col>
            <Col className="col-md-2 col-4 set-firebase-product">
              <FaUnity
                size="4em"
                color="#000000"
                className="rounded-circle mb-2 bg-white p-3"
              />
              <label>Unity</label>
            </Col>
            <Col className="col-md-2 col-4 set-firebase-product">
              <FaCode
                size="4em"
                color="#C52062"
                className="rounded-circle mb-2 bg-white p-3"
              />
              <label>Web</label>
            </Col>
            <Col className="col-md-2 col-4 set-firebase-product">
              <IoMdKey
                size="4em"
                color="#3F51B5"
                className="rounded-circle mb-2 bg-white p-3"
              />
              <label>Adm Ctrl</label>
            </Col>
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer
        offset={3}
        speed={0}
        style={{
          display: styles.display,
        }}
      >
        <Col className="col-12 py-5 container-set-app">
          <h2 className="text-center text-uppercase">Compila tu App</h2>
          <Col className="set-app">
            <Col>
              <label>Cloud Firestore</label>
              <TiCloudStorage size="2em" />
            </Col>
            <Col>
              <label>Cloud Functions</label>
              <BiCloudRain size="2em" />
            </Col>
            <Col>
              <label>Authentication</label>
              <HiUsers size="2em" />
            </Col>
            <Col>
              <label>Hosting</label>
              <BiWorld size="2em" />
            </Col>
            <Col>
              <label>Cloud Storage</label>
              <AiOutlineCloudServer size="2em" />
            </Col>
            <Col>
              <label>Database</label>
              <CgDatabase size="2em" />
            </Col>
          </Col>
        </Col>
      </Parallax.Layer>

      <Parallax.Layer
        offset={4}
        speed={0.2}
        style={{
          display: styles.display,
          justifyContent: styles.justifyContent,
        }}
      >
        <Col className="col-12 py-5 container-upgrade-app">
          <h2 className="text-center text-uppercase">
            Mejora la calidad de tu Web
          </h2>
          <Col className="set-app second">
            <Col>
              <label>Crashlytics</label>
              <HiOutlineClipboardCheck size="2em" />
            </Col>
            <Col>
              <label>Performance Monitoring</label>
              <BiRadar size="2em" />
            </Col>
            <Col>
              <label>Test Lab</label>
              <IoSettings size="2em" />
            </Col>
          </Col>
        </Col>
      </Parallax.Layer>

      <Parallax.Layer
        offset={5}
        speed={0.4}
        style={{
          display: styles.display,
          flexDirection: "row-reverse",
        }}
      >
        <Col className="col-12 py-5 container-grow-app">
          <h2 className="text-center text-uppercase">Haz crecer tu negocio</h2>
          <Col className="set-app">
            <Col>
              <label>Analytics</label>
              <SiGoogleanalytics size="2em" />
            </Col>
            <Col>
              <label>Firebase A/B Testing</label>
              <ImLab size="2em" />
            </Col>
            <Col>
              <label>Cloud Messaging</label>
              <TiMessages size="2em" />
            </Col>
            <Col>
              <label>Dynamic Links</label>
              <AiOutlineLink size="2em" />
            </Col>
            <Col>
              <label>Invites</label>
              <BsFillShareFill size="2em" />
            </Col>
          </Col>
        </Col>
      </Parallax.Layer>

      <Parallax.Layer offset={6} speed={-0.2} className="all-arrow-container">
        <FaArrowUp
          onClick={() => parallax.current.scrollTo(0)}
          size="3em"
          className="rounded-circle bg-dark p-2"
          style={{
            position: "absolute",
            top: "10vh",
            opacity: "0.6",
          }}
        />
      </Parallax.Layer>
    </Parallax>
  );
};
