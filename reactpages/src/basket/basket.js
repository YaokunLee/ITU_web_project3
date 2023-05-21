import React from 'react';
import '../common.css';
import BasketListContainer from "./BasketList";
import {getBasketList} from "../data/basketdata";

class BasketBody extends React.Component {
    render() {
        // 从状态中获取 basketsList
        let basketsList = getBasketList();

        return (
            <div>
                <br/><br/>
                <BasketListContainer items={basketsList} />
                <div className="btn-checkout-div">
                    <button className="btn-checkout">Proceed to checkout</button>
                </div>
            </div>
        );
    }
}

export default BasketBody;
