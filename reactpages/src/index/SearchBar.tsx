import React from "react";

interface SearchBarProps {
  onNameChange: (value: string | null) => void;
}

interface SearchBarState {
  searchValue: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchValue: ""
    };
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      searchValue: event.target.value
    });
  };


  render() {
    const { onNameChange } = this.props;

    return (
        <div>
          <form className="search-bar">
            <input
                type="text"
                className="search"
                placeholder="Search for wine name"
                name="searchinput"
                value={this.state.searchValue}
                onChange={this.handleInputChange}
            />
            <button id="search-btn" onClick={() => {onNameChange(this.state.searchValue || null)}}>
              <img
                  id="search-icon"
                  src={process.env.PUBLIC_URL + "/img/search_icon_baco.png"}
                  alt="search-icon"
              />
            </button>
          </form>
        </div>
    );
  }

}

export default SearchBar;
