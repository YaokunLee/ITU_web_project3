import React from "react";
import '../common.css'; // 导入样式文件
import {
  addItemtoBasketById 
} from "../data/winedata";

class ProductDetailPage extends React.Component {
    render() {
        
        const {product} = this.props;
        return (
            <div>
                <div className="productgrid">
                    {product.map(product => (
                        <ProductsPage
                            key={product.id}
                            id={product.id}
                            imgSrc={product.imgSrc}
                            name={product.name}
                            type={product.type}
                            from={product.from}
                            price={product.price}
                            vintage={product.vintage}
                            brand={product.brand}
                        />
                    ))}
                </div>
            </div>
        );
    }

}
class ProductsPage extends React.Component {
    render() {
      const { imgSrc, name, type, from, price, vintage, brand } = this.props;
      return (
        <div className="">
              <div>
                  <img src={process.env.PUBLIC_URL + imgSrc} alt={name} />
              </div>
              <div className="prodbox-name">{name}</div>
             
              <div className="prodbox-price">{price}</div>
              {/*missing number of wines to add to cart*/}
               {/*add to cart button*/}
              <div style={{ textAlign: "center" }}>
                  <input
                      className="btn-add-to-cart"
                      type="button"
                      onClick={() => addItemtoBasketById(this.props.id)}
                      value="ADD TO CART"
                  />
              </div>
              <div className="prodbox-char">
                  <span className="prodbox-type">{type}</span>
                  <span>{from}</span>
                  <span>{vintage}</span>
                  <span>{brand}</span>
              </div>
        </div>
      );
    }
}

export default ProductDetailPage;
