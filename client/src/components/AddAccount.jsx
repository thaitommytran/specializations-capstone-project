import React, { useState } from "react";
import axios from "axios";
import "./styles/AddAccount.css";
import addAccImg from '../img/add-acc.jpg'

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

  const handleSubmit = (event) => {
    // console.log("fire function");
    event.preventDefault();
    axios
      .post("http://localhost:3045/accounts", {
        website: website,
        username: username,
        password: password,
        user_id: 1
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className="add-account">
      <form onSubmit={handleSubmit} className="add-form">
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
        <button onClick={handleSubmit} id="add-button">
          Add
        </button>
      </form>
      <img src={addAccImg} alt="" />
    </div>
  );
};

export default AddAccount;
