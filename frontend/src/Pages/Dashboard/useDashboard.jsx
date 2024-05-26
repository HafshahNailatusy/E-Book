import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
import { findbook, getallbook } from "../../utils/Buku";
// 

export const useDashboardData = () => {
  const [layanan, setLayanan] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    fetchData();
  }, []);

  const fetchData = async () => {
    const [dataStatistik, dataLayanan] = await Promise.all([
      getallbook(),
    ]);

    setLayanan(dataLayanan);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await findbook(search);
      setLayanan(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePesan = (id) => {
    navigate(`/transaksi/add?id=${id}`);
  };

  return { layanan, search, setSearch, handleSearch, handlePesan };
};
