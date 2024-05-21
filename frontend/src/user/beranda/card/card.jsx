import "../card/card.css";
import { getAllBook, getFoto } from "../../../admin/book/ApiBook";
import { useEffect, useState } from "react";

const Card = ({ collection }) => {
  const [data, setData] = useState([])
  const [imagePreview, setImagePreview] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
        try {
            const res = await getAllBook;
            console.log(res)
            const book = res.data;
            if (book.foto) {
                setImagePreview(getFoto(book.foto));
            }
        } catch (error) {
            console.log("Failed to fetch data");
        }
    };
        fetchdata();
}, []);
  return (
    <div
      className={
        collection
          ? "product-card-container-collection"
          : "product-card-container"
      }
    >
      <a href="detail" className="card-link">
        <div className="product-card-wrapper shadow">
          <img src={data.cover} className="image" alt="..." />
          <h5 className="judul">{data.judul}</h5>
          <hr className="garis"></hr>
          <p className="penulis-name-container">
            <span className="penulis">Writer</span>
            <span className="buy">Buy Now</span>
          </p>
          <p className="ingpo-container">
            <span className="writer">{data.penulis}</span>
            <span className="price">Rp. {data.harga}</span>
          </p>
        </div>
      </a>
      
    </div>
  );
};

export default Card;
