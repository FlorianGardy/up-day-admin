import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUserNameSelector } from "../pills/userInfo/userInfo.selector";

const userIdStyle = {
  margin: "auto 0",
  textAlign: "center",
  fontSize: "1.2rem",
  fontWeight: "bold",
  color: "#243330"
};

const LOGIN_LABEL = "Identifiant : ";

const UserId = ({ userName }) => {
  return (
    <div style={userIdStyle}>
      {LOGIN_LABEL} {userName}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    userName: getUserNameSelector(state)
  };
};

UserId.propTypes = {
  userName: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(UserId);
