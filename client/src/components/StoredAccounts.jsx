import React, { useState, useEffect } from "react";
import "./styles/StoredAccounts.css";
import axios from "axios";
import AccountCard from './AccountCard'

const StoredAccounts = () => {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3045/accounts")
      .then((res) => setAccounts(res.data));
  }, []);

  console.log(accounts);

  return (
    <div className="sub-div2">
      <div className="stored-header">
        <div className="your-accounts">
          <h1 className="heading-name">Your Accounts</h1>
          <p className="header-count">{accounts.length}</p>
        </div>
      </div>
      <hr />
      <div className="stored-accounts">
        {accounts.map((element) => {
          return <AccountCard account={element}/> 
        })}
      </div>
    </div>
  );
};

export default StoredAccounts;
