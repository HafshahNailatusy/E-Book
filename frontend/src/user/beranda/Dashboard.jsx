import React, { useEffect, useState } from "react";
import Navbar from "../beranda/Navbar";
import Kaki from "./footer";
import "./text.css";
import "./image.css";
import "./book.css";
import Card from "./card/card";
// import gambar from "../assets/pict1.png";
import panah from "../assets/arrow.png";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState([])

  useEffect(()=>{
    fecthData()
  },[])

  const fecthData = async() => {
    const response = await axios.get("http://localhost:3000/book/getAllBook")
    setData(response)
    console.log(response)
  }
  return (
    <>
      <Navbar />
      <h1 className="headline">The easiest way to find the best e-book!</h1>
      <h5 className="sub-headline">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor.
      </h5>
      <h1 className="headline-2">Update New Book</h1>
      <img src={data.foto} alt="buku" className="moving-image"></img>
      <button
        className="rectangle-button"
        onClick={() => (window.location.href = "/collection")}
      >
        Explore Book
        <img src={panah} alt="arrow" className="button-icon" />
      </button>
      <Card data={data}/>
      <a href="collection" className="see">
        See More
      </a>
      <Kaki />
    </>
  );
};

export default Dashboard;
