import React from "react";
import '../common.css';
import {addProductDetailInfo} from "../data/winedata";
import ProductDetail from "./ProductPage";
import {UserContext} from "../context/UserContext";

class ProductBody extends React.Component {

    render() {
        return (
            <UserContext.Consumer>
                {({product_id})=>(
                    <ProductDetail product_id={product_id}/>
                )}
            </UserContext.Consumer>
        );
    }
}

export default ProductBody;
