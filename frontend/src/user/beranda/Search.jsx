import "./Search.css";
import searchIcon from "../assets/search.png";
import { useState } from "react";

export function SearchForm(onSearch) {
  const [searchInput, setSearchInput] = useState("");
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };
  const handleSubmit = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      onSearch(searchInput);
    }
  };

  return (
    <form className="d-flex justify-content-center w-75 align-content-center" onKeyUp={handleSubmit}>
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-3"
          name="key"
          placeholder="Mau buku apa?"
          onChange={handleChange}
          value={searchInput}
        />
        <img src={searchIcon} alt="Search" className="search" />
      </div>
    </form>
  );
}
