import React from "react";
import prod from "../img/prodPageTest.png";
import plus from "../img/plus.png";
import { useState } from "react";
import minus from "../img/minus.png";
import checkmark from "../img/Checkmark.png";
import heart from "../img/heart.png";

const ProdPage = () =>{

    const [amount,setAmount] = useState(1);

    return(
        <div className="prod-page d-flex justify-content-around">
            <div><img src={prod} alt="product" /></div>
            <div className="prod-page-main-sect">
                <h1>Spare parts Rock Shox service kit Recon SA</h1>
                <div className="prod-info mt-3">
                    <h4>Brand: Rock Shox</h4>
                    <h4>ID: 5</h4>
                </div>
                <div className="price-sect mt-5 d-flex">
                    <span>17$</span>
                    <div className="d-flex amount-sect">
                        <div>
                            <img src={plus} alt="plus" onClick={()=>setAmount(amount+1)} />
                            <input type="text" value={amount} onChange={(e) => setAmount(e.target.value)} />
                            <img src={minus} alt="minus" onClick={()=>setAmount(amount-1)} />
                        </div>
                        <button>Buy</button>
                    </div>
                </div>
                <div className="d-flex prod-page-optio mt-3">
                    <div>
                        <img src={checkmark} alt="checkmark" />
                        <span className="avail">Available</span>
                    </div>
                    <div>
                        <img src={heart} alt="heart" />
                        <span className="favorite">Add to favorites</span>
                    </div>
                </div>
                <hr />
                <div>
                    <p>Bicycle spare parts repair kit for Rock Shox Recon SA fork. This is a complete set of boots, rings, washers for replacement. Anthers protect the insides of the fork from dirt, foam rings serve to lubricate the fork legs. The rings serve as seals to prevent oil or air from escaping. Timely installation of a repair kit will extend the life of your Rock Shox fork.</p>
                </div>
            </div>
        </div>
    );
}

export default ProdPage;