import React, { useState, useEffect } from "react";
import "./styles/StoredAccounts.css";
import axios from "axios";
import AccountCard from "./AccountCard";

const StoredAccounts = (props) => {
  const [filter, setFilter] = useState("");
  // const [accounts, setAccounts] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3045/accounts")
  //     .then((res) => setAccounts(res.data));
  // }, []);

  const handleFilter = (event) => {
    setFilter(event.target.value);
    props.onFilter(event.target.value);
  };

  useEffect(() => console.log("accounts", props.accounts), [props.accounts]);

  return (
    <div className="sub-div2">
      <div className="stored-header">
        <div className="your-accounts">
          <h1 className="heading-name">Your Accounts</h1>
          <p className="header-count">{props.accounts.length}</p>
          <input type="text" onChange={handleFilter} value={filter} />
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
        {props.accounts?.map((account) => {
          return (
            <AccountCard
              key={account.account_id}
              account={account}
              onDelete={props.onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StoredAccounts;
