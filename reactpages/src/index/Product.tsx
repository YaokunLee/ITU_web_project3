import React from "react";
import { UserContext, UserContextType } from "../context/UserContext";
import { BasketContext, BasketContextType } from "../context/BasketContext";
import { withRouter, RouteComponentProps } from "react-router-dom";
import { ProductProps } from './ProductList';

type AllProps = ProductProps & RouteComponentProps;

const Product = (props: AllProps) => {
    const { id, imgSrc, name, type, country, price, history } = props;

    const handleAddToCart = (addBasketItem: BasketContextType["addBasketItem"]) => {
        addBasketItem({
            name: name,
            price: "$" + price,
            num: 1,
            totalPrice: "$" + price,
        });
    };

    const handleClick = (setProductId: UserContextType["setProductId"], id: number) => {
        setProductId(id);
        history.push("/productdetail");
    };

    return (
        <UserContext.Consumer>
            {({ setProductId }) => (
                <BasketContext.Consumer>
                    {({ addBasketItem }: BasketContextType) => (
                        <div className="prodbox">
                            <div onClick={() => handleClick(setProductId, id)}>
                                <div>
                                    <img src={process.env.PUBLIC_URL + imgSrc} alt="Red wine bottle" />
                                </div>
                                <div className="prodbox-name">{name}</div>
                                <div className="prodbox-char">{type}</div>
                                <div>{country}</div>
                                <div className="prodbox-price">{"$" + price}</div>
                            </div>
                            <br />
                            <div style={{ textAlign: "center" }}>
                                <input
                                    className="btn-add-to-cart"
                                    type="button"
                                    onClick={() => handleAddToCart(addBasketItem)}
                                    value="ADD TO CART"
                                />
                            </div>
                        </div>
                    )}
                </BasketContext.Consumer>
            )}
        </UserContext.Consumer>
    );
};

export default withRouter(Product);
