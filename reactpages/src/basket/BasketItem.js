import React from 'react';

class BasketItem extends React.Component {
    removeBasketItem = (itemName) => {
        // todo
        console.log(`Removed item: ${itemName}`);
    };

    render() {
        const { name, num, totalPrice } = this.props;

        return (
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
                            onClick={() => this.removeBasketItem(name)}
                        />
                        <div className="col-md-1"> </div>
                        <hr style={{marginTop: "10px"}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default BasketItem;
