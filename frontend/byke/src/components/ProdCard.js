import React from "react";
import prod from "../img/testProd.png";

const ProdCard =(props)=>(
    <div className="prod-card">
        <img src={prod} alt="product" />
        <span>{props.name}</span>
        <div className="d-flex justify-content-center">
        <div className="prod-card-price d-flex justify-content-center mt-2">
            <span>{props.price}</span>
        </div>
        </div>
    </div>
);

export default ProdCard;