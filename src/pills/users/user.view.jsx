import React from "react";
import UserRow from "../../components/UserRow";

const UserView = ({ users, deleteUser, handleFilter, filterValue }) => {
  return (
    <>
      <label>filtre:</label>
      <input value={filterValue} onChange={e => handleFilter(e.target.value)} />
      {users
        .filter(user =>
          user["name"].toLowerCase().includes(filterValue.toLowerCase())
        )
        .reverse()
        .map((user, i) => (
          <UserRow key={i} {...user} deleteUser={deleteUser} />
        ))}
    </>
  );
};

export default UserView;
