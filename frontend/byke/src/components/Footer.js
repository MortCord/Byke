import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo-big.png";
import facebook from "../img/Facebook.png";
import instagram from "../img/Instagram.png";

const Footer = ()=>{

    const [prodType, setProdType] = useState([]);
    const [article, setArticle] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/prodtype/get")
        .then((res) => res.json())
        .then((result) =>{
            console.log(result);
            setProdType(result);
            
        });
        fetch("http://localhost:8080/article/get")
        .then((res) => res.json())
        .then((result) =>{
            setArticle(result);
        });
    },[]);

    return(
    <footer>
        <div className="d-flex justify-content-around">
            <div className="ft1 d-flex align-items-center"><img src={logo} alt="logo" /></div>
            <div className="ft2 d-flex justify-content-around">
                <div>
                    <Link to="/shop/1"><h4>Catalog</h4></Link>
                    <div className="d-flex flex-column">
                        {prodType.map((productType) =>(
                            <Link to={`/shop/${productType.id}`}>{productType.name}</Link>
                        ))}
                    </div>
                </div>
                <div>
                    <Link to="/blog/1"><h4>Blog</h4></Link>
                    <div className="d-flex flex-column">
                            {article.map((artic) =>(
                                <Link to={`/blog/${artic.id}`}>{artic.name}</Link>
                            ))}
                    </div>
                </div>
                <div>
                    <h4>User</h4>
                    <div className="d-flex flex-column">
                        <Link to="/">Log in</Link>
                        <Link to="/">Create an account</Link>
                        <Link to="/">Cart</Link>
                    </div>
                </div>
                <div>
                    <h4>Contacts</h4>
                    <div className="d-flex flex-column">
                        <span>+380 123456789</span>
                        <div className="d-flex justify-content-around">
                            <img src={facebook} alt="facebook" />
                            <img src={instagram} alt="instagram" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-3">
            <div className="d-flex flex-column align-items-center">
                <span>Subscribe for news</span>
                <input type="text" placeholder="Write your email..."/>
            </div>
        </div>
    </footer>
    );
};

export default Footer;