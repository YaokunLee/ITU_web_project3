import React from 'react';
import {UserContext} from '../context/UserContext';
import { withRouter } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onUserSubmitLogin = (event, login) => {
        event.preventDefault();

        const { username, password } = this.state;

        if (!/^[A-Za-z0-9]+$/.test(username)) {
            alert("Username should be numbers and letters only!");
            return;
        }

        if (password.length <= 5) {
            alert("Your password must be more than 5 characters!");
        }

        login(username, password);
        this.props.history.push('/index');
    };

    handleInputChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { username, password } = this.state;

        return (
            <UserContext.Consumer>
                {({login}) => (
                    <div className="login_form">
                        <br/>
                        <br/>
                        <div className="container-fluid">
                            <form className="loginframe" onSubmit={(event) =>
                                this.onUserSubmitLogin(event, login)}>
                                <label className="account">Name:</label>
                                <input
                                    className="form-input"
                                    id="account"
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={this.handleInputChange}
                                /><br/><p></p>
                                <label className="password">Password:</label>
                                <input
                                    className="form-input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleInputChange}
                                /><br/><br/>
                                <input className="btn-submit" type="submit" value="SUBMIT"/>
                            </form>
                        </div>
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}

export default withRouter(LoginForm);
