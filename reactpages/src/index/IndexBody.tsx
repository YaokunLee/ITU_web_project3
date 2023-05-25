import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import MainBody from "./MainBody";
import { UserContext } from '../context/UserContext';

class IndexBody extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {({ welcomeText }) => (
                    <div>
                        <div id="welcome_words_area">
                            <h3 id="welcome_name_area">{welcomeText}</h3>
                        </div>

                        <div>
                            <img id="banner" src="img/wine_day_extra_narrow.jpg" alt="Banner Event" />
                        </div>

                        <SearchBar />
                        <br />
                        <br />
                        <MainBody />
                        <br />
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}

export default IndexBody;
