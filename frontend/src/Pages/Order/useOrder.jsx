import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthHelpers from "./../../utils/helpers/AuthHelpers";
import { handleApiResponse } from "./../../utils/helpers/Response";
import { findbyID } from "../../utils/Buku";
import { addTransaksi } from "../../utils/Transaksi";


export const useOrderData = () => {
  const [book, setBook] = useState({});
  const [total, setTotal] = useState(0);
  const [metodePay, setMetode] = useState("");
  const [loading, setLoading] = useState(false);
  const [info, setInfo] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    getallbook();
  }, []);

  useEffect(() => {
    setTotal(book.harga);
  }, [book]);

  const getallbook = async () => {
    const queryParams = new URLSearchParams(window.location.search);
    const bookID = queryParams.get("id");

    const result = await findbyID(bookID);
    if (result.status === 404) {
      navigate("/notfound");
    }
    setBook(result);
  };

  const handleOrder = async (e) => {
    e.preventDefault();
    setLoading(true);
    const UserID = AuthHelpers.GetAuth("UserID");
    const newTransaksi = {
      UserID: UserID,
      bookID: book.bookID,
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

  return {
    book,
    metodePay,
    total,
    loading,
    info,
    setMetode,
    setInfo,
    handleOrder,
  };
};
