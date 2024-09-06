import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from "../components/MainPage";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AppRouter = () =>(
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={MainPage} exact={true} />
            </Switch>
            <Footer />
        </div>
    </BrowserRouter>
);

export default AppRouter;