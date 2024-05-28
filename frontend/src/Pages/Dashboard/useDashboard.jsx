import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { useNavigate } from "react-router-dom";
import { findbook, getallbook } from "../../utils/Buku";


export const useDashboardData = () => {
  const [buku, setBuku] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await getallbook()
    console.log(res)

    setBuku(res);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const result = await findbook(search);
      setBuku(result);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDetailClick = (id) => {
    navigate(`/bookDetail/${id}`); // Mengirimkan ID buku ke parent component
  };


  return { buku, search, setSearch, handleSearch, handleDetailClick };
};
