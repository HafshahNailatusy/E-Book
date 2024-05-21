import React, { useEffect, useState } from "react";
import Navbar from "../beranda/Navbar";
import Kaki from "./footer";
import "./text.css";
import "./image.css";
import "./book.css";
import Card from "./card/card";
// import gambar from "../assets/pict1.png";
import panah from "../assets/arrow.png";
import { getAllBook, getFoto } from "../../admin/book/ApiBook";

const Dashboard = () => {
  const [data, setData] = useState([])
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
        try {
            const res = await getAllBook();
            console.log(res)
            const book = res.data;
            if (book.foto) {
                setImagePreview(getFoto(book.foto));
            }
        } catch (error) {
            console.log("Failed to fetch data");
        }
    };
     {
        fetchdata();
    }
}, []);

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
