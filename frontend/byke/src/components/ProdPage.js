import React, { useEffect } from "react";
import prod from "../img/prodPageTest.png";
import plus from "../img/plus.png";
import { useState } from "react";
import minus from "../img/minus.png";
import checkmark from "../img/Checkmark.png";
import heart from "../img/heart.png";
import { withRouter } from "react-router-dom";

const ProdPage = ({match, history}) =>{

    const renderFavorite = () => {
        if (isAvail == 1) {
            return (
                <>
                    <img src={checkmark} alt="checkmark" />
                    <span className="avail">Available</span>
                </>
            );
        }else{
            return (
                <>
                    <span className="notavail">Not available</span>
                </>
            ); 
        }
        return null; // Ensure a return statement if the condition isn't met
    };
    

    const [amount,setAmount] = useState(1);
    const { id } = match.params;
    const [prodName, setProdName] = useState("");
    const [prodBrand, setProdBrand] = useState("");
    const [isAvail, setIsAvail] = useState(0);
    const [prodPrice, setProdPrice] = useState(0);
    const [prodPhoto, setProdPhoto] = useState("");


    useEffect(() =>{
        if(amount <= 0){
            setAmount(1);
        }
    },[amount]);

    useEffect(() => {
        fetch("http://localhost:8080/prod/get")
            .then(res => res.json())
            .then((result) => {
                console.log(result);
                const prod = result.find(prod => prod.id === parseInt(id));
                if (prod) {
                    setProdName(prod.name);
                    setProdBrand(prod.brand);
                    setIsAvail(prod.isAvail);
                    setProdPrice(prod.price);
                    setProdPhoto(prod.photo);
                }
            })
            .catch(error => {
                console.error("Error fetching product:", error);
            });
    }, [id]);

    return(
        <div className="prod-page d-flex justify-content-around">
            <div><img src={`http://localhost:8080/prod/images/${prodPhoto}`} alt="product" /></div>
            <div className="prod-page-main-sect">
                <h1>{prodName}</h1>
                <div className="prod-info mt-3">
                    <h4>{prodBrand}</h4>
                    <h4>ID: {id}</h4>
                </div>
                <div className="price-sect mt-5 d-flex">
                    <span>{prodPrice}$</span>
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
                        {renderFavorite()}
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

export default withRouter(ProdPage);