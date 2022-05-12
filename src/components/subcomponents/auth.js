import React, { useContext, useEffect, useState } from "react";
import { useModal, Modal } from "react-morphing-modal";
import "react-morphing-modal/dist/ReactMorphingModal.css";
import { HiUsers } from "react-icons/hi";
import { Col } from "reactstrap";
import { Login } from "../login";
import { UserStateContext } from "../context/userStateContext";

export const Auth = (props) => {
  const { modalProps, getTriggerProps } = useModal();
  const { changeOpacity, clear } = props;
  const { user } = useContext(UserStateContext);
  const [textOpacity, setTextOpacity] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const [color, setAuthColor] = useState("#9e3db5");

  useEffect(() => {
    if (!user) {
      setAuthColor("#9e3db5");
    } else{
      setAuthColor("#e04d4d")
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
      className="columna col-xl-2 col-12"
    >
      <HiUsers
        opacity={iconOpacity}
        className="element icon"
        size="10em"
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
        Authentication
      </p>
      <Modal {...modalProps} className="modal">
        <h1>Authentication</h1>
        <Login clear={clear} />
      </Modal>
    </Col>
  );
};
