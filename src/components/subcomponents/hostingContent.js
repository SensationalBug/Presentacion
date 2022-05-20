import React, { useRef } from "react";
import Parallax from "react-springy-parallax";
import { Col, Row } from "reactstrap";
import { BiWorld } from "react-icons/bi";

export const HostingContent = () => {
  const parallax = useRef();
  return (
    <Parallax className="all-parallax" ref={parallax} pages={3}>
      <Parallax.Layer offset={0} speed={2} className="all-window">
        <h1 className="all-title">HOSTING</h1>
        <div className="border col-4 contenedor">
          <div class="globo">
            <div class="frontal"></div>
            <div class="mapfront"></div>
            <div class="mapback"></div>
            <div class="back"></div>
          </div>
        </div>
      </Parallax.Layer>

      {/* <Parallax.Layer offset={0} speed={2} style={{ left: "70vw" }}>
        <Row className="contenedor">
          <div class="globo">
            <div class="frontal"></div>
            <div class="mapfront"></div>
            <div class="mapback"></div>
            <div class="back"></div>
          </div>
        </Row>
      </Parallax.Layer> */}
    </Parallax>
  );
};
