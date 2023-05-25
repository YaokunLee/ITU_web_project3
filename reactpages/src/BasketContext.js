import React from 'react';
import basketList from "./basket/BasketList";
export const BasketContext = React.createContext({});

class BasketProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            basketItemsMap: new Map(),
            addBasketItem: this.addBasketItem,
            deleteBasketItem: this.deleteBasketItem,
            basketList: Array()
        };
    }

    setBasketList = (newBasketItemMap) => {
        console.log(this.state.basketList)
        let results = Array();
        let basketItemsMap = newBasketItemMap;
        console.log(newBasketItemMap)
        if (basketItemsMap instanceof Map) {
            for (const value of basketItemsMap.values()) {
                results.push(value);
                console.log(value)
            }
        }
        this.setState({
            basketList: results
        });
        console.log(results)
    }

    addBasketItem = (item) => {
        let basketItemsMap = this.state.basketItemsMap;

        if (basketItemsMap.has(item.name)) {
            let existingItem = basketItemsMap.get(item.name);
            existingItem.num += item.num;
            existingItem.totalPrice = "$" + (parseFloat(existingItem.totalPrice.slice(1)) + item.totalPrice).toFixed(2);
        } else {
            let mapItem = {
                num: item.num,
                price: "$" + item.price,
                name: item.name,
                totalPrice: "$" + item.totalPrice
            };
            basketItemsMap.set(item.name, mapItem);
        }
        this.setState({
            basketItemsMap: new Map(basketItemsMap)
        });
        this.setBasketList(new Map(basketItemsMap))
        alert("add item successfully!")
    };


    deleteBasketItem = (name) => {
        let newBasketItemMap = new Map(this.state.basketItemsMap);
        newBasketItemMap.delete(name)
        this.setState({
            basketItemsMap: newBasketItemMap
        });
        this.setBasketList(newBasketItemMap)
        alert("delete item successfully!")
    };

    render() {
        return (
            <BasketContext.Provider value={this.state}>
                {this.props.children}
            </BasketContext.Provider>
        );
    }
}

export default BasketProvider;
