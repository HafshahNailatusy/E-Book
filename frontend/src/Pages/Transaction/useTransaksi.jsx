import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { searchTrans, getAllTransaksi } from "../../utils/Transaksi";
import { findbyID } from "../../utils/Buku";
import AuthHelpers from "../../utils/helpers/AuthHelpers";

export const useTransaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [buku, setBuku] = useState([])

  useEffect(() => {
    fetchTransaksi();
  }, []);

  const fetchTransaksi = async () => {
    try {
      const dataTransaksi = await getAllTransaksi();
      setTransaksi(dataTransaksi);
    } catch (error) {
      console.error(error);
    }
  };

  const search = async () => {
    try {
      if(!keyword){
        return toast.error("Harus mengisi keyword", { autoClose: 2000 })
      }
      const filteredTransaksi = await searchTrans(keyword);

      setTransaksi(filteredTransaksi);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    transaksi,
    keyword,
    setKeyword,
    search
  };
};
