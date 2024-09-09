import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo-big.png";
import facebook from "../img/Facebook.png";
import instagram from "../img/Instagram.png";

const Footer = ()=>(
    <footer>
        <div className="d-flex justify-content-around">
            <div className="ft1 d-flex align-items-center"><img src={logo} alt="logo" /></div>
            <div className="ft2 d-flex justify-content-around">
                <div>
                    <Link to="/shop"><h4>Catalog</h4></Link>
                    <div className="d-flex flex-column">
                        <Link to="/">Forks</Link>
                        <Link to="/">Connecting rod star</Link>
                        <Link to="/">Bicycle cassete</Link>
                        <Link to="/">Pedals</Link>
                        <Link to="/">Switches</Link>
                        <Link to="/">Handlebars</Link>
                        <Link to="/">Saddles</Link>
                        <Link to="/">Helmets</Link>
                        <Link to="/">Glasses</Link>
                    </div>
                </div>
                <div>
                    <h4>Blog</h4>
                    <div className="d-flex flex-column">
                        <Link to="/">Cyclist safety</Link>
                        <Link to="/">Children's bicycles</Link>
                        <Link to="/">Famous cyclists</Link>
                        <Link to="/">Interesting about cycling</Link>
                        <Link to="/">Bike setup</Link>
                        <Link to="/">Reviews</Link>
                        <Link to="/">Technologies</Link>
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

export default Footer;