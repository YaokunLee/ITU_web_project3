import React, { Component } from 'react';
import { UserContext, UserContextType } from '../context/UserContext';
import ProductDetail from './ProductDetail';

class ProductBody extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {(context: UserContextType) => (
                    <ProductDetail product_id={context.product_id} />
                )}
            </UserContext.Consumer>
        );
    }
}

export default ProductBody;
