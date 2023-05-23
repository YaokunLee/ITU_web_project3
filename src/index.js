import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from "./index/ProductElement";
import {Root} from "./App"
import {getAllWineInfo, addItemtoBasketById, setCurrentProductDetailPage } from "./data/winedata"
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";
import PageWrapper from "./PageWrapper";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <PageWrapper />
    </Router>
);
