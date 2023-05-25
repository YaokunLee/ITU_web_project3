import React from 'react';
import '../common.css';
import LeftSideBox from "./LeftFilter";
import ProductList from "./ProductList";
import {getAllWineInfo, Wine} from "../data/winedata";

interface MainBodyState {
    origin:string;
    type:string;
    products:Array<Wine>;
}

interface MainBodyProps {
    origin:string;
    type:string;
}

class MainBody extends React.Component<MainBodyProps, MainBodyState> {
    constructor(props: MainBodyProps) {
        super(props);
        const {origin, type} = props;
        this.state = {
            origin: origin,
            type: type,
            products: getAllWineInfo(origin, type),
        };
    }

    handleOriginChange = (newOrigin: string | null) => {
        if (newOrigin === null) {
            this.setState({
                origin: "",
                products: getAllWineInfo("", this.state.type)
            });
        } else {
            this.setState({
                origin: newOrigin,
                products: getAllWineInfo(newOrigin, this.state.type)
            });
        }
    };

    handleTypeChange = (newType: string | null) => {
        if (newType === null) {
            this.setState({
                type: "",
                products: getAllWineInfo(this.state.origin, "")
            });
        } else {
            this.setState({
                type: newType,
                products: getAllWineInfo(this.state.origin, newType)
            });
        }
    };

// Continuing MainBody class
    render() {
        return (
            <div className="mainbody">
                <LeftSideBox
                    onOriginChange={this.handleOriginChange}
                    onTypeChange={this.handleTypeChange}
                />
                <ProductList
                    products={ this.state.products }
                />
            </div>
        );
    }
}

export default MainBody;
