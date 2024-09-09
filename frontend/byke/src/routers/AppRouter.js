import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../components/MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LogIn from "../components/LogIn";
import Register from "../components/Register";
import Shop from "../components/Shop";

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={MainPage} exact={true} />
                <Route path="/login" component={LogIn} />
                <Route path="/register" component={Register} />
                <Route path="/shop" component={Shop} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;