import React, { useRef } from "react";
import { FaUser } from "react-icons/fa";
import Parallax from "react-springy-parallax";
import { Col } from "reactstrap";

export const MachineContent = () => {
  const parallax = useRef();
  return (
    <Parallax className="parallax" ref={parallax} pages={4}>
      <Parallax.Layer offset={0} speed={2} className="machine-window">
        <h1
          className="machine-text"
          onClick={() => parallax.current.scrollTo(1)}
        >
          MACHINE LEARNING
        </h1>
      </Parallax.Layer>

      <Parallax.Layer
        offset={1}
        speed={1}
        style={{ backgroundColor: "#000", opacity: "0.8" }}
      />
      <Parallax.Layer
        offset={2}
        speed={1}
        style={{ backgroundColor: "#4fd", opacity: "0.4" }}
      />
      <Parallax.Layer
        offset={3}
        speed={1}
        style={{ backgroundColor: "#4ae", opacity: "0.6" }}
      />

      <Parallax.Layer offset={1} speed={0.2}>
        <FaUser
          onClick={() => parallax.current.scrollTo(2)}
          size="10em"
          color="red"
          style={{ marginLeft: "10%", marginTop: "10%" }}
        />
      </Parallax.Layer>

      <Parallax.Layer offset={2} speed={0.2}>
        <FaUser
          onClick={() => parallax.current.scrollTo(3)}
          size="30em"
          style={{ marginLeft: "70%", marginTop: "5%" }}
        />
      </Parallax.Layer>

      <Parallax.Layer offset={3} speed={0.2}>
        <FaUser
          onClick={() => parallax.current.scrollTo(0)}
          size="15em"
          style={{ marginLeft: "40%", marginTop: "70vh" }}
        />
      </Parallax.Layer>

      {/* <Parallax.Layer
        offset={0}
        speed={20}
        className="container-fluid bg-info "
      >
        <Col
          className="border h-100 first-window"
          onClick={() => parallax.current.scrollTo(1)}
        ></Col>
      </Parallax.Layer>
      <Parallax.Layer offset={0} speed={-2} className="icono">
        <FaUser size="10em"/>
      </Parallax.Layer> */}

      {/* <Parallax.Layer
        offset={1}
        speed={20}
        className="container-fluid bg-warning"
      >
        <Col
          className="border h-100"
          onClick={() => parallax.current.scrollTo(2)}
        ></Col>
      </Parallax.Layer>

      <Parallax.Layer
        offset={2}
        speed={20}
        onClick={() => parallax.current.scrollTo(0)}
        className="container-fluid bg-dark"
      >
        <Col
          className="border h-100"
          onClick={() => parallax.current.scrollTo(0)}
        ></Col>
      </Parallax.Layer> */}
    </Parallax>
  );
};
