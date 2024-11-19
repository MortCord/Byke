import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProdCard from "./ProdCard";

const Shop = () =>{

    const [priceFrom, setPriceFrom] = useState(10);
    const [priceTo, setPriceTo] = useState(20);
    const [prod, setProd] = useState([]);
    const [prodType, setProdType] = useState([]);

    useEffect(() =>{
        if(priceFrom <= 0){
            setPriceFrom(1);
        }
        if(priceTo <= 0){
            setPriceTo(1);
        }
    },[priceFrom, priceTo]);

    useEffect(() =>{
        fetch("http://localhost:8080/prod/get")
        .then((res) => res.json())
        .then((result) =>{
            console.log(result);
            setProd(result);
        });

        fetch("http://localhost:8080/prodtype/get")
        .then((res) => res.json())
        .then((result) => {
            console.log(result);
            setProdType(result);
        })
    },[]);
    

    return(
        <div className="shop d-flex justify-content-between">
            <div className="shop-nav-main">
                <div className="d-flex flex-column shop-nav">
                <Link to="/shop/all">All</Link>
                {prodType.map((productType) =>(
                    <Link to={`/shop/${productType.id}`}>{productType.name}</Link>
                ))}
                </div>
                <hr />
                <form className="shop-form d-flex flex-column">
                    <span>Price</span>
                    <div className="shop-form-field d-flex">
                        <input type="number" value={priceFrom} onChange={(e) => setPriceFrom(e.target.value)} />
                        <input type="number" value={priceTo} onChange={(e) => setPriceTo(e.target.value)} />
                    </div>
                    <button>Sort</button>
                </form>
            </div>
            <div className="products d-flex justify-content-around">
                {prod.map((product) => (
                    <ProdCard name={product.name} price={product.price} />
                ))}
            </div>
        </div>
    );
}

export default Shop;