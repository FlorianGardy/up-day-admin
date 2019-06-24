import React from "react";
import UserRow from "../../components/UserRow";

const UserView = ({ users }) => {
  return (
    <div>
      {users.map(user => (
        <UserRow name={user.name} />
      ))}
    </div>
  );
};

export default UserView;
