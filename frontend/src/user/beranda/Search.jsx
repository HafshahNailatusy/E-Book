import "./Search.css";
import searchIcon from "../assets/search.png";
import { getBook } from "../../admin/book/ApiBook";
import { useState } from "react";


export function SearchForm() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (event) => {
    try {
      if (event.keyCode === 13) {
        const data = await getBook(searchTerm);
        setSearchResults(data)
      }
    } catch (error) {
      console.log("failed to fetch data", error);
    }
  };

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <form className="d-flex justify-content-center w-75 align-content-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-3"
          name="key"
          placeholder="Mau buku apa?"
          value={searchTerm}
          onChange={handleChange}
          onKeyUp={handleSearch}
        />
        <img src={searchIcon} alt="Search" className="search" />
      </div>
    </form>
  );
}
