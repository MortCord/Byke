import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo-log.png"

const Register = () =>{

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");

    const handleClick = (e) =>{
        e.preventDefault();
        const formData = new FormData();
        formData.append("email", email);
        formData.append("name", name);
        formData.append("password", password);
        formData.append("isBanned", 0);

        fetch("http://localhost:8080/users/add", {
            method: "POST",
            body: formData
        })
        .then(response =>{
            if(response.ok){
                console.log("User has been registered");
            }else{
                console.error("error");
            }
            setEmail("");
            setName("");
            setPassword("");
            setRePassword("");
        })
        .catch(error =>{
            console.error("error: ", error);
        })
    }

    return(
        <div className="reg-main d-flex justify-content-center">
            <div className="reg d-flex justify-content-around">
                    <form className="d-flex flex-column">
                        <div className="reg-sect d-flex flex-column  ">
                            <input type="email" placeholder="Your e-mail..." required value={email} onChange={(e) => setEmail(e.target.value)} />
                            <input type="text" placeholder="Your name..." required value={name} onChange={(e) => setName(e.target.value)} />
                            <input type="password" placeholder="Your password..." required value={password} onChange={(e) => setPassword(e.target.value)} />
                            <input type="password" placeholder="Reapeat password..." required value={rePassword} onChange={(e) => setRePassword(e.target.value)} />
                            <button onClick={handleClick}>Register</button>
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