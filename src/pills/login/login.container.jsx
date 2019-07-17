import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import PropTypes from "prop-types";

import LoginView from "./login.view.jsx";
import { checkUserCredentials, updateUser } from "./login.action";
import { getUuidSelector, getStatusCodeSelector } from "./login.selector";

const LoginContainer = ({
  updateUser,
  checkUserCredentials,
  userUuid,
  statusCode
}) => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const { uuid, name, email, token } = JSON.parse(
        localStorage.getItem("user")
      );
      updateUser(uuid, name, email, token);
    }
  }, [updateUser, userUuid]);

  const handleSubmit = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    checkUserCredentials(username, password);
  };

  if (userUuid && localStorage.getItem("user")) {
    return <Redirect to="/users" />;
  }

  return <LoginView onSubmit={handleSubmit} statusCode={statusCode} />;
};

LoginContainer.propTypes = {
  userUuid: PropTypes.string.isRequired,
  statusCode: PropTypes.number.isRequired
};

const mapStateToProps = state => ({
  userUuid: getUuidSelector(state),
  statusCode: getStatusCodeSelector(state)
});

const mapDispatchToProps = dispatch => ({
  checkUserCredentials: (username, password) =>
    dispatch(checkUserCredentials(username, password)),
  updateUser: (uuid, name, email, token) =>
    dispatch(updateUser(uuid, name, email, token))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);
