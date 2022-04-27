import React from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  return (
    <>
      <nav>
        <div className="nav_box">
          <span className="my_shop" onClick={() => setShow(true)}>
            <img className="logo" src="/Img/Logo.png" alt="logo" />
          </span>

          <div className="cart" onClick={() => setShow(false)}>
            <span>
              <i class="fas fa-cart-plus"></i>
            </span>
            <span>{size}</span>
          </div>
        </div>
      </nav>
      
    </>
  );
};

export default Navbar;
