import React from 'react';
import '../common.css';
import Product from "./Product"; // 导入样式文件

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
                            country={product.country}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default ProductList;

