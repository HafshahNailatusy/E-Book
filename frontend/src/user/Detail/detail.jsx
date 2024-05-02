import React from "react";
import Navbar from "../beranda/Navbar";
import Kaki from "../beranda/footer";
import cover from "../assets/mystwick.png";
import Modal2 from "../Modal/modal2/modal2";
import "../Coll/Text.css";
import { getByID } from "../../admin/book/ApiBook";
import { useParams } from "react-router-dom";


const Detail = () => {
  const { id } = useParams();
  const [book, setBook] = useState();

  useEffect(() => {
    const fetchdata = async () => {
        try {
            const res = await getByID(id);
            setBook(res.data)
        } catch (error) {
            console.log("Failed to fetch data");
        }
    };
    if (id) {
        fetchdata();
    }
}, [id]);

  return (
    <>
      <Navbar />
      <h1 className="ebok">Detail E-Book</h1>
      <div className="detail">
        <img src={book.foto} className="imagee" alt="..." />
        <div style={{ width: "100%" }}>
          <h1 className="Title">{book.judul}</h1>
          <h4 className="Writer">{book.penulis}</h4>
          <h1 className="Harga">Rp. {book.harga}</h1>
          <Modal2 />
          <h5 className="Synopsis">
            {book.sinopsis}
          </h5>
        </div>
      </div>
      <Kaki />
    </>
  );
};

export default Detail;
