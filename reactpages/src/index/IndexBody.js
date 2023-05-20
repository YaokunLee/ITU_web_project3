import React from 'react';
import Header from "./Header";
import SearchBar from "./SearchBar";
import Banner from "./Banner";
import MainBody from "./MainBody";
import Footer from "./Footer";
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
                <Header/>
                <Banner/>

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
                <Footer/>
            </div>
        );
    }
}

export default IndexBody;
