import "../kirti/kirti.css";
import cover from "../../assets/mystwick.png";

const Card = () => {
  return (
    <div className="rapper">
      <div className={"kontainer shadow "}>
        <div className="adidul">
          <div className="gambar-container">
            <img src={cover} className="imageeee" alt="..." />
          </div>
          <div className="tulisan-container">
            <h5 className="jdll">The Mystwick School of Musicraft</h5>
            <span className="wrtrr">Writer</span>
            <p className="ingp">
              <span className="writeerr">Jessica Khoury</span>
              <span className="priceee">Rp. 160000</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kirti;
