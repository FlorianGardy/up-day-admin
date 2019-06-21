import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SideMenu from "./components/SideMenu";
import MainMenu from "./components/MainMenu";
import Users from "./components/Users";

const AdminPanel = () => {
  return (
    <Router>
      <div>
        <SideMenu />
        <Route path="/" exact component={MainMenu} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
};

export default AdminPanel;
