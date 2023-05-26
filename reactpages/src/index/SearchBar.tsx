//OLD CODE
// import React from "react";

// interface SearchBarProps {}

// class SearchBar extends React.Component<SearchBarProps, {}> {
//   render() {
//     return (
//       <div>
//         <form className="search-bar">
//           <input
//             type="text"
//             className="search"
//             placeholder="Search for wine name, type or country"
//             name="searchinput"
//             value=""
//           />
//           <button id="search-btn">
//             <img
//               id="search-icon"
//               src={process.env.PUBLIC_URL + "/img/search_icon_baco.png"}
//               alt="search-icon"
//             />
//           </button>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;

//NEW CODE

import React, { ChangeEvent, FormEvent } from "react";

interface SearchBarProps {}

interface SearchBarState {
  searchQuery: string;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchQuery: "",
    };
  }

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchQuery: event.target.value });
  };

  handleSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form className="search-bar" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="search"
            placeholder="Search for wine name, type or country"
            name="searchInput"
            value={this.state.searchQuery}
            onChange={this.handleInputChange}
          />
          <button id="search-btn" type="submit">
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
