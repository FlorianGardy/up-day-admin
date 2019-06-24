import React from "react";
import UserRow from "../../components/UserRow";

const UserView = ({ users }) => {
  return (
    <>
      {users.map(user => (
        <UserRow {...user} />
      ))}
    </>
  );
};

export default UserView;
