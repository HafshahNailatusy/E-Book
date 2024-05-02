import "../Kartuu/Kartuu.css";
import cover from "../../assets/mystwick.png";

const Card = () => {
  return (
    <div className="wrapper">
      <div className="container shadow">
        <img src={cover} className="Gambar" alt="..." />
        <h5 className="Judul">The Mystwick School of Musicraft</h5>
        <hr className="garis"></hr>
        <p className="penulis-container">
          <span className="Penulis">Writer</span>
          <span className="Wrriter">Jessica Khoury</span>
        </p>
        <button
          className="baca mx-auto"
          onClick={() => (window.location.href = "/")}
        >
          Read
        </button>
      </div>
    </div>
  );
};

export default Card;
