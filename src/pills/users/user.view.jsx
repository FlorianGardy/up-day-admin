import React from "react";
import PropTypes from "prop-types";
import UserTab from "../../components/UserTab";
import { Card, Table } from "semantic-ui-react";

const UserView = ({ users, deleteUser }) => {
  return (
      <>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell>Calendrier</Table.HeaderCell>
            <Table.HeaderCell>Nom</Table.HeaderCell>
            <Table.HeaderCell>Création</Table.HeaderCell>
            <Table.HeaderCell>E-mail</Table.HeaderCell>
            <Table.HeaderCell>Supprimer</Table.HeaderCell>
          </Table.Row>
			  </Table.Header>
        {users
          .map((user, i) => (
            <UserTab key={i} {...user} deleteUser={uuid => deleteUser(uuid)} />
          ))}
      </>
  );
};

UserView.propTypes = {
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
};

export default UserView;
