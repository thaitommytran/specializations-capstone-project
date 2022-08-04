import React, { useState, useEffect } from "react";
import "./styles/StoredAccounts.css";
import axios from "axios";

const StoredAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3045/accounts")
      .then((res) => setAccounts(res.data));
  }, []);

  console.log(accounts);

  return (
    <div>
      StoredAccounts
      <h1>Your Accounts</h1>
      <hr />
      <div className="stored-accounts"></div>
    </div>
  );
};

export default StoredAccounts;
