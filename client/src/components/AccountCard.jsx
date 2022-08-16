import React from "react";
import "./styles/AccountCard.css";
import passwordStars from "../img/password-stars.png";

const AccountCard = (props) => {
  const initial =
    props.account.website[0].toUpperCase() ||
    props.account.username[0].toUpperCase() ||
    "#";

  const handleDelete = (event) => {
    props.onDelete(props.account.account_id);
  };

  return (
    <div className="item-list">
      <p className="initial">{initial}</p>
      <div className="list-content">
        <p>{props.account.website}</p>
        <p>{props.account.username}</p>
        {props.isShown ? (
          <p>{props.account.password}</p>
        ) : (
          <img src={passwordStars} alt="********" className="password-stars" />
        )}
      </div>
      <button onClick={handleDelete} className="del-btn">
        <i className="uil uil-trash-alt"></i>
      </button>
    </div>
  );
};

export default AccountCard;
