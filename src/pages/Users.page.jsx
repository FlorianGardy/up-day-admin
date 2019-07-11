import React from "react";
import Users from "../pills/users/user.container";
import AddUser from "../pills/addUser/addUser.container";
import SearchBar from "../pills/searchBar/searchBar.container";
import { Menu, Table } from "semantic-ui-react";

const UsersPage = () => {
	return (
		<>
		<Table>
			<Table.Header>
				<Table.Cell><AddUser /></Table.Cell>
				<Table.Cell textAlign="right"><SearchBar /></Table.Cell>
			</Table.Header>
		</Table>
		<Table>
			<Users />
		</Table>
		</>
	);
};

export default UsersPage;
