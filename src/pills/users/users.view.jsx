import React from "react";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

import UserTab from "../../components/UserTab";

const tableStyle = { width: "90vw", margin: "3vmin 5vw" };

const CALENDAR_LABEL = "Calendrier";
const LOGIN_LABEL = "Identifiant";
const CREATED_AT_LABEL = "Date de création";
const DELETE_LABEL = "Supprimer";
// const EMAIL_LABEL = "E-mail";

const UserView = ({ users, deleteUser, ownUuid }) => {
  return (
    <div style={tableStyle}>
      <Table>
        <Table.Header>
          <Table.Row textAlign="center">
            <Table.HeaderCell>{CALENDAR_LABEL}</Table.HeaderCell>
            <Table.HeaderCell>{LOGIN_LABEL}</Table.HeaderCell>
            <Table.HeaderCell>{CREATED_AT_LABEL}</Table.HeaderCell>
            {/* <Table.HeaderCell>{EMAIL_LABEL}</Table.HeaderCell> */}
            <Table.HeaderCell>{DELETE_LABEL}</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {users.map((user, i) => (
          <UserTab
            key={i}
            {...user}
            deleteUser={uuid => deleteUser(uuid)}
            ownUuid={ownUuid}
          />
        ))}
      </Table>
    </div>
  );
};

UserView.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      uuid: PropTypes.string,
      email: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      token: PropTypes.string,
      created_at: PropTypes.string,
      updated_at: PropTypes.string
    })
  ).isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default UserView;
