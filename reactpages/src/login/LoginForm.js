import React from 'react';
import {onSubmitLogin} from "../data/login"

function LoginForm() {
    const onUserSubmitLogin = () => {
        // 处理登录表单提交的逻辑
        onSubmitLogin()
    };

    return (
        <div className="login_form">
            <br />
            <br />
            <div className="container-fluid">
                <form className="loginframe">
                    <label className="account">Name:</label>
                    <input className="form-input" id="account" type="text" value="" /><br/><p></p>
                    <label className="password">Password:</label>
                    <input className="form-input" id="password" type="password" value="" /><br/><br/>
                    <input className="btn-submit" type="button" onClick={onUserSubmitLogin} value="SUBMIT" />
                </form>
            </div>
        </div>
    );
}

export default LoginForm;
