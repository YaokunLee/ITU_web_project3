import React, { Component } from 'react';
import '../common.css';
import BasketListContainer from "./BasketList";
import {UserContext} from "../context/UserContext";

class BasketBody extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {({ welcomeText }) => (
                    <div>
                        <div id="welcome_words_area">
                            <h3 id="welcome_name_area">{welcomeText}</h3>
                        </div>
                        <br/><br/>
                        <BasketListContainer />
                        <div className="btn-checkout-div">
                            <button className="btn-checkout">Proceed to checkout</button>
                        </div>
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}

export default BasketBody;
