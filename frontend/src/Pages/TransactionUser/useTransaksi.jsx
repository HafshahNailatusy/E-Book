import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { searchTrans, getTransaksiUser } from "../../utils/Transaksi";
import { findbyID } from "../../utils/Buku";
import AuthHelpers from "../../utils/helpers/AuthHelpers";
import {user} from "../../utils/GetMe";
import { getLocalStorage } from "../../utils/helpers/Localstorage";
import { LOCAL_STORAGE_USER } from "../../utils/helpers/Http";

export const useTransaksi = () => {
  const [transaksi, setTransaksi] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [buku, setBuku] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    fetchTransaksi();
    const user = getLocalStorage(LOCAL_STORAGE_USER);
    setUser(user);
  }, []);

  const fetchTransaksi = async () => {
    try {
      const dataTransaksi = await getTransaksiUser(user.id);
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
