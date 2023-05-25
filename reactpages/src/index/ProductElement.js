import React from 'react';
import '../common.css'; // 导入样式文件
import {setCurrentProductDetailPage, addItemtoBasketById} from "../data/winedata";
import {BasketContext} from "../BasketContext";

class ProductList extends React.Component {
    render() {
        const {products} = this.props;

        return (
            <div>
                <div><h3 className="inside_text">Discover our newest premium wines</h3></div>
                <div className="productgrid">
                    {products.map(product => (
                        <Product
                            key={product.id}
                            id={product.id}
                            imgSrc={product.imgSrc}
                            name={product.name}
                            type={product.type}
                            from={product.from}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

class Product extends React.Component {

    render() {
        const {imgSrc, name, type, from, price} = this.props;
        return (
            <BasketContext.Consumer>
                {({addBasketItem}) => (
                    <div className="prodbox">
                        <a href="product_detail.html" onClick={() => setCurrentProductDetailPage(this.props.id)}>
                            <div><img src={process.env.PUBLIC_URL + imgSrc} alt="Red wine bottle"/></div>
                            <div className="prodbox-name">{name}</div>
                            <div className="prodbox-char">
                                <span className="prodbox-type">{type}</span>
                                <span>{from}</span>
                            </div>
                            <div className="prodbox-price">{price}</div>
                        </a>
                        <br/>
                        <div style={{textAlign: 'center'}}>
                            <input
                                className="btn-add-to-cart"
                                type="button"
                                onClick={() => addBasketItem({
                                    name:name,
                                    price:price,
                                    num:1,
                                    totalPrice:price
                                })}
                                value="ADD TO CART"
                            />
                        </div>
                    </div>
                )}
            </BasketContext.Consumer>
        );
    }
}

export default ProductList;

