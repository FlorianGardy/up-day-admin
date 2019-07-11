import React, { useEffect } from "react";
import LoginView from "./login.view.jsx";
import { getUserCredentials, updateUser } from "./login.action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUuid, getStatusCode } from "./login.selector";

const Login = ({ dispatch, userUuid, statusCode }) => {
  useEffect(() => {
    if (localStorage.getItem("user")) {
      const user = JSON.parse(localStorage.getItem("user"));
      const { uuid, name, email, token } = user;
      dispatch(updateUser(uuid, name, email, token));
    }
  }, [dispatch]);

  const handleSubmit = e => {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    dispatch(getUserCredentials(username, password));
  };

  if (userUuid) {
    return <Redirect to="/" />;
  }

  return <LoginView onSubmit={handleSubmit} statusCode={statusCode} />;
};

const mapStateToProps = state => ({
  userUuid: getUuid(state),
  statusCode: getStatusCode(state)
});

export default connect(mapStateToProps)(Login);
