import React from "react";
import Navbar from "../beranda/Navbar";
import Kaki from "../beranda/footer";
import "../Coll/Text.css";
import Kartu from "../History/Kartu/Kartu";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <h1 className="ebok">Purchase History</h1>
      <h3 className="date">20/03/2024</h3>
      <Kartu />
      <Kaki />
    </>
  );
};

export default Dashboard;
