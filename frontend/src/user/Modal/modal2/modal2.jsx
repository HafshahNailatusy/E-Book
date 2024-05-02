import React, { useState } from "react";
import "../modal2/modal2.css";
import Kirti from "../modal2/kirti/kirti.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="biji2" onClick={toggleModal}>
        Buy Now
      </button>

      {isOpen && (
        <div className="modal ">
          <div className="modal-content shadow ">
            <div className="majer">Payment</div>
            <Kirti />
            <button className="closeModal mettu" onClick={toggleModal}>
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
