import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import ProdCard from "./ProdCard";

const Shop = ({ match }) => {
  const [priceFrom, setPriceFrom] = useState(10);
  const [priceTo, setPriceTo] = useState(20);
  const [prod, setProd] = useState([]);
  const [filteredProd, setFilteredProd] = useState([]);
  const [prodType, setProdType] = useState([]);

  // Extraction the prodType ID from match.params
  const { id: prodTypeId } = match.params;

  useEffect(() => {
    // Fetch all products
    fetch("http://localhost:8080/prod/get")
      .then((res) => res.json())
      .then((result) => {
        setProd(result);
        setFilteredProd(result); // Initialize filtered products
      });

    // Fetch all product types
    fetch("http://localhost:8080/prodtype/get")
      .then((res) => res.json())
      .then((result) => {
        setProdType(result);
      });
  }, []);

  useEffect(() => {
    // Filter products by prodType ID if it exists, otherwise show all
    if (prodTypeId && prodTypeId !== "all") {
      const filtered = prod.filter(
        (product) => product.type === Number(prodTypeId)
      );
      setFilteredProd(filtered);
    } else {
      setFilteredProd(prod);
    }
  }, [prodTypeId, prod]);

  const handleSort = (e) => {
    e.preventDefault();
    const sorted = filteredProd.filter(
      (product) => product.price >= priceFrom && product.price <= priceTo
    );
    setFilteredProd(sorted);
  };

  return (
    <div className="shop d-flex justify-content-between">
      <div className="shop-nav-main">
        <div className="d-flex flex-column shop-nav">
          <Link to="/shop/all">All</Link>
          {prodType.map((productType) => (
            <Link key={productType.id} to={`/shop/${productType.id}`}>
              {productType.name}
            </Link>
          ))}
        </div>
        <hr />
        <form className="shop-form d-flex flex-column" onSubmit={handleSort}>
          <span>Price</span>
          <div className="shop-form-field d-flex">
            <input
              type="number"
              value={priceFrom}
              onChange={(e) => setPriceFrom(Number(e.target.value))}
            />
            <input
              type="number"
              value={priceTo}
              onChange={(e) => setPriceTo(Number(e.target.value))}
            />
          </div>
          <button type="submit">Sort</button>
        </form>
      </div>
      <div className="products d-flex justify-content-around">
        {filteredProd.map((product) => (
          <ProdCard
            key={product.id}
            name={product.name}
            price={product.price}
            id={product.id}
            photo={product.photo}
          />
        ))}
      </div>
    </div>
  );
};

export default withRouter(Shop);
