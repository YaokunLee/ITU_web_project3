import React from 'react';

class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form className="search-bar">
                    <input
                        type="text"
                        className="search"
                        placeholder="Search for wine name, type or country"
                        name=""
                        value=""
                    />
                    <button id="search-btn">
                        <img id="search-icon" src={process.env.PUBLIC_URL + "/img/search_icon_baco.png"} alt="search-icon"/>
                    </button>
                </form>
            </div>
        );
    }
}

export default SearchBar;
