import React, { useState } from "react";
import "./styles/LoginPage.css";
import loginPageImg from "../img/login-page-no-bg.png";

const LoginPage = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const handleLogin = (event) => {
    if (loginUsername === "tommy" && loginPassword === "tommy") {
      // DO SOMETHING
    }
  };

  return (
    <div className="login-page">
      <img src={loginPageImg} alt="login-page-img" className="login-page-img" />
      <form className="login-form">
        <input value={loginUsername} placeholder="Username" />
        <input value={loginPassword} placeholder="Password" />
        <button onClick={handleLogin}>Log In</button>
        <hr />
        <button>Sign Up</button>
      </form>
    </div>
  );
};

export default LoginPage;
