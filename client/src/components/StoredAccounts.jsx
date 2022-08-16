import React, { useState, useEffect } from "react";
import "./styles/StoredAccounts.css";
import axios from "axios";
import AccountCard from "./AccountCard";

const StoredAccounts = ({ accounts }) => {
  // const [accounts, setAccounts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3045/accounts")
  //     .then((res) => setAccounts(res.data));
  // }, []);

  useEffect(() => console.log("accounts", accounts), [accounts]);

  return (
    <div className="sub-div2">
      <div className="stored-header">
        <div className="your-accounts">
          <h1 className="heading-name">Your Accounts</h1>
          <p className="header-count">{accounts.length}</p>
        </div>
      </div>
      <hr />
      <div className="show-passwords">
        <input type="checkbox" className="check-box" id="check" />
        <label htmlFor="check" className="label-password">
          Show Passwords
        </label>
      </div>
      <div className="stored-accounts">
        {accounts?.map((account, index) => {
          return <AccountCard key={index} account={account} />;
        })}
      </div>
    </div>
  );
};

export default StoredAccounts;
