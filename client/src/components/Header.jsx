import React from "react";
import "./styles/Header.css";

const Header = () => {
  return (
    <div className="header-container">
      <h1>Finessflix</h1>
      <div className="user-container">
        <p>Hello, User</p>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Header;
