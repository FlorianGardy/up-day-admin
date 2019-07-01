import React from "react";
import UserRow from "../../components/UserRow";

const UserView = ({ users }) => {
  return (
    <>
      {users.reverse().map((user, i) => (
        <UserRow key={i} {...user} />
      ))}
    </>
  );
};

export default UserView;
