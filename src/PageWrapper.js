import React from 'react';
import Header from "./index/Header";
import Banner from "./index/Banner";
import Footer from "./index/Footer";
import {Route, Switch} from "react-router-dom";
import IndexBody from "./index/IndexBody";
import LoginBody from "./login/loginBody";
import BasketBody from "./basket/basket";
import ProductPageBody from "./productdetail/ProductDetail";

class PageWrapper extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Banner/>
                <Switch>
                    <Route path="/index" component={IndexBody}> <IndexBody/></Route>
                    <Route path="/login" component={LoginBody}/>
                    <Route path="/basket" component={BasketBody}/>
                    <Route path="/productdetail/:id/" component={ProductPageBody}/> 
                    <Route component={IndexBody}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default PageWrapper;
