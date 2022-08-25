import React from "react";
import Header from "./Header";
import ContainerCard from "./ContainerCard";

import "./styles/HomePage.css";

const HomePage = (props) => {
  return (
    <div className="home">
      <Header onLogout={props.onLogout} userId={props.userId} />
      <ContainerCard userId={props.userId} />
    </div>
  );
};

export default HomePage;
