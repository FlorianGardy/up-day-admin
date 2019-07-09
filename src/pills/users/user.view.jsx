import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../components/UserCard";
import { Card } from "semantic-ui-react";

const UserView = ({ users, deleteUser, handleFilter, filterValue }) => {
  return (
    <>
      <label>filtre:</label>
      <input value={filterValue} onChange={e => handleFilter(e.target.value)} />
      <Card.Group itemsPerRow={3}>
        {users
          .filter(user =>
            user["name"].toLowerCase().includes(filterValue.toLowerCase())
          )
          .reverse()
          .map((user, i) => (
            <UserCard key={i} {...user} deleteUser={uuid => deleteUser(uuid)} />
          ))}
      </Card.Group>
    </>
  );
};

UserView.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired
};

export default UserView;
