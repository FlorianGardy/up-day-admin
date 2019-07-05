import React from "react";
import PropTypes from "prop-types";
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
          <UserRow key={i} {...user} deleteUser={uuid => deleteUser(uuid)} />
        ))}
    </>
  );
};

UserView.propTypes = {
  users: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.func.isRequired
};

export default UserView;
