import React from "react";
import UserPage from "../pages/Users.page";
import UserPageByID from "../pages/User.page";
import { Route } from "react-router-dom";
import LoginForm from "../pages/login.page";

const Main = () => {
  return (
    <div>
      <Route path="/" exact component={LoginForm} />
      <Route path="/users" exact component={UserPage} />
      <Route path="/user/:id" exact component={UserPageByID} />
    </div>
  );
};

export default Main;
