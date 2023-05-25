import React, { Component, FormEvent, ChangeEvent } from 'react';
import { UserContext, UserContextType } from '../context/UserContext';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface LoginFormState {
    username: string;
    password: string;
}

interface LoginFormProps extends RouteComponentProps<any> {}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
    constructor(props: LoginFormProps) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    onUserSubmitLogin = (event: FormEvent<HTMLFormElement>, login: UserContextType['login']) => {
        event.preventDefault();

        const { username, password } = this.state;

        if (!/^[A-Za-z0-9]+$/.test(username)) {
            alert('Username should be numbers and letters only!');
            return;
        }

        if (password.length <= 5) {
            alert('Your password must be more than 5 characters!');
            return;
        }

        login(username, password);

        const { history } = this.props;
        history.push('/index');
    };

    handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value
        } as Pick<LoginFormState, keyof LoginFormState>);
    };

    render() {
        const { username, password } = this.state;

        return (
            <UserContext.Consumer>
                {({ login }) => (
                    <div className="login_form">
                        <br />
                        <br />
                        <div className="container-fluid">
                            <form className="loginframe" onSubmit={(event) => this.onUserSubmitLogin(event, login)}>
                                <label className="account">Name:</label>
                                <input
                                    className="form-input"
                                    id="account"
                                    type="text"
                                    name="username"
                                    value={username}
                                    onChange={this.handleInputChange}
                                /><br /><p></p>
                                <label className="password">Password:</label>
                                <input
                                    className="form-input"
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleInputChange}
                                /><br /><br />
                                <input className="btn-submit" type="submit" value="SUBMIT" />
                            </form>
                        </div>
                    </div>
                )}
            </UserContext.Consumer>
        );
    }
}

export default withRouter(LoginForm);
