import React from 'react';
import '../common.css';
import LeftSideBox from "./LeftFilter";
import ProductList from "./ProductList";
import {getAllWineInfo, getWineByName, Wine} from "../data/winedata";
import SearchBar from "./SearchBar";

interface MainBodyState {
    origin: string;
    type: string;
    products: Array<Wine>;
}

interface MainBodyProps {
    origin: string;
    type: string;
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
            alert("666666666666")
            console.log("666666666666")
            this.setState({
                origin: "",
                products: getAllWineInfo("", this.state.type)
            });
        } else {
            alert("555555555555")
            console.log("555555555555")
            this.setState({
                origin: newOrigin,
                products: getAllWineInfo(newOrigin, this.state.type)
            });
        }
    };

    handleTypeChange = (newType: string | null) => {
        if (newType === null) {
            alert("333333333333")
            console.log("333333333333")
            this.setState({
                type: "",
                products: getAllWineInfo(this.state.origin, "")
            });
        } else {
            alert("44444444444444")
            console.log("44444444444444")
            this.setState({
                type: newType,
                products: getAllWineInfo(this.state.origin, newType)
            });
        }
    };

    handleNameChange = (name: string | null) => {
        if (name === null || name === undefined || name.length === 0) {
            alert("11111111111")
            console.log("11111111111")
            // this.setState({
            //     type: "",
            //     origin: "",
            //     products: getAllWineInfo("", "")
            // });
        } else {
            alert("22222222222")
            console.log("22222222222")
            this.setState({
                products: getWineByName(name)
            });
        }
    };

// Continuing MainBody class
    render() {
        return (
            <div>
                <SearchBar onNameChange={this.handleNameChange}/>
                <br/>
                <br/>
                <div className="mainbody">
                    <LeftSideBox
                        onOriginChange={this.handleOriginChange}
                        onTypeChange={this.handleTypeChange}
                    />
                    <ProductList
                        products={this.state.products}
                    />
                </div>
            </div>
        );
    }
}

export default MainBody;
