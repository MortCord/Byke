import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import ProdCard from "./ProdCard";

const Shop = () =>{

    const [priceFrom, setPriceFrom] = useState(10);
    const [priceTo, setPriceTo] = useState(20);

    useEffect(() =>{
        if(priceFrom <= 0){
            setPriceFrom(1);
        }
        if(priceTo <= 0){
            setPriceTo(1);
        }
    },[priceFrom, priceTo]);

    return(
        <div className="shop d-flex justify-content-between">
            <div className="shop-nav-main">
                <div className="d-flex flex-column shop-nav">
                <Link to="/shop">All</Link>
                <Link to="/shop">Forks</Link>
                <Link to="/shop">Connecting rod star</Link>
                <Link to="/shop">Bicycle cassete</Link>
                <Link to="/shop">Pedals</Link>
                <Link to="/shop">Switches</Link>
                <Link to="/shop">Handlebars</Link>
                <Link to="/shop">Saddles</Link>
                <Link to="/shop">Helmets</Link>
                <Link to="/shop">Glasses</Link>
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
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
                <ProdCard className="prod-card-shop" name={"Spare parts Rock Shox service kit Recon SA"} price={"17$"} />
            </div>
        </div>
    );
}

export default Shop;