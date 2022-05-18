import React, { useRef } from "react";
import { FaArrowUp } from "react-icons/fa";
import Parallax from "react-springy-parallax";
import MIcon1 from "../../images/MIcon1.svg";
import MIcon2 from "../../images/MIcon2.svg";
import MIcon3 from "../../images/MIcon3.svg";
import { Col } from "reactstrap";

export const MachineContent = () => {
  const parallax = useRef();

  return (
    <Parallax className="all-parallax" ref={parallax} pages={4}>
      <Parallax.Layer offset={0} speed={2} className="all-window">
        <h1 className="all-title">MACHINE LEARNING</h1>
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

      <Parallax.Layer offset={0} speed={-0.6}>
        <img
          alt=""
          src={MIcon1}
          onClick={() => parallax.current.scrollTo(1)}
          style={{ position: "absolute", right: "5vw", bottom: "60vh" }}
        />
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={-0.4}>
        <img
          alt=""
          src={MIcon3}
          onClick={() => parallax.current.scrollTo(2)}
          style={{ position: "relative", left: "15vw", top: "10vh" }}
        />
        <img
          alt=""
          src={MIcon2}
          onClick={() => parallax.current.scrollTo(3)}
          style={{ position: "absolute", right: "5vw", top: "90vh" }}
        />
      </Parallax.Layer>

      <Parallax.Layer offset={3} speed={0.2} className="all-arrow-container">
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
