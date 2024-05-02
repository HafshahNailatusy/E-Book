import React from "react";
import Navbar from "../beranda/Navbar";
import Kaki from "../beranda/footer";
import "../Coll/Text.css";
import Kartuu from "./Kartuu/Kartuu";

const Purchased = () => {
  return (
    <>
      <Navbar />
      <h1 className="ebok">Purchased E-Book</h1>
      <Kartuu />
      <Kaki />
    </>
  );
};

export default Purchased;
