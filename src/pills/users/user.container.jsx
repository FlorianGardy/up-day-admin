import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getuserList } from "./user.action";
import UserView from "./user.view";
import Axios from "axios";

const User = ({ updateUserList, users }) => {
  useEffect(() => {
    updateUserList();
  }, [updateUserList]);

  const [filterValue, setFilterValue] = useState("");

  const deleteUser = uuid => {
    return Axios.delete(`/users/${uuid}`);
  };

  return (
    <>
      <UserView
        users={users}
        deleteUser={deleteUser}
        handleFilter={filterValue => setFilterValue(filterValue)}
        filterValue={filterValue}
      />
    </>
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

User.propTypes = {
  users: PropTypes.string.isRequired,
  updateUserList: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(User);
