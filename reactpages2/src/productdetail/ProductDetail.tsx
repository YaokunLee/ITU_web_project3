import React, { Component } from "react";
import '../common.css'; // 导入样式文件
import { getWineInfo,Wine } from '../data/winedata';
import { BasketContext, BasketContextType } from "../context/BasketContext";
interface ProductDetailProps {
    product_id: number;
}

interface ProductDetailState {
    num: number;
}

class ProductDetail extends Component<ProductDetailProps, ProductDetailState> {
    state: ProductDetailState = {
        num: 1
    };

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            num: parseInt(event.target.value, 10)
        });
    };

    render() {
        const { product_id } = this.props;
        let product: Wine = getWineInfo(product_id);

        const { name, imgSrc, details, price, country, type, vintage, brand } = product;

        return (
            <BasketContext.Consumer>
                {(context: BasketContextType) => (
                    <div className="container-fluid">
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-3">
                                    <img id="wine_image" src={imgSrc} alt="img" className="img-fluid" width="130" height="350" />
                                </div>
                                <div className="col-md-6">
                                    <h1 className="mb-4" id="wine_name">{name}</h1>
                                    <h2 className="mb-4" id="wine_price">{"$" + price}</h2>
                                    <label>Number:</label>
                                    <input
                                        className="number-form-input"
                                        id="wine_num"
                                        type="number"
                                        value={this.state.num}
                                        onChange={this.handleInputChange}
                                    />
                                    <br /><br />
                                    <button
                                        className="btn-add-to-cart-wide btn btn-primary mb-4"
                                        onClick={() => context.addBasketItem({
                                            name: name,
                                            price: "$" + price,
                                            num: this.state.num,
                                            totalPrice: "" + (price * this.state.num)
                                        })}
                                    >
                                        ADD TO CART
                                    </button>
                                    <br /><br />
                                    <ul className="list-group mb-4">
                                        <li className="list-group-item">Type: <span id="wine_type">{type}</span></li>
                                        <li className="list-group-item">Country: <span id="wine_country">{country}</span></li>
                                        <li className="list-group-item">Year: <span id="wine_year">{vintage}</span></li>
                                        <li className="list-group-item">Brand: <span id="wine_brand">{brand}</span></li>
                                    </ul>
                                    <hr />
                                    <h3 className="mb-4">Product Detail</h3>
                                    <p id="wine_details">{details}</p>
                                    <div className="rating">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </BasketContext.Consumer>
        );
    }
}

export default ProductDetail;
