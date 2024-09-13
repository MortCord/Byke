import React from "react";
import { Link } from "react-router-dom";
import blogTest from "../img/blog-test.png";

const Blog = () =>{

    return(
        <div className="blog d-flex justify-content-between">
            <div className="blog-nav d-flex flex-column">
                <Link to="/blog">Cyclist safety</Link>
                <Link to="/blog">Children's bicycles</Link>
                <Link to="/blog">Famous cyclists</Link>
                <Link to="/blog">Interesting things about cycling</Link>
                <Link to="/blog">Bike setup</Link>
                <Link to="/blog">Reviews</Link>
                <Link to="/blog">Technologies</Link>
            </div>
            <div className="blog-info d-flex">
                <div className="d-flex flex-column justify-content-center">
                    <img src={blogTest} alt="blogImg" />
                </div>
                <div className="blog-info-text d-flex flex-column">
                    <h4>Cyclist safety</h4>
                    <p>A cyclist is a full-fledged participant in traffic and knowledge of traffic rules is an important component of his safety. To feel confident on the roads of the city and beyond, you need to follow the traffic rules for cyclists. According to the rules, you can drive on the roads when you are 14 years old.</p>
                    <Link to="/article">More➠</Link>
                </div>
            </div>
        </div>
    );
}

export default Blog;