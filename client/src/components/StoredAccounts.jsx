import React, { useState, useEffect } from "react";
import "./styles/StoredAccounts.css";
import AccountCard from "./AccountCard";

const StoredAccounts = (props) => {
  const [filter, setFilter] = useState("");
  const [isShown, setIsShown] = useState(false);

  const handleFilter = (event) => {
    setFilter(event.target.value);
    props.onFilter(event.target.value);
  };

  const showPassword = (event) => {
    if (event.target.checked) {
      setIsShown(true);
    } else {
      setIsShown(false);
    }
  };

  useEffect(() => console.log("accounts", props.accounts), [props.accounts]);

  return (
    <div className="sub-div2">
      <div className="stored-header">
        <div className="your-accounts">
          <h1 className="heading-name">Your Accounts</h1>
          <p className="header-count">{props.accounts.length}</p>
        </div>
        <input
          type="text"
          placeholder="Search"
          onChange={handleFilter}
          value={filter}
        />
      </div>
      <hr />
      <div className="show-passwords">
        <input
          type="checkbox"
          className="check-box"
          id="check"
          onChange={showPassword}
        />
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
              isShown={isShown}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StoredAccounts;
