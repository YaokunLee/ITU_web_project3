import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import PageWrapper from "./PageWrapper";

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Router>
            <PageWrapper />
        </Router>
    );
} else {
    console.error("Cannot find element with id 'root'");
}
