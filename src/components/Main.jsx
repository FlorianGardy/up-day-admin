import React from "react";
import UserPage from "../pages/Users.page";
import Home from "./Home";
import { Route } from "react-router-dom";

const Main = () => {
  return (
    <div style={{ width: "80%" }}>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={UserPage} />
    </div>
  );
};

export default Main;
