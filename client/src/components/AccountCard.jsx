import React from "react";
import "./styles/AccountCard.css";

const AccountCard = (props) => {
  return (
    <div className="item-list">
      <p className="initial"></p>
      <div className="list-content">
        <p>{props.account.website}</p>
        <p>{props.account.username}</p>
        <p>{props.account.password}</p>
      </div>
      <button className="del-btn">X</button>
    </div>
  );
};

export default AccountCard;
