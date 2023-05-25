import React from 'react';
import {NavLink} from "react-router-dom";
import {UserContext} from '../UserContext';

class Header extends React.Component {

    render() {
        return (
            <UserContext.Consumer>
                {({isLoggedIn, logout}) => (
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