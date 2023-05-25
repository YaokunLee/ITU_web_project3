import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import {UserContext, UserContextType} from '../context/UserContext';


class Header extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {({isLoggedIn, logout}: UserContextType) => (
                    <header id="header">
                        <div style={{display: 'flex'}}>
                            {isLoggedIn ? (
                                <div className="login" onClick={() => logout()}>
                                    Log out
                                </div>
                            ) : (
                                <div className="login">
                                    <NavLink exact activeClassName="active" to="/login">Login</NavLink>
                                </div>
                            )}
                            <div>
                                <NavLink exact activeClassName="active" to="/basket">
                                    <img
                                        src={process.env.PUBLIC_URL + "/img/shopping_cart_icon.png"}
                                        alt="shopping cart icon"
                                        className="icons"
                                        id="#icon-change"
                                    />
                                </NavLink>
                                &nbsp;&nbsp;
                            </div>
                        </div>
                    </header>
                )}
            </UserContext.Consumer>
        );
    }
}

export default Header;
