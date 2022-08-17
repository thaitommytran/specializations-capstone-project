import React, { useState } from "react";
import axios from "axios";
import loginPageImg from "../img/login-page-no-bg.png";
import "./styles/LoginPage.css";

const LoginPage = (props) => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleUsernameChange = (event) => {
    setLoginUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleLogin = () => {
    axios
      .post("http://localhost:3045/auth", {
        login_username: loginUsername
      })
      .then((res) => {
        console.log(res.data.login_password, loginPassword);
        if (res.data.login_password === loginPassword) {
          const item = {
            value: res.data.user_id,
            expiry: new Date().getTime() + 600000
          };

          window.localStorage.setItem("session", JSON.stringify(item));
          props.onLogin(res.data.user_id);
        }
      });
  };

  return (
    <div className="login-page">
      <img src={loginPageImg} alt="login-page-img" className="login-page-img" />
      <div className="login-form">
        <input
          value={loginUsername}
          placeholder="Username"
          onChange={handleUsernameChange}
        />
        <input
          value={loginPassword}
          placeholder="Password"
          onChange={handlePasswordChange}
        />
        <button onClick={handleLogin}>Log In</button>
        <hr />
        <button>Sign Up</button>
      </div>
    </div>
  );
};

export default LoginPage;
