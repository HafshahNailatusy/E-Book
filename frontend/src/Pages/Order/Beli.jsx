import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { imageURL } from "./../../Config";
import Modal from "react-modal";
import AuthHelpers from "../../utils/helpers/AuthHelpers";
import { addTransaksi } from "../../utils/Transaksi";
import { handleApiResponse } from "../../utils/helpers/Response";

const BookDetail = () => {
  const opsibayar = [
    { value: "Gopay", label: "Gopay" },
    { value: "ShopeePay", label: "ShopeePay" },
    { value: "Dana", label: "Dana" },
    { value: "Mobile Banking", label: "Mobile Banking" },
  ];
  const [book, setBook] = useState([])
  const [bayar, setBayar] = useState('')
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const [action, setAction] = useState("");
  const [metodePay, setMetode] = useState("");
  const [loading, setLoading] = useState("")
  const { id } = useParams();
  const navigate = useNavigate();
  
  

  useEffect(() => {
    bookData()
  }, [id])

  const bookData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/book/findByID/${id}`)
      console.log(res)
      if (res.status === true) {
        throw new Error("Failed to fetch book data");
      }
      setBook(res.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    const UserID = AuthHelpers.GetAuth("id");
    const idbuku = id
    const today = new Date()
    const TglTransaksi = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`
    const newTransaksi = {
      UserID: UserID,
      BookID : idbuku,
      TglTransaksi: TglTransaksi,
      MetodePay: metodePay,
    };

    const response = await addTransaksi(newTransaksi);
    handleApiResponse(response, () => {
      setTimeout(() => {
        navigate("/");
        setLoading(false);
      }, 1000);
    })
  };

  const handleCloseModal = () => {
    navigate.goBack();
  };

  const handleAdd = () => {
    setModalIsOpen(true);
    setAction("add");
  };


  return (
    <div className="card">
      <img src={imageURL + book.foto} alt={book.judul} height={300} width={300} />
      <h2 className="card-title">{book.judul}</h2>
      <p className="card-content"><strong>Penulis:</strong> {book.penulis}</p>
      <p className="card-content"><strong>Kategori:</strong> {book.kategori}</p>
      <p className="card-content"><strong>Sinopsis:</strong> {book.sinopsis}</p>
      <p className="card-content"><strong>Harga:</strong> {book.harga}</p>
      <button onClick={() => handleAdd()}>Pilih Metode Bayar</button>
      <Modal
        isOpen={ModalIsOpen}
        ariaHideApp={false}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <h2 className="text-3xl font-bold leading-tight tracking-wide">
        </h2>
        <button onClick={() => handleCloseModal()}/>
        <div className="flex flex-col flex-wrap gap-2">
          {opsibayar.map((option) => (
            <div className="flex items-center w-[200px]" key={option.value}>
              <input
                type="radio"
                id={option.value}
                name="metodePay"
                value={option.value}
                checked={metodePay === option.value}
                onChange={() => setMetode(option.value)}
                className="sr-only"
              />
              <label
                htmlFor={option.value}
                className={`flex-1 py-2 rounded-lg text-center cursor-pointer ${bayar === option.value
                  ? "bg-primary text-white"
                  : "bg-gray-200 text-gray-500"
                  }`}
              >
                {option.label}
              </label>
            </div>
          ))}
          <button type="submit" onClick={(e) => handleOrder(e)}>Bayar</button>
        </div>
      </Modal>
    </div>
  );
};

export default BookDetail; 