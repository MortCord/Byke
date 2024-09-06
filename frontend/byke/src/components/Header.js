import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import cart from "../img/Cart.png";

const Header = () =>(
    <header className="d-flex justify-content-around">
        <div className="hd1 d-flex align-items-center justify-content-around">
            <img src={logo} alt="logo" />
            <input type="text" placeholder="Find a product..." />
        </div>
        <div className="hd2 d-flex align-items-center justify-content-around">
            <Link to="/">Catalog</Link>
            <Link to="/">Blog</Link>
        </div>
        <div className="hd3 d-flex align-items-center justify-content-around">
            <img src={cart} alt="cart" />
            <Link to="/">Log in</Link>
        </div>
    </header>
);

export default Header;