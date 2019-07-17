import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./pages/Login.page";
import UserPage from "./pages/Users.page";
import UserPageByID from "./pages/User.page";
import PrivateRoute from "./components/PrivateRoute";

const AdminPanel = () => {
  return (
    <Router>
      <Route path="/" exact component={Login} />
      <PrivateRoute path="/users" exact component={UserPage} />
      <PrivateRoute path="/user/:uuid" exact component={UserPageByID} />
    </Router>
  );
};

export default AdminPanel;
