import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getuserList } from "./user.action";
import UserView from "./user.view";

const User = ({ updateUserList, users }) => {
  useEffect(() => {
    updateUserList();
  }, [updateUserList]);

  return (
    <div>
      <UserView users={users} />
    </div>
  );
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
