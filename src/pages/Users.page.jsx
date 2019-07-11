import React from "react";
import Users from "../pills/users/user.container";
import AddUser from "../pills/addUser/addUser.container";
import SearchBar from "../pills/searchBar/searchBar.container";
import { Table } from "semantic-ui-react";
import TitleMenu from "../components/TitleMenu";

const UsersPage = () => {
	return (
		<>
    	<TitleMenu />
			<Table>
				<Table.Header>
					<Table.Cell textAlign="left"><AddUser /></Table.Cell>
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
