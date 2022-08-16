import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/ContainerCard.css";
import AddAccount from "./AddAccount";
import StoredAccounts from "./StoredAccounts";

const ContainerCard = () => {
  const [accounts, setAccounts] = useState([]);
  const [allAccounts, setAllAccounts] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);

  const handleAdd = async (website, username, password) => {
    return axios
      .post("http://localhost:3045/accounts", {
        website: website,
        username: username,
        password: password,
        user_id: 1
      })
      .then((res) => {
        setAccounts(res.data);
      });
  };

  const handleDelete = (account_id) => {
    axios
      .post(`http://localhost:3045/accounts/delete/${account_id}`)
      .then((res) => {
        setAccounts(res.data);
      });
  };

  const handleFilter = (value) => {
    console.log(value);
    if (!value.length) {
      setAccounts(allAccounts);
    } else {
      const filteredAccounts = accounts.filter((item) => {
        return item.website.includes(value) || item.username.includes(value);
      });
      console.log(filteredAccounts);
      setAccounts(filteredAccounts);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:3045/accounts").then((res) => {
      setAccounts(res.data);
      setAllAccounts(res.data);
    });
  }, []);

  return (
    <div id="container-card">
      {/* 
    {!authenticated && <Login />}
    */}
      ContainerCard
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
