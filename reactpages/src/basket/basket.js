import React from 'react';
import '../common.css';
import BasketListContainer from "./BasketList";

class BasketBody extends React.Component {
    render() {
        return (
            <div>
                <br/><br/>
                <BasketListContainer />
                <div className="btn-checkout-div">
                    <button className="btn-checkout">Proceed to checkout</button>
                </div>
            </div>
        );
    }
}

export default BasketBody;
