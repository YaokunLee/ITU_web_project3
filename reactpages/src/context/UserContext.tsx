import React, { Component } from 'react';

// Define the type for the context state
export type UserContextType = {
    isLoggedIn: boolean;
    welcomeText: string;
    userName: string;
    password: string;
    logout: () => void;
    login: (un: string, pw: string) => void;
    product_id: number;
    setProductId: (i: number) => void;
};

// Initialize context with a default value
const defaultContextValue: UserContextType = {
    isLoggedIn: false,
    welcomeText: '',
    userName: '',
    password: '',
    logout: () => {},
    login: (un: string, pw: string) => {},
    product_id: 0,
    setProductId: (i: number) => {},
};

type UserProviderProps = {
    children: React.ReactNode;
}


export const UserContext = React.createContext<UserContextType>(defaultContextValue);

class UserProvider extends Component<UserProviderProps, UserContextType> {
    constructor(props: UserProviderProps) {
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

    setProductId = (i: number) => {
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

    login = (un: string, pw: string) => {
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
