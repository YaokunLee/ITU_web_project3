import React, { Component, FormEvent, ChangeEvent } from "react";
import { UserContext, UserContextType } from "../context/UserContext";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface LoginFormState {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
}

interface LoginFormProps extends RouteComponentProps<any> {}

class LoginForm extends Component<LoginFormProps, LoginFormState> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  }

  onUserSubmitLogin = (
    event: FormEvent<HTMLFormElement>,
    login: UserContextType["login"]
  ) => {
    event.preventDefault();

    const { firstname, lastname, email, password } = this.state;

    if (!/^[A-Za-z]+$/.test(firstname)) {
      alert("first name should be letters only!");
      return;
    }
    if (!/^[A-Za-z]+$/.test(lastname)) {
      alert("last name should be letters only!");
      return;
    }

    if (!/^[\w.-]+@[A-Za-z]+\.[A-Za-z]+$/.test(email)) {
      alert("Email address should be valid!");
      return;
    }

    if (password.length <= 5) {
      alert("Your password must be more than 5 characters!");
      return;
    }

    login(firstname, password);

    const { history } = this.props;
    history.push("/index");
  };

  handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      [event.target.name]: event.target.value,
    } as Pick<LoginFormState, keyof LoginFormState>);
  };

  render() {
    const { firstname, lastname, email, password } = this.state;

    return (
      <UserContext.Consumer>
        {({ login }) => (
          <div className="login_form">
            <br />
            <br />
            <div className="container-fluid">
              <form
                className="loginframe"
                onSubmit={(event) => this.onUserSubmitLogin(event, login)}
              >
                <label className="account">First Name:</label>
                <input
                  className="form-input"
                  id="account"
                  type="text"
                  name="firstname"
                  value={firstname}
                  onChange={this.handleInputChange}
                />
                <br />
                <p></p>
                <label className="account">Last Name:</label>
                <input
                  className="form-input"
                  id="account"
                  type="text"
                  name="lastname"
                  value={lastname}
                  onChange={this.handleInputChange}
                />
                <br />
                <p></p>
                <label className="account">Email:</label>
                <input
                  className="form-input"
                  id="account"
                  type="text"
                  name="email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                <br />
                <p></p>
                <label className="password">Password:</label>
                <input
                  className="form-input"
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleInputChange}
                />
                <br />
                <br />
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
