import React from "react";
import "./text.css";
import Modal from "../Modal/modal";
import { SearchForm } from "./Search";
import book from "../assets/Group.png";
import "./login.css";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar px-5 py-3">
      <div className="d-flex w-100 justify-content-between justify-content-center align-items-center">
        <a className="butopiaaa" href="/">
          butopia.
        </a>
        <SearchForm />
        <div className="biji">
          <button
            className="biji"
            onClick={() => (window.location.href = "/collection")}
          >
            <img src={book} alt="Book" className="book-icon" />
          </button>
        </div>
        <Modal />
      </div>
    </nav>
  );
};

export default Navbar;
