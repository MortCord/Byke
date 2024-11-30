import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import blogTest from "../img/blog-test.png";

const Blog = ({match}) =>{

    const [articles, setArticles] = useState([]);
    const [articleName, setArticleName] = useState("");
    const [lildesc, setLildesc] = useState("");
    const {id} = match.params;
    const [articleLilPhoto, setArticleLilPhoto] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/article/get")
          .then((res) => res.json())
          .then((result) => {
            setArticles(result);
            const article = result.find(article => article.id === parseInt(id));
            if (article){
                setArticleName(article.name);
                setLildesc(article.lildesc);
                setArticleLilPhoto(article.lilphoto);
            }
          });
      }, [id]);

    return(
        <div className="blog d-flex justify-content-between">
            <div className="blog-nav d-flex flex-column">
            {articles.map((art) =>(
                <Link to={`/blog/${art.id}`}>{art.name}</Link>
            ))}
            </div>
            <div className="blog-info d-flex">
                <div className="d-flex flex-column justify-content-center">
                    <img src={`http://localhost:8080/article/images/${articleLilPhoto}`} alt="blogImg" />
                </div>
                <div className="blog-info-text d-flex flex-column">
                    <h4>{articleName}</h4>
                    <p>{lildesc}</p>
                    <Link to={`/article/${id}`}>More➠</Link>
                </div>
            </div>
        </div>
    );
}

export default withRouter(Blog);