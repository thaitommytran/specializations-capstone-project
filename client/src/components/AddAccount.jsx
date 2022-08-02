import React, { useState } from "react";
import "./styles/AddAccount.css";

const AddAccount = () => {
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

  return (
    <div>
      <form className="add-form">
        <h1>Add New Account</h1>
        <div className="input-container">
          <i className="uil uil-tv-retro"></i>
          <input onChange={handleWebsite} value={website} />
        </div>
        <div className="input-container">
          <i className="uil uil-user"></i>
          <input onChange={handleUsername} value={username} />
        </div>
        <div className="input-container">
          <i className="uil uil-padlock"></i>
          <input onChange={handlePassword} value={password} />
        </div>
        <button id="add-button">Add</button>
      </form>
    </div>
  );
};

export default AddAccount;
