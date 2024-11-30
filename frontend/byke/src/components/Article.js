import React, { useState, useEffect } from "react";
import testAr from "../img/testArticl.png"
import { withRouter } from "react-router-dom";

const Article = ({match}) =>{

    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const {id} = match.params;
    const [photo, setPhoto] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/article/get")
          .then((res) => res.json())
          .then((result) => {
            const article = result.find(article => article.id === parseInt(id));
            if (article){
                setName(article.name);
                setDesc(article.desc);
                setPhoto(article.photo);
            }
          });
      }, [id]);

    
    return(
        <div className="article mt-5">
            <h2>{name}</h2>
            <div className="mt-3 d-flex justify-content-around">
                <div>
                    <img src={`http://localhost:8080/prod/images/${photo}`} alt="Article" />
                </div>
                <div className="article-text">
                    <p>{desc}</p>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Article);