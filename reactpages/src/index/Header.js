import React from 'react';
import {NavLink} from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div style={{display: 'flex'}}>
                    <div className="login">
                        <NavLink exact activeClassName="active" to="/login">Login</NavLink>
                    </div>
                    <div>
                        <a href="basket.html">
                            <img
                                src={process.env.PUBLIC_URL + "/img/shopping_cart_icon.png"}
                                alt="shopping cart icon"
                                className="icons"
                                id="#icon-change"
                            />
                        </a>
                        &nbsp;&nbsp;
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
