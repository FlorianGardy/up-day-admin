import React from "react";
import Users from "../pills/users/user.container";
import Home from "./Home";
import { Route } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ width: "80%" }}>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={Users} />
    </div>
  );
};

export default Main;
