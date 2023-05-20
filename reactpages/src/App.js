import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./index/ProductElement";
import {getAllWineInfo, addItemtoBasketById, setCurrentProductDetailPage } from "./data/winedata"

export class Root extends React.Component{
    render() {
        return (
            <ProductList
                products={getAllWineInfo()}
                setCurrentProductDetailPage={setCurrentProductDetailPage}
                addItemtoBasketById={addItemtoBasketById}
            />
        );
    }
}
