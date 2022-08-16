import React, { useState } from "react";
import axios from "axios";
import "./styles/AddAccount.css";
import addAccImg from "../img/add-acc-no-bg.png";

const AddAccount = (props) => {
  const [website, setWebsite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleWebsite = (event) => {
    console.log(event.target.value);
    setWebsite(event.target.value);
  };

  const handleUsername = (event) => {
    console.log(event.target.value);
    setUsername(event.target.value);
  };

  const handlePassword = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    // console.log("fire function");
    event.preventDefault();
    props.onAdd(website, username, password).then(() => {
      setWebsite("");
      setUsername("");
      setPassword("");
    });
  };

  return (
    <div className="add-account">
      <form onSubmit={handleSubmit} className="add-form">
        <h1>Add New Account</h1>
        <div className="input-container">
          <i className="uil uil-tv-retro"></i>
          <input
            onChange={handleWebsite}
            value={website}
            placeholder="Enter Website"
          />
        </div>
        <div className="input-container">
          <i className="uil uil-user"></i>
          <input
            onChange={handleUsername}
            value={username}
            placeholder="Enter Username"
          />
        </div>
        <div className="input-container">
          <i className="uil uil-padlock"></i>
          <input
            onChange={handlePassword}
            value={password}
            placeholder="Enter Password"
          />
        </div>
        <button onClick={handleSubmit} id="add-button">
          Add
        </button>
      </form>
      <img src={addAccImg} alt="add-acc-img" className="add-acc-img" />
    </div>
  );
};

export default AddAccount;
