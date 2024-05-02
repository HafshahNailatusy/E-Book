import "../card/card.css";
import cover from "../../assets/mystwick.png";
// import { getAllBook } from "../../../admin/book/ApiBook";
// import { useEffect, useState } from "react"; 

const Card = ({ book }) => {
  return (
    <div
      className={
        book
          ? "product-card-container-collection"
          : "product-card-container"
      }
    >
      <a href="detail" className="card-link">
        <div className="product-card-wrapper shadow">
          <img src={cover} className="image" alt="..." />
          <h5 className="judul">The Mystwick School of Musicraft</h5>
          <hr className="garis"></hr>
          <p className="penulis-name-container">
            <span className="penulis">Writer</span>
            <span className="buy">Buy Now</span>
          </p>
          <p className="ingpo-container">
            <span className="writer">Jessica Khoury</span>
            <span className="price">Rp. 160000</span>
          </p>
        </div>
      </a>
      {/* <a href="detail" className="card-link">
        <div className="product-card-wrapper shadow">
          <img src={book.foto} className="image" alt="..." />
          <h5 className="judul">{book.judul}</h5>
          <hr className="garis"></hr>
          <p className="penulis-name-container">
            <span className="penulis">Writer</span>
            <span className="buy">Buy Now</span>
          </p>
          <p className="ingpo-container">
            <span className="writer">{book.penulis}</span>
            <span className="price">Rp. {book.harga}</span>
          </p>
        </div>
      </a> */}
    </div>
  );
};

// const AllBook = () => {
//   const [book, setBook] = useState([])
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await getAllBook()
//         setBook(data)
//       } catch (error) {
//         console.error("error fetching data: ", error)
//       }
//     }
//     fetchData()
//   }, [])

//   return (
//     <div className="product-list">
//       {book.map(book => (
//         <Card key={book.BookID} book={book} />
//       ))}
//     </div>
//   );


// }

export default Card
