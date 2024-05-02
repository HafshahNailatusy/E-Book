import "../Kartu/Kartu.css";
import cover from "../../assets/mystwick.png";

const Card = () => {
  return (
    <div className="card-rapper">
      <div className={"card-container shadow "}>
        <div className="adit">
          <div className="image-container">
            <img src={cover} className="imageee" alt="..." />
          </div>
          <div className="text-container">
            <h5 className="jdl">The Mystwick School of Musicraft</h5>
            <span className="wrtr">Writer</span>
            <p className="ingpo">
              <span className="writeer">Jessica Khoury</span>
              <span className="pricee">Rp. 160000</span>
            </p>
          </div>
        </div>
      </div>
      <div className={"card-container shadow "}>
        <div className="adit">
          <div className="image-container">
            <img src={cover} className="imageee" alt="..." />
          </div>
          <div className="text-container">
            <h5 className="jdl">The Mystwick School of Musicraft</h5>
            <span className="wrtr">Writer</span>
            <p className="ingpo">
              <span className="writeer">Jessica Khoury</span>
              <span className="pricee">Rp. 160000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
