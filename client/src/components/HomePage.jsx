import React from "react";
import Header from "./Header";
import ContainerCard from "./ContainerCard";

const HomePage = (props) => {
  return (
    <div>
      <Header onLogout={props.onLogout} loginUsername={props.loginUsername} />
      <ContainerCard userId={props.userId} />
    </div>
  );
};

export default HomePage;
