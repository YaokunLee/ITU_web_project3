import React, { ReactNode } from 'react';

// Define the types for basket item and basket context
interface BasketItem {
    num: number;
    price: string;
    name: string;
    totalPrice: string;
}

export interface BasketContextType {
    basketItemsMap: Map<string, BasketItem>;
    addBasketItem: (item: BasketItem) => void;
    deleteBasketItem: (name: string) => void;
    basketList: BasketItem[];
}

const defaultBasketContext: BasketContextType = {
    basketItemsMap: new Map(),
    addBasketItem: () => {},
    deleteBasketItem: () => {},
    basketList: [],
};

export const BasketContext = React.createContext<BasketContextType>(defaultBasketContext);
// Set initial default context

interface BasketProviderProps {
    children: ReactNode;
}

class BasketProvider extends React.Component<BasketProviderProps, BasketContextType> {
    constructor(props: BasketProviderProps) {
        super(props);
        this.state = {
            basketItemsMap: new Map(),
            addBasketItem: this.addBasketItem,
            deleteBasketItem: this.deleteBasketItem,
            basketList: []
        };
    }

    setBasketList = (newBasketItemMap: Map<string, BasketItem>) => {
        let results: BasketItem[] = [];
        let basketItemsMap = newBasketItemMap;
        if (basketItemsMap instanceof Map) {
            for (const value of basketItemsMap.values()) {
                results.push(value);
            }
        }
        this.setState({
            basketList: results
        });
    }

    addBasketItem = (item: BasketItem) => {
        let basketItemsMap = this.state.basketItemsMap;

        if (basketItemsMap.has(item.name)) {
            let existingItem = basketItemsMap.get(item.name);
            if (existingItem) {
                existingItem.num += item.num;
                existingItem.totalPrice = "$" + (parseFloat(existingItem.totalPrice.slice(1)) + parseFloat(item.totalPrice.slice(1))).toFixed(2);
            }
        } else {
            let mapItem = {
                num: item.num,
                price: item.price,
                name: item.name,
                totalPrice: item.totalPrice
            };
            basketItemsMap.set(item.name, mapItem);
        }
        this.setState({
            basketItemsMap: new Map(basketItemsMap)
        });
        this.setBasketList(new Map(basketItemsMap))
        alert("add item successfully!")
    };

    deleteBasketItem = (name: string) => {
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
