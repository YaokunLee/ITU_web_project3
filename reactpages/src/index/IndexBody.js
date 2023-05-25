import React from 'react';
import SearchBar from "./SearchBar";
import MainBody from "./MainBody";
import {addAllHomepageProductInfo} from "../data/winedata";
import {UserContext} from '../UserContext';

class IndexBody extends React.Component {

    componentDidMount() {
        addAllHomepageProductInfo();
    }

    render() {
        return (
            <UserContext.Consumer>
                {({welcomeText}) => (
                    <div>
                        <div id="welcome_words_area">
                            <h3 id="welcome_name_area">{welcomeText}</h3>
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
                )}
            </UserContext.Consumer>
        );
    }
}

export default IndexBody;
