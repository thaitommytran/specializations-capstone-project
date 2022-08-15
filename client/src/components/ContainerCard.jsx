import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ContainerCard.css";
import AddAccount from "./AddAccount";
import StoredAccounts from "./StoredAccounts";

const ContainerCard = () => {
  const [accounts, setAccounts] = useState([]);
  const [authenticated, setAuthenticated] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:3045/accounts")
      .then((res) => setAccounts(res.data));
  }, []);

  return (
    <div id="container-card">
    {/* 
    {!authenticated && <Login />}
    */}
      <AddAccount accounts={accounts} setAccounts={setAccounts} />
      <StoredAccounts accounts={accounts} />
    </div>
  );
};

export default ContainerCard;
