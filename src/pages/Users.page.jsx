import React from "react";
import Users from "../pills/users/user.container";
import AddUser from "../pills/addUser/addUser.container";
import SearchBar from "../pills/searchBar/searchBar.container";
import TitleMenu from "../components/TitleMenu";

const UsersPage = () => {
  return (
    <>
      <TitleMenu />
      <div
        style={{
          display: "flex",
          justifyContent: "Space-between",
          width: "90vw", 
          margin: "3vmin 5vw"
        }}
      >
        <AddUser />
        <SearchBar />
      </div>
      <Users />
    </>
  );
};

export default UsersPage;
