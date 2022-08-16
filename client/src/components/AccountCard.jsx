import React from "react";
import axios from "axios";
import "./styles/AccountCard.css";

const AccountCard = (props) => {
  const initial = props.account.website[0] || props.account.username[0] || "#";

  const handleDelete = (event) => {
    props.onDelete(props.account.account_id);
  };

  return (
    <div className="item-list">
      <p className="initial">{initial}</p>
      <div className="list-content">
        <p>{props.account.website}</p>
        <p>{props.account.username}</p>
        <p>{props.account.password}</p>
      </div>
      <button onClick={handleDelete} className="del-btn">
        <i class="uil uil-trash-alt"></i>
      </button>
    </div>
  );
};

export default AccountCard;
