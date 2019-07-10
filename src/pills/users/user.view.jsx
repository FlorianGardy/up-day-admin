import React from "react";
import PropTypes from "prop-types";
import UserCard from "../../components/UserCard";
import { Card } from "semantic-ui-react";

const UserView = ({ users, deleteUser }) => {
  return (
      <Card.Group itemsPerRow={3}>
        {users
          .map((user, i) => (
            <UserCard key={i} {...user} deleteUser={uuid => deleteUser(uuid)} />
          ))}
      </Card.Group>
  );
};

UserView.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UserView;
