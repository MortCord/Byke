import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "../img/Logo.png";
import cart from "../img/Cart.png";
import ModalCart from "./ModalCart";
import { Button } from "react-bootstrap";
import stringSimilarity from "string-similarity";

const Header = ({ location, history }) => {
  const [showModal, setShowModal] = useState(false); // Control modal state
  const [prodInp, setProdInp] = useState("");
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/prod/get")
      .then((res) => res.json())
      .then((result) => {
        setProd(result);
      });
  }, []);


  const handleSearchRedirect = (e) => {
    if (e.key === "Enter") {
      const searchTerm = prodInp.trim();
      if (searchTerm) {
        // Extract product names
        const productNames = prod.map((product) => product.name);
  
        // Find the best match
        const bestMatch = stringSimilarity.findBestMatch(searchTerm, productNames);
  
        if (bestMatch.bestMatch.rating > 0.8) { // Threshold: 80% similarity
          const matchedProduct = prod.find(
            (product) => product.name === bestMatch.bestMatch.target
          );
          if (matchedProduct) {
            // Redirect to the product page
            history.push(`/prod/${matchedProduct.id}`);
          }
        } else {
          // Redirect to a generic search results page if no good match
          history.push(`/search?query=${encodeURIComponent(searchTerm)}`);
        }
      }
    }
  };
  
  

  return (
    <header className="d-flex justify-content-around">
      <ModalCart show={showModal} handleClose={() => setShowModal(false)} />

      <div className="hd1 d-flex align-items-center justify-content-around">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <input
          type="text"
          placeholder="Find a product..."
          value={prodInp}
          onChange={(e) => setProdInp(e.target.value)}
          onKeyDown={handleSearchRedirect} // Listen for "Enter" key
        />
      </div>

      <div className="hd2 d-flex align-items-center justify-content-around">
        <Link to="/shop/all">Catalog</Link>
        <Link to="/blog/1">Blog</Link>
      </div>

      <div className="hd3 d-flex align-items-center justify-content-around">
        <Button className="header-cart" variant="primary" onClick={() => setShowModal(true)}>
          <img src={cart} alt="cart" />
        </Button>

        <Link
          to="/login"
          style={{
            visibility: location.pathname === "/login" ? "hidden" : "visible",
          }}
        >
          Log in
        </Link>
      </div>
    </header>
  );
};

export default withRouter(Header);
