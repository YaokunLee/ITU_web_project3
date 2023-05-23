import React from 'react';
import BasketItem from './BasketItem';

class BasketListContainer extends React.Component {
    render() {
        const { items } = this.props;

        return (
            <div id="basket_list_container" className="container-fluid">
                <br />
                <div className="container-fluid text-center">
                    <h2 style={{ paddingTop: '10px', fontSize: '22px' }}>
                        Shopping List
                    </h2>
                </div>
                <br />
                <hr style={{ marginLeft: '80px', marginRight: '80px' }} />
                <div id="basket_list_items_container">
                    {items.map((item) => (
                        <BasketItem
                            key={item.name}
                            name={item.name}
                            num={item.num}
                            totalPrice={item.totalPrice}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default BasketListContainer
