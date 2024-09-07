import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo-log.png"

const LogIn = () =>{

    return(
        <div className="logIn-main d-flex justify-content-center">
            <div className="logIn d-flex justify-content-around">
                    <form className="d-flex flex-column">
                        <div className="log-sect d-flex flex-column  ">
                            <input type="text" placeholder="Your e-mail..." required />
                            <input type="text" placeholder="Your password..." required />
                            <button>Log in</button>
                        </div>
                        <span>Don’t have an account? You can <Link to="/register">create</Link> a new one</span>
                    </form>
                    <div className="img-log d-flex flex-column justify-content-center">
                    <img src={logo} alt="logo" />
                    </div>
            </div>
        </div>
    );
}

export default LogIn;