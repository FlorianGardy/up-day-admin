import React from "react";
import UserRow from "../../components/UserRow";

const UserView = ({ users, deleteUser }) => {
  return (
    <>
      {users.reverse().map((user, i) => (
        <UserRow key={i} {...user} deleteUser={deleteUser} />
      ))}
    </>
  );
};

export default UserView;
