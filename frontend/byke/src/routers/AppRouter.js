import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../components/MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Shop from "../components/Shop";
import Blog from "../components/Blog";
import ProdPage from "../components/ProdPage";
import Article from "../components/Article";

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={MainPage} exact={true} />
                <Route path="/login" component={LogIn} />
                <Route path="/register" component={Register} />
                <Route path="/shop/:id" component={Shop} />
                <Route path="/blog/:id" component={Blog} />
                <Route path="/prod/:id" component={ProdPage} />
                <Route path="/article/:id" component={Article} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;