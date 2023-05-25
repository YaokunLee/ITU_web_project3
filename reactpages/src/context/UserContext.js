import React from 'react';

export const UserContext = React.createContext({});

class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            welcomeText: 'your minimalistic wine shop',
            userName: "",
            password: "",
            logout: this.logout,
            login: this.login,
            product_id: 0,
            setProductId: this.setProductId,
        };
    }

    setProductId = (i) => {
        this.setState({
            product_id: i
        });
    };

    logout = () => {
        this.setState({
            userName: "",
            password: "",
            welcomeText: 'your minimalistic wine shop',
            isLoggedIn: false
        });
    };

    login = (un, pw) => {
        this.setState({
            userName: un,
            password: pw,
            isLoggedIn: true,
            welcomeText: un + ", welcome to BACO online wine shop!",
        });
    };

    render() {
        return (
            <UserContext.Provider value={this.state}>
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;
