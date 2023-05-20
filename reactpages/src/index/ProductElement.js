import React from 'react';
import '../common.css'; // 导入样式文件

class ProductList extends React.Component {
    render() {
        const { products, setCurrentProductDetailPage, addItemtoBasketById } = this.props;

        return (
            <div className="mainbody">
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
                            setCurrentProductDetailPage={setCurrentProductDetailPage}
                            addItemtoBasketById={addItemtoBasketById}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

// usage:
// /<ProductList
// products={productsArray}
// setCurrentProductDetailPage={setCurrentProductDetailPageFunction}
// addItemtoBasketById={addItemtoBasketByIdFunction}
// />

class Product extends React.Component {
    handleDetailClick = () => {
        this.props.setCurrentProductDetailPage(this.props.id);
    };

    handleAddToCartClick = () => {
        this.props.addItemtoBasketById(this.props.id);
    };

    render() {
        const { imgSrc, name, type, from, price } = this.props;
        return (
            <div className="prodbox">
                <a href="product_detail.html" onClick={this.handleDetailClick}>
                    <div><img src={process.env.PUBLIC_URL + imgSrc} alt="Red wine bottle" /></div>
                    <div className="prodbox-name">{name}</div>
                    <div className="prodbox-char">
                        <span className="prodbox-type">{type}</span>
                        <span>{from}</span>
                    </div>
                    <div className="prodbox-price">{price}</div>
                </a>
                <br />
                <div style={{ textAlign: 'center' }}>
                    <input
                        className="btn-add-to-cart"
                        type="button"
                        onClick={this.handleAddToCartClick}
                        value="ADD TO CART"
                    />
                </div>
            </div>
        );
    }
}

export default ProductList;

