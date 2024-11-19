import React from "react";
import prod from "../img/testProd.png";
import { Link } from "react-router-dom";

const ProdCard =(props)=>(
    <Link className="prod-card-link" to="/prod"><div className="prod-card">
        <img src={prod} alt="product" />
        <span>{props.name}</span>
        <div className="d-flex justify-content-center">
        <div className="prod-card-price d-flex justify-content-center mt-2">
            <span>{`${props.price}$`}</span>
        </div>
        </div>
    </div>
    </Link>
);

export default ProdCard;