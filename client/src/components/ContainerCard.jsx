import React from "react";
import "./styles/ContainerCard.css";
import AddAccount from "./AddAccount";
import StoredAccounts from "./StoredAccounts";

const ContainerCard = () => {
  return (
    <div id="container-card">
      <AddAccount />
      <StoredAccounts />
    </div>
  );
};

export default ContainerCard;
