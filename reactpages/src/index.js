import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./index/ProductElement";
import {Root} from "./App"
import {getAllWineInfo, addItemtoBasketById, setCurrentProductDetailPage } from "./data/winedata"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>
);
