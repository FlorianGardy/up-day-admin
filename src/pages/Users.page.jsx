import React from "react";
import UsersContainer from "../pills/users/users.container";
import AddUser from "../pills/addUser/addUser.container";
import SearchBar from "../pills/searchBar/searchBar.container";
import TitleMenu from "../components/TitleMenu";

const menuStyle = {
  display: "flex",
  justifyContent: "Space-between",
  width: "90vw",
  margin: "3vmin 5vw"
};

const UsersPage = () => {
  return (
    <>
      <TitleMenu />
      <div style={menuStyle}>
        <AddUser />
        <SearchBar />
      </div>
      <UsersContainer />
    </>
  );
};

export default UsersPage;
