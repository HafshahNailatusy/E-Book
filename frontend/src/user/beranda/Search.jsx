import "./Search.css";
import searchIcon from "../assets/search.png";

export function SearchForm() {
  return (
    <form className="d-flex justify-content-center w-75 align-content-center">
      <div className="input-group">
        <input
          type="text"
          className="form-control rounded-3"
          name="key"
          placeholder="Mau buku apa?"
        />
        <img src={searchIcon} alt="Search" className="search" />
      </div>
    </form>
  );
}
