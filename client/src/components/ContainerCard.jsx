import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ContainerCard.css";
import AddAccount from "./AddAccount";
import StoredAccounts from "./StoredAccounts";

const ContainerCard = (props) => {
  const [accounts, setAccounts] = useState([]);
  const [allAccounts, setAllAccounts] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const handleAdd = async (website, username, password) => {
    return axios
      .post(`http://localhost:3045/${props.userId}/accounts`, {
        website: website,
        username: username,
        password: password
      })
      .then((res) => {
        setAccounts(res.data);
        setAllAccounts(res.data);
      });
  };

  const handleDelete = (account_id) => {
    axios
      .post(
        `http://localhost:3045/${props.userId}/accounts/delete/${account_id}`
      )
      .then((res) => {
        setAccounts(res.data);
        setAllAccounts(res.data);
      });
  };

  const handleFilter = (value) => {
    console.log(value);
    // if no filters, show all accounts
    if (!value.length) {
      setAccounts(allAccounts);
    } else {
      // otherwise, show filtered accounts
      const filteredAccounts = accounts.filter((item) => {
        return item.website.includes(value) || item.username.includes(value);
      });
      console.log(filteredAccounts);
      setAccounts(filteredAccounts);
    }
  };

  useEffect(() => {
    axios.get(`http://localhost:3045/${props.userId}/accounts`).then((res) => {
      setAccounts(res.data); // represents whats showing on the UI
      setAllAccounts(res.data); // represents all accounts to be used with no filters
    });
  }, [props.userId]);

  return (
    <div id="container-card">
      {/* 
    {!authenticated && <Login />}
    */}
      <AddAccount
        accounts={accounts}
        setAccounts={setAccounts}
        onAdd={handleAdd}
      />
      <StoredAccounts
        accounts={accounts}
        onDelete={handleDelete}
        onFilter={handleFilter}
      />
    </div>
  );
};

export default ContainerCard;
