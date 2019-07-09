import React, { useEffect } from "react";
import LoginView from "./login.view.jsx";
import { getUserCredentials, updateUser } from "./login.action";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { getUuid } from "./login.selector";

const Login = ({ dispatch, userUuid }) => {
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

  return <LoginView onSubmit={handleSubmit} />;
};

const mapStateToProps = state => ({
  userUuid: getUuid(state)
});

export default connect(mapStateToProps)(Login);
