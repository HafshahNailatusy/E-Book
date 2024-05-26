import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { searchTrans, getAllTransaksi } from "../../utils/Transaksi";


export const useTransaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  // const [totalPendapatan, setTotalPendapatan] = useState(0);
  const [keyword, setKeyword] = useState("");
  // const [endDate, setEndDate] = useState("");

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
        return toast.error("Harus mengisi end date", { autoClose: 2000 })
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
