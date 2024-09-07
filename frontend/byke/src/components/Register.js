import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo-log.png"

const Register = () =>{

    return(
        <div className="reg-main d-flex justify-content-center">
            <div className="reg d-flex justify-content-around">
                    <form className="d-flex flex-column">
                        <div className="reg-sect d-flex flex-column  ">
                            <input type="text" placeholder="Your e-mail..." required />
                            <input type="text" placeholder="Your name..." required />
                            <input type="text" placeholder="Your password..." required />
                            <input type="text" placeholder="Reapeat password..." required />
                            <button>Register</button>
                        </div>
                        <span>Already have an account? Then you can <Link to="/login">log in</Link></span>
                    </form>
                    <div className="img-reg d-flex flex-column justify-content-center">
                    <img src={logo} alt="logo" />
                    </div>
            </div>
        </div>
    );
}

export default Register;