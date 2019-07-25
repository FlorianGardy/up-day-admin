import React, { useEffect } from "react";
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
import { getUsersList } from "../users/users.action";
import AddUserView from "./addUser.view";
import {
  getAddUserNameSelector,
  getAddUserPasswordSelector,
  getAddUserRoleSelector,
  getAddUserIsAdminSelector,
  getAddUserEmailSelector
} from "./addUser.selector";
import createUser from "../../API/createUser";

const AddUserContainer = ({
  name,
  email,
  password,
  updateEmail,
  updateName,
  updatePass,
  updateAdmin,
  role,
  updateRole,
  getUsersList,
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
    await createUser(name, password, role, email);
    getUsersList();
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

AddUserContainer.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool.isRequired
};

const mapStateToProps = store => {
  return {
    name: getAddUserNameSelector(store),
    password: getAddUserPasswordSelector(store),
    email: getAddUserEmailSelector(store),
    role: getAddUserRoleSelector(store),
    isAdmin: getAddUserIsAdminSelector(store)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateName: name => dispatch(updateName(name)),
    updateEmail: email => dispatch(updateEmail(email)),
    updateAdmin: isAdmin => dispatch(updateAdmin(isAdmin)),
    updatePass: password => dispatch(updatePass(password)),
    updateRole: role => dispatch(updateRole(role)),
    getUsersList: () => dispatch(getUsersList()),
    resetAddUser: () => dispatch(resetAddUser())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddUserContainer);
