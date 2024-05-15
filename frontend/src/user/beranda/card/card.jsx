import "../card/card.css";
import cover from "../../assets/mystwick.png";

const Card = ({ collection }) => {
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
      
    </div>
  );
};

export default Card;
