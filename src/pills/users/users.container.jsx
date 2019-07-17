import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { getUsersList, handleDeleteUser } from "./users.action";
import { clearUserEvents } from "../userInfo/userInfo.action";
import { getUsersListSelector } from "./users.selector";
import { getSearchValueSelector } from "../searchBar/searchBar.selector";
import UserView from "./users.view";

const UsersContainer = ({
  updateUserList,
  handleDeleteUser,
  users,
  searchValue,
  clearUserEvents
}) => {
  useEffect(() => {
    updateUserList();
    clearUserEvents();
  }, [updateUserList, clearUserEvents]);

  const filteredUsers = users
    .filter(user => user.name.toLowerCase().includes(searchValue.toLowerCase()))
    .reverse();

  return (
    <UserView
      users={filteredUsers}
      deleteUser={uuid => handleDeleteUser(uuid)}
    />
  );
};

UsersContainer.propTypes = {
  users: PropTypes.array.isRequired,
  updateUserList: PropTypes.func.isRequired
};

const mapDispatchToPros = dispatch => {
  return {
    updateUserList: () => dispatch(getUsersList()),
    handleDeleteUser: uuid => dispatch(handleDeleteUser(uuid)),
    clearUserEvents: () => dispatch(clearUserEvents())
  };
};

const mapStateToProps = state => ({
  users: getUsersListSelector(state),
  searchValue: getSearchValueSelector(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(UsersContainer);
