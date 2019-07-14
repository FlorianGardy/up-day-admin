import React from "react";
import SideMenu from "./components/SideMenu";
import Main from "./components/Main";
import { BrowserRouter as Router } from "react-router-dom";

const AdminPanel = () => {
  return (
    <div style={{ display: "flex" }}>
      <Router>
        <SideMenu />
        <Main />
      </Router>
    </div>
  );
};

export default AdminPanel;
