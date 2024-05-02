import React from "react";
import Navbar from "../beranda/Navbar";
import Kaki from "../beranda/footer";
import cover from "../assets/mystwick.png";
import Modal2 from "../Modal/modal2/modal2";
import "../Coll/Text.css";

const Detail = () => {
  return (
    <>
      <Navbar />
      <h1 className="ebok">Detail E-Book</h1>
      <div className="detail">
        <img src={cover} className="imagee" alt="..." />
        <div style={{ width: "100%" }}>
          <h1 className="Title">The Mystwick School of Musicraft</h1>
          <h4 className="Writer">by Jessica Khoury</h4>
          <h1 className="Harga">Rp. 160.000</h1>
          <Modal2 />
          <h5 className="Synopsis">
            Amelia Jones always dreamed of attending the Mystwick School of
            Musicraft, where the world’s most promising musicians learn to
            create magic. So when Amelia botches her audition, she thinks her
            dream has met an abrupt and humiliating end—until the school agree s
            to give her a trial period. Amelia is determined to prove herself,
            vowing to do whatever it takes to become the perfect musician.
          </h5>
        </div>
      </div>
      <Kaki />
    </>
  );
};

export default Detail;
