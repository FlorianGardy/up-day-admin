import React from "react";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div style={{ width: "10%", display: "flex", flexDirection: "column" }}>
      <Link to="/">Accueil</Link>
      <Link to="/users">Utilisateurs</Link>
    </div>
  );
};

export default SideMenu;
