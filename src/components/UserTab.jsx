import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Table, Icon } from "semantic-ui-react";
import moment from "moment";
import "moment/locale/fr";

import DeleteModal from "./DeleteModal";

const isAdminColor = role => {
  if (role === "admin") {
    return { color: "#f2711c" };
  }
};

const UserTab = ({
  name,
  uuid,
  createdAt,
  token,
  role,
  deleteUser,
  email,
  ownUuid
}) => {
  const nameStyle = isAdminColor(role);

  return (
    <Table.Body>
      <Table.Row textAlign="center">
        <Table.Cell>
          <NavLink to={`/user/${uuid}`}>
            <Icon name="calendar alternate outline" size="large" color="grey" />
          </NavLink>
        </Table.Cell>
        <Table.Cell style={nameStyle}>{name}</Table.Cell>
        <Table.Cell>{moment(createdAt).format("DD/MM/YYYY")}</Table.Cell>
        {/* This input have been disable because of personal data problematique */}
        {/* <Table.Cell>{email ? email : "non communiqué"}</Table.Cell> */}
        <Table.Cell>
          {uuid === ownUuid ? (
            ""
          ) : (
            <DeleteModal
              name={name}
              uuid={uuid}
              deleteUser={() => deleteUser(uuid)}
            />
          )}
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

UserTab.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  uuid: PropTypes.string.isRequired,
  token: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  deleteUser: PropTypes.func.isRequired
};

export default UserTab;
