import React from "react";
import '../common.css';
import addProductDetailInfo from "../data/winedata";
import ProductDetailPage from "./ProductPage";

class ProductPageBody extends React.Component {
    componentDidMount() {
        //addOneProductInfo();
        addProductDetailInfo();

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
