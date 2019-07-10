import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getuserList, deleteUserFromDB } from "./user.action";
import UserView from "./user.view";
import { getUserList } from "./user.selector";
import { getSearchValue } from "../searchBar/searchBar.selector";

const User = ({ updateUserList, deleteUserFromDB, users, searchValue }) => {
	useEffect(() => {
		updateUserList();
	}, [updateUserList]);

	const filteredUsers = users.filter(user =>
			user.name.toLowerCase().includes(searchValue.toLowerCase())
		)
		.reverse();

	return (
			<UserView users={filteredUsers} deleteUser={uuid => deleteUserFromDB(uuid)} />
	);
};

const mapDispatchToPros = dispatch => {
	return {
		updateUserList: () => dispatch(getuserList()),
		deleteUserFromDB: uuid => dispatch(deleteUserFromDB(uuid))
	};
};

const mapStateToProps = state => ({
	users: getUserList(state),
	searchValue: getSearchValue(state)
});

User.propTypes = {
	users: PropTypes.array.isRequired,
	updateUserList: PropTypes.func.isRequired
};

export default connect(
	mapStateToProps,
	mapDispatchToPros
)(User);
