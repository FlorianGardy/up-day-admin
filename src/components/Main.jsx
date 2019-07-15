import React from "react";
import { Route } from "react-router-dom";

import Home from "./Home";
import UserPage from "../pages/Users.page";
import UserPageByID from "../pages/User.page";


const Main = () => {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/users" exact component={UserPage} />
      <Route path="/user/:id" exact component={UserPageByID} />
    </>
  );
};

export default Main;