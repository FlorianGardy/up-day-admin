import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../components/UserCard";
import { Card, Input } from "semantic-ui-react";

const UserView = ({ users, deleteUser, handleFilter, filterValue }) => {
  return (
    <>
      <div style={{ margin: "10px" }}>
        <Input
          icon="search"
          placeholder="Chercher un nom"
          value={filterValue}
          onChange={e => handleFilter(e.target.value)}
        />
      </div>
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
