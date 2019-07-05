import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getuserList, deleteUserFromDB } from "./user.action";
import UserView from "./user.view";
import { getUserList } from "./user.selector";

const User = ({ updateUserList, deleteUserFromDB, users }) => {
  useEffect(() => {
    updateUserList();
  }, [updateUserList]);

  const [filterValue, setFilterValue] = useState("");

  return (
    <>
      <UserView
        users={users}
        deleteUser={uuid => deleteUserFromDB(uuid)}
        handleFilter={filterValue => setFilterValue(filterValue)}
        filterValue={filterValue}
      />
    </>
  );
};

const mapDispatchToPros = dispatch => {
  return {
    updateUserList: () => dispatch(getuserList()),
    deleteUserFromDB: uuid => dispatch(deleteUserFromDB(uuid))
  };
};

const mapStateToProps = state => ({
  users: getUserList(state)
});

User.propTypes = {
  users: PropTypes.array.isRequired,
  updateUserList: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToPros
)(User);
