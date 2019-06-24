import React from "react";
import Users from "./Users";
import Home from "./Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Main = () => {
  return (
    <Router>
      <div style={{ width: "80%" }}>
        <Route path="/" exact component={Home} />
        <Route path="/users/" exact component={Users} />
      </div>
    </Router>
  );
};

export default Main;
