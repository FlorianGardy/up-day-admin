import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getuserList } from "./user.action";
import UserView from "./user.view";
import Axios from "axios";

const User = ({ updateUserList, users }) => {
  useEffect(() => {
    updateUserList();
  }, [updateUserList]);

  const deleteUser = id => {
    return Axios.delete(`/user/${id}`);
  };

  return <UserView users={users} deleteUser={deleteUser} />;
};

const mapDispatchToPros = dispatch => {
  return {
    updateUserList: () => dispatch(getuserList())
  };
};

const mapStateToProps = state => ({
  users: state.UserReducer.userList
});

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(User);
