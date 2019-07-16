import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { getUserName } from "../pills/userInfo/userInfo.selector";


const UserId = ({ userName }) => {
  
  const userIdStyle = {
    margin:"auto 0",
    textAlign: "center",
    fontSize: "1.2rem",
    fontWeight:"bold",
    color: "#243330"
  }

	return (
		<div style={userIdStyle}>
				Identifiant n° {userName}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		userName: getUserName(state)
	};
};

UserId.propTypes = {
	userName: PropTypes.string.isRequired
};

export default connect(mapStateToProps)(UserId);
