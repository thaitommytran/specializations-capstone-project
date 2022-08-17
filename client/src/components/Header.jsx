import React from "react";
import "./styles/Header.css";

const Header = (props) => {
  return (
    <div className="header-container">
      <h1>Finessflix</h1>
      <div className="user-container">
        <p>Hello, {props.loginUsername}</p>
        <button onClick={props.onLogout}>Logout</button>
      </div>
    </div>
  );
};

export default Header;
