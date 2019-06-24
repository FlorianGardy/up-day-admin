import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({ history }) => {
  return (
    <div style={{ width: "20%", display: "flex", flexDirection: "column" }}>
      <Link to="/">Accueil</Link>
      <Link to="/users">Utilisateurs</Link>
    </div>
  );
};

export default SideMenu;
