import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../img/Logo.png";
import cart from "../img/Cart.png";

const Header = ({location}) =>(
    <header className="d-flex justify-content-around">
        <div className="hd1 d-flex align-items-center justify-content-around">
            <Link to="/"><img src={logo} alt="logo" /></Link>
            <input type="text" placeholder="Find a product..." />
        </div>
        <div className="hd2 d-flex align-items-center justify-content-around">
            <Link to="/shop">Catalog</Link>
            <Link to="/">Blog</Link>
        </div>
        <div className="hd3 d-flex align-items-center justify-content-around">
            <img src={cart} alt="cart" />
            <Link 
                to="/login" 
                style={{ visibility: location.pathname === '/login' ? 'hidden' : 'visible' }}
            >
                Log in
            </Link>
        </div>
    </header>
);

export default withRouter(Header);