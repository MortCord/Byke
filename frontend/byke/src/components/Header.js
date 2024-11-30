import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../img/Logo.png";
import cart from "../img/Cart.png";
import ModalCart from "./ModalCart";
import { Button } from "react-bootstrap"; // Make sure to import Button from react-bootstrap

const Header = ({ location }) => {
  const [showModal, setShowModal] = useState(false); // Control modal state

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <header className="d-flex justify-content-around">
      {/* Pass show and handleClose to ModalCart */}
      <ModalCart show={showModal} handleClose={handleClose} />

      <div className="hd1 d-flex align-items-center justify-content-around">
        <Link to="/"><img src={logo} alt="logo" /></Link>
        <input type="text" placeholder="Find a product..." />
      </div>

      <div className="hd2 d-flex align-items-center justify-content-around">
        <Link to="/shop/all">Catalog</Link>
        <Link to="/blog/1">Blog</Link>
      </div>

      <div className="hd3 d-flex align-items-center justify-content-around">
        {/* Cart Button triggers handleShow */}
        <Button className="header-cart" variant="primary" onClick={handleShow}>
          <img src={cart} alt="cart" />
        </Button>

        <Link 
          to="/login" 
          style={{ visibility: location.pathname === '/login' ? 'hidden' : 'visible' }}
        >
          Log in
        </Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
