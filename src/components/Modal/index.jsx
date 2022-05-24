import React from "react";
import { SModal } from "./styles";
import { FaTimes } from "react-icons/fa";

const Modal = ({ setShowModal }) => {
  return (
    <SModal>
      <div className="modal-wrapper">
        <div className="modal-header">
          <h1 className="title">Your Cart</h1>
          <span
            className="icon"
            style={{ cursor: "pointer" }}
            onClick={() => setShowModal(false)}
          >
            <FaTimes color="red" fontSize="24px" />{" "}
          </span>
        </div>
        <div className="modal-content"></div>
      </div>
    </SModal>
  );
};

export default Modal;
