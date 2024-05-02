import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer className="sikil">
      <hr className="gariss"></hr>
      <div className="footer">
        <h1 className="but">butopia.</h1>
        <div className="menuFooter">
          <div className="itemFooter">
            <h4>Product butopia.</h4>
            <a href="#">New Books</a>
            <a href="#">Product butopia</a>
          </div>
          <div className="itemFooter">
            <h4>Shop</h4>
            <a href="#">Categoty Books</a>
            <a href="#">Payment</a>
          </div>
          <div className="itemFooter">
            <h4>About butopia.</h4>
            <a href="#">About</a>
            <a href="#">Online Store</a>
            <a href="#">Partnership</a>
          </div>
          <div className="itemFooter">
            <h4>Contact</h4>
            <a href="#">Instagram</a>
            <a href="#">butopia.@gmail.com</a>
            <a href="#">0812-3456-7890</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default footer;
