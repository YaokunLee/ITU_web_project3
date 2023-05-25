import React from "react";
import {UserContext} from "../context/UserContext";
import {BasketContext} from "../context/BasketContext";
import {withRouter} from "react-router-dom";

class Product extends React.Component {
    handleAddToCart = (addBasketItem) => {
        const {name, price} = this.props;

        addBasketItem({
            name: name,
            price: price,
            num: 1,
            totalPrice: price
        });
    };

    handleClick = (setProductId, id) => {
        setProductId(id)
        this.props.history.push('/productdetail');
    };


    render() {
        const {id, imgSrc, name, type, country, price} = this.props;

        return (
            <UserContext.Consumer>
                {({setProductId}) => (
                    <BasketContext.Consumer>
                        {({addBasketItem}) => (
                            <div className="prodbox">
                                <div onClick={() => this.handleClick(setProductId, id)}>
                                    <div><img src={process.env.PUBLIC_URL + imgSrc} alt="Red wine bottle"/></div>
                                    <div className="prodbox-name">{name}</div>
                                    <div className="prodbox-char">{type}</div>
                                    <div>{country}</div>
                                    <div className="prodbox-price">{"$" + price}</div>
                                </div>
                                <br/>
                                <div style={{textAlign: 'center'}}>
                                    <input
                                        className="btn-add-to-cart"
                                        type="button"
                                        onClick={() => this.handleAddToCart(addBasketItem)}
                                        value="ADD TO CART"
                                    />
                                </div>
                            </div>
                        )}
                    </BasketContext.Consumer>
                )}
            </UserContext.Consumer>
        );
    }
}

export default withRouter(Product);