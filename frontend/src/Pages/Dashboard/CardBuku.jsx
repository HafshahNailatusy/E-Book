import CustomButton from "./../../components/Button";
import { useNavigate } from "react-router-dom";
import "./card.css"


export const CardBuku = ({ id, foto, judul, harga, kategori, penulis, onPesan }) => {
  const navigate= useNavigate()
  const handleDetailClick = (id) => {
    navigate(`/bookDetail/${id}`); // Mengirimkan ID buku ke parent component
  };
  return (
    <div className="product-card-container-collection">
    <div className="card-link">
        <div className="product-card-wrapper shadow">
          <img src={foto} className="image w-[200px] h-[300px]" alt="..." />
          <h5 className="judul">{judul}</h5>
          <hr className="garis"></hr>
          <p className="penulis-name-container">
            <span className="penulis">Writer</span>
            <span className="buy">Buy Now</span>
          </p>
          <p className="ingpo-container">
            <span className="writer">{penulis}</span>
            <span className="price">{harga}</span>
          </p>
          <div className=" w-full flex justify-center items-center px-2"><button
              className={` hover:scale-105 text-sm font-poppins font-semibold mx-auto whitespace-nowrapmd:text-base bg-[#79B3D3] text-white w-[160px] md:w-full h-[40px] md:h-8 rounded-2xl mt-[5%]`}
              onClick={()=>{handleDetailClick(id)}}
            >
              Beli Buku
            </button></div>
          
        </div>
      </div>
      </div>
    // <div
    //   key={id}
    //   className="w-full md:w-[370px] h-[420px] rounded-xl shadow bg-white flex flex-col p-7"
    // >
    //   <div className="flex flex-col">
    //     <div className="w-20 h-20 rounded-lg overflow-hidden mr-4">
    //       <img
    //         src={foto}
    //         alt={nama}
    //         className="object-contain w-full h-full"
    //         height={300}
    //         width={300}
    //       />
    //     </div>
    //     <h1 className="text-lg font-semibold md:text-2xl md:font-bold text-primary mb-2">{judul}</h1>
    //     <h2 className="text-lg font-semibold md:text-2xl md:font-bold text-primary mb-2">
    //       Rp {harga} <span className="text-gray-400 text-base"></span>
    //     </h2>
    //     <p className="text-lg text-gray-500">{kategori}</p>
    //   </div>
    //   <CustomButton
    //     className="bg-gradient-to-r from-primary-dark to-secondary text-white w-full h-12 mt-auto md:text-base"
    //     type="button"
    //     onClick={onPesan}
    //   >
    //     Beli
    //   </CustomButton>
    // </div>
  );
};
