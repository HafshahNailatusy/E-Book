import React, { useState } from "react";
import "../Modal/modal.css";
import login from "../assets/Ellipse.png";
import pp from "../assets/Ellipsee.png";
import { Logout } from "../../Pages/Login/LoginProses";
import { useNavigate } from "react-router-dom";


const Modal = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const logout = async (e) => {
		e.preventDefault();

		try {
			const res = await Logout;
				navigate("/");
		} catch (error) {
			console.error("error:", error);
		}
	};

  return (
    <div>
      <button className="biji" onClick={toggleModal}>
        <img src={login} alt="Login" className="login-icon" />
      </button>

      {isOpen && (
        <div className="modal ">
          <div className="modal-content shadow ">
            <img src={pp} className="profile" />
            <a href="" className="ganti">
              Change Picture
            </a>
            <span className="nama">Dading Suherman</span>
            <span className="email">dadangsuparman17@gmail.com</span>
            <span>
              <button
                className="koleksi"
                onClick={() => (window.location.href = "/purchase")}
              >
                E-Book Collection
              </button>
            </span>
            <span>
              <button
                className="kenangan"
                onClick={() => (window.location.href = "/history")}
              >
                Purchase History
              </button>
              <button className="closeModal mettu" onClick={toggleModal}>
                X
              </button>
            </span>
            <button
              className="keluar"
              onClick={logout}
            >
              Log Out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;