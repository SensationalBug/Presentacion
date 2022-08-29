import React, { useContext, useEffect, useState } from "react";
import { UserStateContext } from "../context/userStateContext";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { useModal, Modal } from "react-morphing-modal";
import authImage from "../../images/Auth.svg";
import { HiUsers } from "react-icons/hi";
import { Col } from "reactstrap";
import { Login } from "../login";

export const Auth = (props) => {
  const { modalProps, getTriggerProps } = useModal();
  const { user } = useContext(UserStateContext);
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color, setAuthColor] = useState("#9e3db5");
  const { changeOpacity, clear } = props;

  useEffect(() => {
    if (!user) {
      setAuthColor("#9e3db5");
    } else {
      setAuthColor("#41b749");
    }
  }, [user]);

  return (
    <Col
      onMouseEnter={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      onMouseLeave={() =>
        changeOpacity(iconOpacity, setIconOpacity, textOpacity, setTextOpacity)
      }
      className="columna col-xl-2  col-12"
    >
      <HiUsers
        opacity={iconOpacity}
        className="element auth-icon icon"
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
        Auth
      </p>
      <Modal {...modalProps}>
        <Col>
          <img alt="..." src={authImage} className="components-image" />
          <div className="vidrio"></div>
          <Login clear={clear} />
        </Col>
      </Modal>
    </Col>
  );
};
