import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginForm from "./pages/login.page";
import UserPage from "./pages/Users.page";
import UserPageByID from "./pages/User.page";

const AdminPanel = () => {
  return (
    <Router>
      <div style={{ width: "80%", margin: "auto" }}>
        <Route path="/" exact component={LoginForm} />
        <Route path="/users" exact component={UserPage} />
        <Route path="/user/:uuid" exact component={UserPageByID} />
      </div>
    </Router>
  );
};

export default AdminPanel;
