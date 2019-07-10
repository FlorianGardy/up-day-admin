import React from "react";
import Users from "../pills/users/user.container";
import AddUser from "../pills/addUser/addUser.container";
import SearchBar from "../pills/searchBar/searchBar.container";

const UsersPage = () => {
	return (
		<div>
			<nav>
				<AddUser />
				<SearchBar />
			</nav>
			<Users />
		</div>
	);
};

export default UsersPage;
