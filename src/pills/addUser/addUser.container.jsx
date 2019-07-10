import React, {  useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  updateAdmin,
  updateName,
  updateEmail,
  updatePass,
  updateRole,
  resetAddUser
} from "./addUser.action";
import { getuserList } from "../users/user.action";
import AddUserView from "./addUser.view";
import {
  getAddUserName,
  getAddUserPassword,
  getAddUserRole,
  getAddUserIsAdmin,
  getAddUserEmail
} from "./addUser.selector";
import { addUserToDb } from "../../functions/addUserToDb";

const AddUser = ({
  name,
  email,
  password,
  updateEmail,
  updateName,
  updatePass,
  updateAdmin,
  role,
  updateRole,
  getUserList,
  isAdmin,
  resetAddUser
}) => {

  useEffect(() => {
    if (isAdmin) {
      updateRole("admin");
    } else {
      updateRole("standard");
    }
  }, [updateRole, isAdmin]);

  const handleRegister = async (name, password, role, email) => {
    await addUserToDb(name, password, email, role);
    getUserList();
    resetAddUser();
  };

  return (
      <AddUserView
        name={name}
        email={email}
        password={password}
        handleRegister={handleRegister}
        updateName={updateName}
        updateEmail={updateEmail}
        updatePass={updatePass}
        updateAdmin={updateAdmin}
        isAdmin={isAdmin}
        role={role}
      />
  );
};

const mapStateToProps = store => {
  return {
    name: getAddUserName(store),
    password: getAddUserPassword(store),
    email: getAddUserEmail(store),
    role: getAddUserRole(store),
    isAdmin: getAddUserIsAdmin(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: name => dispatch(updateName(name)),
    updateEmail: email => dispatch(updateEmail(email)),
    updateAdmin: isAdmin => dispatch(updateAdmin(isAdmin)),
    updatePass: password => dispatch(updatePass(password)),
    updateRole: role => dispatch(updateRole(role)),
    getUserList: () => dispatch(getuserList()),
    resetAddUser: () => dispatch(resetAddUser())
  };
};

AddUser.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  updateName: PropTypes.func.isRequired,
  updatePass: PropTypes.func.isRequired,
  updateAdmin: PropTypes.func.isRequired,
  updateRole: PropTypes.func.isRequired,
  getUserList: PropTypes.func.isRequired,
  resetAddUser: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUser);
