import React from "react";
import '../common.css';
import addOneProductInfo from "../data/winedata";
import ProductDetailPage from "./ProductPage";

class ProductPageBody extends React.Component {
    componentDidMount() {
        addOneProductInfo();
    }
    render() {
        return (
            <div>
                 <ProductDetailPage/>
            </div>
        );
    }
}

export default ProductPageBody;
