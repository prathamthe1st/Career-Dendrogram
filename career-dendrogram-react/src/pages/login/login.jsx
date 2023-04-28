import React from "react";
import "./login.css";
import Button from "../../components/button/button";

const Login = () => {
    return (
        <div className="loginbox">
            <form action="submit">
                <h1>LOGIN</h1>
                <label htmlFor="userName">Username</label>
                <input type="text" name="userName" id="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <br />
                <Button inputValue={"login"} />
            </form>
        </div>
    );
}

export default Login;