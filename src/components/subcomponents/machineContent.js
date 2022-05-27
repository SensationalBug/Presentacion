import "./machine.css";
import tr from "../../images/TR.png";
import bs from "../../images/BS.png";
import fd from "../../images/FD.png";
import il from "../../images/IL.png";
import li from "../../images/LI.png";
import od from "../../images/OD.png";
import ot from "../../images/OT.png";
import sr from "../../images/SR.png";
import { Row, Col } from "reactstrap";
import React, { useRef } from "react";
import { MachineCard } from "./machineCard";
import MIcon1 from "../../images/MIcon1.svg";
import Parallax from "react-springy-parallax";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

export const MachineContent = () => {
  const parallax = useRef();

  return (
    <Parallax
      className="all-parallax parallax-machine"
      ref={parallax}
      pages={3}
      horizontal
    >
      <Parallax.Layer offset={0} speed={2} className="all-window">
        <h1 className="all-title">MACHINE LEARNING</h1>
      </Parallax.Layer>

      <Parallax.Layer
        offset={0}
        speed={-0.2}
        style={{ position: "absolute", top: "60%", left: "45vw" }}
      >
        <Row>
          <Col className="img-container col-2">
            <img
              alt=""
              className="machine-img machine-pulse"
              src={MIcon1}
              onClick={() => parallax.current.scrollTo(1)}
            />
            <img
              alt=""
              className="machine-img"
              src={MIcon1}
              onClick={() => parallax.current.scrollTo(1)}
            />
          </Col>
        </Row>
      </Parallax.Layer>

      <Parallax.Layer offset={1} speed={0.4} className="all-arrow-container">
        <FaArrowAltCircleLeft
          onClick={() => parallax.current.scrollTo(0)}
          size="5em"
          className="p-2"
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            opacity: "0.5",
          }}
        />

        <Row className="container machine-content">
          <MachineCard
            img={tr}
            title="Text recognition"
            content="Recognize and extract text from images"
            link="https://firebase.google.com/docs/ml/recognize-text?authuser=0&hl=en"
          />
          <MachineCard
            img={bs}
            title="Barcode scanning"
            content="Scan and process barcodes"
            link="https://developers.google.com/ml-kit/vision/barcode-scanning"
          />
          <MachineCard
            img={fd}
            title="Face detection"
            content="Detect faces and facial landmarks, now with Face Contours"
            link="https://developers.google.com/ml-kit/vision/face-detection"
          />
          <MachineCard
            img={il}
            title="Image labeling"
            content="Identify objects, locations, activities, animal species, products, and more"
            link="https://firebase.google.com/docs/ml/label-images?authuser=0&hl=en"
          />
        </Row>

        <FaArrowAltCircleRight
          onClick={() => parallax.current.scrollTo(2)}
          size="5em"
          className="p-2"
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            opacity: "0.5",
          }}
        />
      </Parallax.Layer>

      <Parallax.Layer offset={2} speed={0.4} className="all-arrow-container">
        <FaArrowAltCircleLeft
          onClick={() => parallax.current.scrollTo(1)}
          size="5em"
          className="p-2"
          style={{
            position: "absolute",
            left: "0",
            top: "50%",
            opacity: "0.5",
          }}
        />

        <Row className="container machine-content">
          <MachineCard
            img={li}
            title="Language ID"
            content="Detect the language of text"
            link="https://developers.google.com/ml-kit/language/identification"
          />
          <MachineCard
            img={od}
            title="Object detection and tracking"
            content="Detect, track and classify objects in live camera and static images"
            link="https://developers.google.com/ml-kit/vision/object-detection"
          />
          <MachineCard
            img={ot}
            title="On-device translation"
            content="Translate text from one language to another"
            link="https://developers.google.com/ml-kit/language/translation"
          />
          <MachineCard
            img={sr}
            title="Smart Reply"
            content="Generate text replies based on previous messages"
            link="https://developers.google.com/ml-kit/language/smart-reply"
          />
        </Row>

        <FaArrowAltCircleRight
          onClick={() => parallax.current.scrollTo(0)}
          size="5em"
          className="p-2"
          style={{
            position: "absolute",
            right: "0",
            top: "50%",
            opacity: "0.5",
          }}
        />
      </Parallax.Layer>
    </Parallax>
  );
};
