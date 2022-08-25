import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/Header.css";

const Header = (props) => {
  const [loginUsername, setloginUsername] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3045/user/${props.userId}`).then((res) => {
      setloginUsername(res.data.login_username);
    });
  }, [props.userId]);

  return (
    <div className="header-container">
      <h1>Finessflix</h1>
      <div className="user-container">
        <h4 className="header-username">Hello, {loginUsername}</h4>
        <button className="logout-btn" onClick={props.onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Header;
