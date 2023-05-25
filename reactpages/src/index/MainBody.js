import React from 'react';
import '../common.css';
import LeftSideBox from "./LeftFilter";
import ProductList from "./ProductElement";
import {getAllWineInfo} from "../data/winedata";

class MainBody extends React.Component {

    render() {
        return (
            <div className="mainbody">
                <LeftSideBox/>
                <ProductList
                    products={getAllWineInfo()}
                />
            </div>
        );
    }
}

export default MainBody;
