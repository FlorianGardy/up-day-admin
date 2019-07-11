import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button, Table, Icon } from "semantic-ui-react";
import moment from "moment";
import "moment/locale/fr";

const UserTab = ({
	history,
	name,
	uuid,
	password,
	createdAt,
	token,
	role,
	deleteUser,
	email
}) => {
	return (
		<Table.Body>
			<Table.Row textAlign="center">
				<Table.Cell>
					<NavLink to={`/user/${uuid}`}>
							<Icon name="calendar alternate outline" size ="large" color="grey"></Icon>
					</NavLink>
				</Table.Cell>
				<Table.Cell>{name}</Table.Cell>
				<Table.Cell>{moment(createdAt).format("DD/MM/YYYY")}</Table.Cell>
				<Table.Cell>{email ? email : "non communiqué"}</Table.Cell>
				<Table.Cell>
          <Icon link size ="large" name="trash alternate outline" onClick={() => deleteUser(uuid)} color="orange"></Icon>
				</Table.Cell>
			</Table.Row>
		</Table.Body>
	);
};

UserTab.propTypes = {
	name: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	uuid: PropTypes.string.isRequired,
	password: PropTypes.string.isRequired,
	token: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	deleteUser: PropTypes.func.isRequired
};

export default UserTab;
