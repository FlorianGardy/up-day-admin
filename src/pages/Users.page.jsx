import React from "react";
import Users from "../pills/users/user.container";
import AddUser from "../pills/addUser/addUser.container";

const UsersPage = () => {
  return (
    <div>
      <AddUser />
      <Users />
    </div>
  );
};

export default UsersPage;
