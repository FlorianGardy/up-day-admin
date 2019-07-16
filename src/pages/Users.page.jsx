import React from "react";
import Users from "../pills/users/user.container";
import AddUser from "../pills/addUser/addUser.container";
import SearchBar from "../pills/searchBar/searchBar.container";
import { Table } from "semantic-ui-react";
import TitleMenu from "../components/TitleMenu";

const UsersPage = () => {
  return (
    <>
      <TitleMenu />
      <div
        style={{
          display: "flex",
          justifyContent: "Space-between",
          width: "94%",
          margin: "auto"
        }}
      >
        <AddUser />
        <SearchBar />
      </div>
      <Table>
        <Users />
      </Table>
    </>
  );
};

export default UsersPage;
