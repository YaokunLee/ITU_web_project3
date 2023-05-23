import React from 'react';
import SearchBar from "./SearchBar";
import MainBody from "./MainBody";
import {addUserNameToWelcome} from "../data/login";
import {addAllHomepageProductInfo} from "../data/winedata";

class IndexBody extends React.Component {

    componentDidMount() {
        addUserNameToWelcome();
        addAllHomepageProductInfo();
    }

    render() {
        return (
            <div>
                <div id="welcome_words_area">
                    <h3 id="welcome_name_area">your minimalistic wine shop</h3>
                </div>

                <div>
                    <img id="banner" src="img/wine_day_extra_narrow.jpg" alt="Banner Event"/>
                </div>

                <SearchBar/>
                <br/>
                <br/>
                <MainBody/>
                <br/>
            </div>
        );
    }
}

export default IndexBody;
