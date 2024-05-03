import React from "react";
import Navbar from "../beranda/Navbar";
import Kaki from "../beranda/footer";
import Card from "../beranda/card/card";
import "../Coll/Text.css";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <h1 className="ebok">E-Book Collection</h1>
      <Card collection />
      <Kaki />
    </>
  );
};

export default Dashboard;
