import React, { useState } from 'react';
import {onSubmitLogin} from "../data/login"

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onUserSubmitLogin = (event) => {
        event.preventDefault();
        // 处理登录表单提交的逻辑
        onSubmitLogin(username, password);
    };

    return (
        <div className="login_form">
            <br />
            <br />
            <div className="container-fluid">
                <form className="loginframe" onSubmit={onUserSubmitLogin}>
                    <label className="account">Name:</label>
                    <input
                        className="form-input"
                        id="account"
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    /><br/><p></p>
                    <label className="password">Password:</label>
                    <input
                        className="form-input"
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    /><br/><br/>
                    <input className="btn-submit" type="submit" value="SUBMIT" />
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
