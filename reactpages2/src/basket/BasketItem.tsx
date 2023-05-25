import React, { Component } from 'react';
import { BasketContext, BasketContextType } from "../context/BasketContext";

interface BasketItemProps {
    name: string;
    num: number;
    totalPrice: string;
}

class BasketItem extends Component<BasketItemProps> {
    render() {
        const { name, num, totalPrice } = this.props;
        return (
            <BasketContext.Consumer>
                {(context: BasketContextType) => (
                    <div>
                        <div className="container text-align:center">
                            <div className="row">
                                <div className="col-md-1"></div>
                                <div className="col-md-3" id="basket_wine_name">
                                    <h4>{name}</h4>
                                </div>
                                <div className="col-md-1" id="basket_wine_num">
                                    <h4>{num}</h4>
                                </div>
                                <div className="col-md-2" id="basket_wine_total_price">
                                    <h4>{totalPrice}</h4>
                                </div>
                                <img
                                    className="col-md-2"
                                    id="basket_wine_remove"
                                    src="img/icon_trash_black.png"
                                    onClick={() => context.deleteBasketItem(name)}
                                />
                                <div className="col-md-1"></div>
                                <hr style={{marginTop: "10px"}}/>
                            </div>
                        </div>
                    </div>
                )}
            </BasketContext.Consumer>
        );
    }
}

export default BasketItem;
